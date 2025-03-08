import { Hono } from "hono";
import userRoute from "./user.route";
import blogRoutes from "./blogs.route";

const indexRoute = new Hono();

indexRoute.route("/user", userRoute);
indexRoute.route("/blog", blogRoutes);

export default indexRoute;
