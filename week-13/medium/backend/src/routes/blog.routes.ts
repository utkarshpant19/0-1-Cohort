import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";

export const blogRoutes = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    MY_SECRET_KEY: string;
  };
}>();

blogRoutes.use("/*", async (c, next) => {
  // Initialize prisma
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  // Get the header
  let bearerToken = c.req.header("authorization") || "";

  if (!bearerToken) {
    c.status(403);
    return c.json({
      msg: "Credentials is not correct",
    });
  }

  const token = bearerToken.split(" ")[1];

  // Verify the header
  const jwtPayload = await verify(token, c.env.MY_SECRET_KEY);

  const id = jwtPayload.id + "";

  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (!user) {
    c.status(403);
    return c.json({
      msg: "Token is incorrect",
    });
  }
  await next();

  // If header is corect, call next
  // else return 403
});

blogRoutes.get("/:id", (c) => {
  const { id } = c.req.param();
  return c.text("Get blog based on id");
});

blogRoutes.post("/", (c) => {
  return c.text("Posting a blog");
});
blogRoutes.put("/", (c) => {
  return c.text("Updating a blog");
});
