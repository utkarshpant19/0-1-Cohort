import { Hono } from "hono";
import indexRoute from "./routes/index.route";
import { cors } from "hono/cors";

const app = new Hono();

app.use("/*", cors());

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/api/v1", indexRoute);

export default app;
