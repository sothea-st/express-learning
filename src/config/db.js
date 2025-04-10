// imports Mongoose
/*
  mongoose is a ODM(object data modeling) library used to interact with MongoDB
*/
const mongoose = require('mongoose'); 
const MONGO_HOST = process.env.MONGO_HOST;
const MONGO_DB = process.env.MONGO_DB;
const MONGO_USER = process.env.MONGO_USER; 
const MONGO_PASS = process.env.MONGO_PASS;  

// Construct the MongoDB URI dynamically using the environment variables
const MONGO_URI = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}/${MONGO_DB}?retryWrites=true&w=majority`;

 

const connectDB = async () => {
  try {
    /* 
      use mongoose.connect() to connect to MongoDB using the URI
      from your .env file: process.env.MONGO_URI
    */
    await mongoose.connect(process.env.MONGO_URI,{
      useNewUrlParser:true,
      useUnifiedTopology:true
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
