type KeyPressed = "up" | "down" | "left" | "right";
import express from "express";

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

export function fun(keypressed: Direction) {}

fun(Direction.Up);

// Popular useCase inExpress

enum ResponseStatus {
  Success = 200,
  NotFound = 411,
  InternalServerError = 500,
}

const app = express();

app.get("/", (req, res) => {
  res.status(ResponseStatus.NotFound).json({ message: "Not Found" });
});
