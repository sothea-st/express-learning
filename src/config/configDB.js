// import library mongoose 
const mongoose = require('mongoose')

// create async function connectDB 
const connectDB = async () => {
    try {
        // connect to MongoDB using URI
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connect MongoDB successful!")
    } catch (error) {
        console.log("fail connect MongoDB")
        process.exit(1);
    }
}

// return function connectDB
module.exports = connectDB;

 