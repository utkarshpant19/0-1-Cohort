import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { StatusCode } from "../constants/statusCode";
import { verify } from "hono/jwt";
// import { postBlog } from "../model/schema.zod";
import { ServerMessage } from "../constants/server.message";
import {
  createBlogSchema,
  updateBlogSchema,
} from "@utkarsh_pant/medium-common";

export const blogRoutes = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    SIGNATURE_KEY: string;
  };
  Variables: {
    userId: string;
  };
}>();

// Middlewares
blogRoutes.use("/*", async (c, next) => {
  const bearerToken = c.req.header("authorization") || "";
  const token = bearerToken.split(" ")[1];
  // Verify
  const tokenObj: any = await verify(token, c.env.SIGNATURE_KEY);

  if (tokenObj) {
    const body = await c.req.json();
    //   body.authorId = tokenObj.id;
    c.set("userId", tokenObj.id);
    await next();
  } else {
    c.status(StatusCode.UNAUTHORIZED);
    return c.json({
      msg: "Invalid Token",
    });
  }
});

blogRoutes.post("/", async (c) => {
  console.log("Blog post request");

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const authorId = c.get("userId");
  //
  const body = await c.req.json();
  body.authorId = authorId;

  // Verify the body
  const { success } = createBlogSchema.safeParse(body);

  if (!success) {
    c.status(StatusCode.BAD_REQUEST);
    return c.json({
      msg: "Invalid Request",
    });
  }

  console.log("Reqeust body ", body);

  // Insert blog in db w.r.t. that user
  try {
    const blog = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId,
      },
    });

    return c.json({
      msg: "Blog created with blog id " + blog.id,
    });
  } catch (err) {
    console.log(err);
    c.status(StatusCode.BAD_REQUEST);
    return c.json({
      msg: "Something went Wrong !!",
    });
  }
});

// Update the blog
blogRoutes.put("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  // Verify the body
  const { success } = updateBlogSchema.safeParse(body);

  if (!success) {
    c.status(StatusCode.BAD_REQUEST);
    return c.json({
      msg: "Invalid Request",
    });
  }

  const id = body.id;

  if (!id) {
    c.status(StatusCode.BAD_REQUEST);
    return c.json({ msg: ServerMessage.INVALID_REQUEST });
  }

  const updatedPost: any = {
    title: body.title,
    content: body.content,
    published: body.published,
  };

  // Delete the empty fields
  Object.keys(updatedPost).forEach(
    (key) => updatedPost[key] === undefined && delete updatedPost[key]
  );

  const blog = await prisma.post.update({
    where: {
      id,
    },
    data: updatedPost,
  });

  return c.json({
    msg: ServerMessage.BLOG_UPDATED,
    blog,
  });
});

// Get list of all blogs [Todo: Add Pagination]
blogRoutes.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  try {
    const blogs = await prisma.post.findMany(); // Return all the blogs

    return c.json({
      blogs,
    });
  } catch (err) {
    c.status(StatusCode.UNAUTHORIZED);
    return c.json({
      msg: ServerMessage.SOMETHING_WENT_WRONG,
    });
  }
});

// Get a blog
blogRoutes.get("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const id = c.req.param("id");

  try {
    const blog = await prisma.post.findFirst({
      where: {
        id,
      },
    });
    return c.json({
      blog,
    });
  } catch (err) {
    console.log(err);
    c.status(StatusCode.BAD_REQUEST);
    return c.json({
      msg: "Blog not found",
    });
  }
});
