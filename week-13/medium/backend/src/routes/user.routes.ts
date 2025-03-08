import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { decode, sign, verify } from "hono/jwt";

export const userRoutes = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    MY_SECRET_KEY: string;
  };
}>();

userRoutes.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      password: body.password,
    },
  });

  const token = await sign({ id: user.id }, c.env.MY_SECRET_KEY);

  return c.json({
    token,
  });
});
userRoutes.post("/signin", async (c) => {
  // Initialize prisma on every route

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
      password: body.password,
    },
  });

  if (!user) {
    c.status(403);
    return c.json({
      msg: `Email or password is incorrect.`,
    });
  }

  // If user exists , sign in with jwt token
  const payload = { id: user.id };
  const token = await sign(payload, c.env.MY_SECRET_KEY);

  return c.json({
    msg: "Successfully Signed in",
    token,
  });
});
