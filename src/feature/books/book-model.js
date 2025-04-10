// import library mongoose
const mongoose = require('mongoose');

// create schema
const bookSchema = new mongoose.Schema({
    name:{type:String,required:true},
    price:{type:Number,required:true},
    status:{type:Boolean,default:true}
});

// create model and export
module.exports = mongoose.model('Book',bookSchema);