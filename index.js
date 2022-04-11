require("dotenv").config();

const express = require("express");
const app = express();
const authRouter = require("./routes/auth.js");
const sleepRouter = require("./routes/sleep.js");
require("./database.config").connect();
app.use(express.json());
app.use("/auth", authRouter);
app.use("/sleep", sleepRouter);
app.listen(
  process.env.PORT,
  console.log(`listening on port ${process.env.PORT}`)
);
