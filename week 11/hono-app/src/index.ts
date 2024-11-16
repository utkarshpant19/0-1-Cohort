import { Context, Hono } from "hono";
import { BlankEnv, BlankInput } from "hono/types";

const app = new Hono();

// Auth Middleware

async function authMiddleware(
  c: Context<BlankEnv, "/", BlankInput>,
  next: any
) {
  if (c.req.header("Authorization")) {
    const initTime = new Date();
    await next();

    const totalTime = (new Date().getTime() - initTime.getTime()) / 1000;
    console.log(`It took ${totalTime} seconds`);
  } else {
    c.text("You don't have access");
  }
}

app.post("/", authMiddleware, async (c) => {
  const body = await c.req.json();
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.text("Hello Hono!");
});

export default app;
