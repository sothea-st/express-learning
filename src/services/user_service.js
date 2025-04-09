const User = require('../models/user_model');

const getAllUsers = () => User.find();

const getUserById = (id) => User.findById(id);

// const createUser = (userData) => User.create(userData);
const createUser = async (userData) => {
 
    // Check if email already exists
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      throw new Error('Email or Name already exists, please choose another one ee.');
    }

    // If no existing user, create a new user
    const newUser = await User.create(userData);
    return newUser;

};


const updateUser = (id, updateData) => 
  User.findByIdAndUpdate(id, updateData, { new: true });

const deleteUser = (id) => User.findByIdAndDelete(id);

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
