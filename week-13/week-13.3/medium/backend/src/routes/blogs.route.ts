import { Hono } from "hono";

const blogRoutes = new Hono();

blogRoutes.post("/", (c) => {
  return c.text("Posted Blog");
});
blogRoutes.put("/:id", (c) => {
  return c.text("Upload Blog");
});
blogRoutes.get("/bulk", (c) => {
  return c.text("Get list of blogs");
});
blogRoutes.get("/:id", (c) => {
  return c.text("Get details of a blog");
});

export default blogRoutes;
