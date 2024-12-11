import { config } from "dotenv";
import express from "express";

//Configuring Dotenv to use environment variables from .env file
config();

const app = express();

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("App is listening on port ", port);
});
