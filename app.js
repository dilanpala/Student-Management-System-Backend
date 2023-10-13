
const express = require("express");
const cors = require("cors");
const connectToDb = require('./DB/connenctToDb')
const studentController = require("./controller/studentController");
require("dotenv").config();

const app = express();


app.use(express.json());
app.use(cors());


connectToDb();
app.get("/students", studentController.getAllStudent);
app.get("/student/:id", studentController.getOneStudentById);
app.post("/student", studentController.createStudent);
app.put("/student/:id", studentController.updateStudent);
app.delete("/student/:id", studentController.deleteStudent);


app.listen(process.env.PORT);