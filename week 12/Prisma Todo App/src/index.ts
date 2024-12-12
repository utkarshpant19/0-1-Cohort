import { config } from "dotenv";
import express, { Request, Response } from "express";
import { createUser } from "./db/user";

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

app.listen(port, () => {
  console.log("App is listening on port ", port);
});
