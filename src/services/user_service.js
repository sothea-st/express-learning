const mongoose = require('mongoose');
const User = require('../models/user_model');
const CustomError = require('../utitls/custom_error');  // The custom error class

class UserService {

     // Fetch all active users
     getAllUsers = () => User.find({ status: true });

     // Fetch user by ID
     getUserById = (id) => User.findById(id);

     // Create new user
     createUser = async (userData) => {
          const existingUser = await User.findOne({ email: userData.email });
          if (existingUser) {
               throw new CustomError('Email or Name already exists, please choose another one.', 400);
          }
          const newUser = await User.create(userData);
          return newUser;
     };

     // Update user by ID
     updateUser = async (id, updateData) => {
          if (!mongoose.Types.ObjectId.isValid(id)) {
               throw new CustomError('Invalid user ID format', 400);
          }

          const updatedUser = await User.findByIdAndUpdate(id, { name: updateData.name }, { new: true });

          if (!updatedUser) {
               throw new CustomError('User not found', 404);
          }

          const existingUser = await User.findOne({
               status: true,
               email: { $regex: new RegExp("^" + updateData.email + "$", "i") }
          });

          if (existingUser && existingUser._id.toString() !== id) {
               throw new CustomError('Email or Name already exists.', 409); // Conflict error
          }

          return updatedUser;
     };

     // Delete user by ID
     deleteUser = (id) => User.findByIdAndDelete(id);
}

module.exports = new UserService();
