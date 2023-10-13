const { default: mongoose } = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: String,
    surname: String,
    midterm: String,
    final: String,
});

const stundent = new mongoose.model("stundent", studentSchema);

module.exports = stundent;