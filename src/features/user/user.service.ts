import mongoose from 'mongoose';
import { User } from './user.model';


class UserService {

  // Fetch all active users
  getAllUsers = () => User.find();

  // Fetch user by ID
  getUserById = (id: string) => User.findById(id);

  // Create new user
  createUser = async (userData: { name: string; email: string }) => {
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      // throw new CustomError('Email or Name already exists, please choose another one.', 400);
    }
    const newUser = await User.create(userData);
    return newUser;
  };

  // Update user by ID
  updateUser = async (
    id: string,
    updateData: { name: string; email: string }
  ) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      // throw new CustomError('Invalid user ID format', 400);
    }

    const existingUser = await User.findOne({
      status: true,
      email: { $regex: new RegExp(`^${updateData.email}$`, 'i') },
    });

    // if (existingUser && existingUser._id.toString() !== id) {
    //   // throw new CustomError('Email or Name already exists.', 409);
    // }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name: updateData.name },
      { new: true }
    );

    if (!updatedUser) {
      // throw new CustomError('User not found', 404);
    }

    return updatedUser;
  };

  // Delete user by ID
  deleteUser = (id: string) => User.findByIdAndDelete(id);
}

export default new UserService();
