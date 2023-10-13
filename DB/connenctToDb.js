const mongoose = require("mongoose");
require("dotenv").config();

connectToDb = async () => {
    try {
        await mongoose.connect(process.env.URL);
        console.log("Connected to database");
      } catch (err) {
        console.log(err);
      }
}

module.exports = connectToDb;
