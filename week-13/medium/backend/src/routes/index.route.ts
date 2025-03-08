import { Hono } from "hono";
import { userRoutes } from "./user.routes";
import { blogRoutes } from "./blog.routes";

const indexRoute = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
}>();

indexRoute.route("/user", userRoutes);
indexRoute.route("/blog", blogRoutes);

export default indexRoute;
