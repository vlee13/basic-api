const express = require("express");
const app = express();
const students = require("./students.json");
const cors = require("cors");

app.use(cors());

app.listen(3000, () => {
  console.log("Running...");
});

app.get("/", (req, res) => {
  res.send({ message: "Hellooooo World" });
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

app.get("/randomize", (req, res) => {
  let randomStudent = students[Math.floor(Math.random() * students.length)];
  console.log(randomStudent);
  res.json(randomStudent);
});

app.get("/students/:studentId", (req, res) => {
  let studentId = req.params.studentId;
  console.log(studentId);
  let student = students.find((student) => student._id === studentId);
  res.json(student);
});
