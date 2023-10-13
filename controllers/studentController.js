const Student = require("../models/student");

const getAllStudent = async (req, res) => {

    const students = await Student.find();
    
    res.json({ students });
};

const getOneStudentById = async (req, res) => {

    const studentId = req.params.id;

    const student = await Note.findById(studentId);

    res.json({ student });
};

const createStudent = async (req, res) => {
    
    const { name, surname, midterm, final } = req.body;

   
    const student = await Student.create({
        name,
        surname,
        midterm,
        final,
    });

    console.log(student);

    res.json({ student });
};

const updateStudent = async (req, res) => {
   
    const studentId = req.params.id;

    const {  name, surname, midterm, final } = req.body;

    await Student.findByIdAndUpdate(studentId, {
        name, 
        surname,
        midterm, 
        final,
    });

    
    const student = await Student.findById(studentId);

    res.json({ student });
};

const deleteStudent = async (req, res) => {

    const studentId = req.params.id;
    
    await Student.deleteOne({ _id: studentId  });

    res.json({ });
};

module.exports = {
    getAllStudent,
    getOneStudentById,
    createStudent,
    updateStudent,
    deleteStudent,
};