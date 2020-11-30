const express = require("express");
const app = express();
const students = require("./students.json");
const cors = require("cors");
app.use(cors());

app.listen(3001, () => {
  console.log("Running...");
});

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/hi", (req, res) => {
  res.json({ message: "hi" });
});

const numbers = [1, 2, 3, 4, 5];
app.get("/numbers", (req, res) => {
  res.json(numbers);
});

app.get("/students", (req, res) => {
  res.json(students);
});
