import mongoose, { Document, Schema } from "mongoose";

const userSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
    },
    {
        timestamps: true,
    }
);

interface IUser extends Document {
  name: string;
  email: string;
}

const User = mongoose.model<IUser>("User", userSchema);

export { User };
