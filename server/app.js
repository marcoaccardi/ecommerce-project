const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"));

mongoose.connection.on("error", (err) => {
  console.log(`DB connection error : ${err.message}`);
});

app.get("/", (req, res) => {
  res.send("hello from node");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
