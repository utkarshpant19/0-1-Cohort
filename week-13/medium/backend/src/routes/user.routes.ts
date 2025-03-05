import { Hono } from "hono";

export const userRoutes = new Hono();

userRoutes.post("/signup", (c) => {
  return c.json({
    msg: "User Signup",
  });
});
userRoutes.post("/signin", (c) => {
  return c.json({
    msg: "User signin",
  });
});
