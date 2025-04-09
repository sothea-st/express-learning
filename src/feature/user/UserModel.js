// import library mongoose
const mongoose = require('mongoose')

//create schema
const studentSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        age: { type: Number, required: true },
        status: { type: Boolean, default: true }
    }
);

// create model and export or return model
module.exports = mongoose.Model('Student',studentSchema);