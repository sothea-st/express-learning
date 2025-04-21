import mongoose, { Document, Schema } from 'mongoose';

// Define the User schema
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensure email is unique
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// Create a model for the User collection
const User = mongoose.model<IUser>('User', userSchema);

export interface IUser extends Document {
  name: string;
  email: string;
}

export { User };
