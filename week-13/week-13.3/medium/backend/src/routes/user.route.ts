import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { StatusCode } from "../constants/statusCode";
import { ServerMessage } from "../constants/server.message";
import { signUpSchema, signInSchema } from "@utkarsh_pant/medium-common";

const userRoute = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    SIGNATURE_KEY: string;
  };
}>();

userRoute.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const { success } = signUpSchema.safeParse(body);

  if (!success) {
    c.status(StatusCode.BAD_REQUEST);
    return c.json({ msg: ServerMessage.INVALID_REQUEST });
  }

  // If user is not present then creates a user with id
  // Add zod validation and hash the password

  try {
    const user = await prisma.user.create({
      data: {
        username: body.username,
        password: body.password,
        email: body.email,
      },
    });

    const jwtToken = await sign({ id: user.id }, c.env.SIGNATURE_KEY);

    return c.json({
      msg: "User signed up successfully",
      token: jwtToken,
    });
  } catch (err) {
    console.log(err);
    c.status(StatusCode.ALREADY_EXISTS);
    return c.json({
      msg: `Username already exists with ${body.email} `,
    });
  }
});

userRoute.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  // Get the body

  const body = await c.req.json();

  const { success } = signInSchema.safeParse(body);

  if (!success) {
    c.status(StatusCode.BAD_REQUEST);
    return c.json({ msg: ServerMessage.INVALID_REQUEST });
  }

  const hashedPassword = body.password;

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
      password: hashedPassword,
    },
  });

  if (!user) {
    c.status(StatusCode.UNAUTHORIZED);
    return c.json({
      msg: "User email is not registered",
    });
  }

  // If found , Generate a jwt token

  const token = await sign({ id: user.id }, c.env.SIGNATURE_KEY);
  return c.json({
    token,
  });
});

export default userRoute;
