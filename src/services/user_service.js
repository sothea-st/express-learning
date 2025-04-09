const mongoose = require('mongoose');

const CustomError = require('../utitls/custom_error')

const User = require('../models/user_model');

const getAllUsers = () => User.find({ status: true });

const getUserById = (id) => User.findById(id);

// const createUser = (userData) => User.create(userData);
const createUser = async (userData) => {

  // Check if email already exists
  const existingUser = await User.findOne({ email: userData.email });

  if (existingUser) {
    throw new Error('Email or Name already exists, please choose another one.');
  }

  // If no existing user, create a new user
  const newUser = await User.create(userData);
  return newUser;

};


const updateUser = async (id, updateData) => {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error('Invalid user ID format');
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
    throw new CustomError('Email or Name already exists.', 409); // 409 Conflict
  }

  return updatedUser;
};


const deleteUser = (id) => User.findByIdAndDelete(id);

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
