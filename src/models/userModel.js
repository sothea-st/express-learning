// import mongoose or ODM (Object data modeling) library used to interact with MongoDB
const mongoose = require('mongoose')

// create schema
user = {
    name: { type:String , required:true },
    email:{ type:String , required:true, unique: true},
    age:    {type: Number },
    status:{type: Boolean,default:true}
};

const userSchema = new mongoose.Schema(user);

// create model and export or return model 
module.exports = mongoose.model('User',userSchema)
 
