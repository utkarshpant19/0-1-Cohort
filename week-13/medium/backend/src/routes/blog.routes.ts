import { Hono } from "hono";

export const blogRoutes = new Hono();

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
