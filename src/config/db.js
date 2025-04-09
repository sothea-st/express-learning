// imports Mongoose
/*
  mongoose is a ODM(object data modeling) library used to interact with MongoDB
*/
const mongoose = require('mongoose'); 

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
