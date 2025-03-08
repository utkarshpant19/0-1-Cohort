import { Hono } from "hono";
import indexRoute from "./routes/index.route";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/api/v1", indexRoute);

export default app;
