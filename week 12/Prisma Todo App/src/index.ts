import { config } from "dotenv";
import express, { Request, Response } from "express";
import { createUser, getUser } from "./db/user";
import prisma from "./db/db";
import { User } from "./interfaces/Todos.interface";
import { createTodo, updateTodo } from "./db/todos";
import userMiddleware from "./middlewares/user.middlewares";
import { statusCodes } from "./constants/statusCodes.constant";
import UserNotFoundException from "./exceptions/UserNotFoundExpection";

//Configuring Dotenv to use environment variables from .env file
config();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req: any, res: any) => {
  res.send("Hello World");
});

app.post("/signup", async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    const response = await createUser(username, email, password.toString());

    console.log("User created ", response);

    res.json({
      message: "User created successfully with id ",
    });
  } catch (err) {
    res.status(401).json({
      msg: "Email/ Username already exists",
    });
  }
});

app.get("/getUsers", async (req: any, res: any) => {
  const users: User[] = await prisma.user.findMany();
  console.log("All users ", users);

  return res.json(users);
});

app.get("/getUser/:id", async (req: any, res: any) => {
  const userId = +req.params.id;

  try {
    const user = await getUser(userId);

    if (user) {
      return res.json({
        user,
      });
    } else
      res.status(401).json({
        msg: "User not found",
      });
  } catch (err) {
    res.status(401).json({
      msg: "User not found",
    });
  }
});

app.post("/todo", async (req: Request, res: Response, todoMiddleware) => {
  const { userId, title, description } = req.body;

  // Check if userExists
  const user = await getUser(+userId);

  if (user) {
    const response = await createTodo(+userId, title, description);

    res.json({
      response,
    });
  }
});

app.put("/updateTodo:/id", async (req: Request, res: Response) => {
  const id = req.params;
  let { userId, description, isDone } = req.body;
  isDone = true;
  const response = await updateTodo(+id, { userId, description, isDone });

  res.json({
    message: response,
  });
});

function asyncHandler(controllerFunction) {}

app.get("/todos", async function (req: Request, res: Response) {
  const userId = +req.params.id;

  // Check if user exists for the todos
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new UserNotFoundException(userId);
  }

  const todos = await prisma.todos.findMany({
    where: {
      userId,
    },
  });

  return res.json({
    msg: todos,
  });
});

app.listen(port, () => {
  console.log("App is listening on port ", port);
});
