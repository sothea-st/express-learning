"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const user_model_1 = require("./user.model");
class UserService {
    constructor() {
        // Fetch all active users
        this.getAllUsers = () => user_model_1.User.find();
        // Fetch user by ID
        this.getUserById = (id) => user_model_1.User.findById(id);
        // Create new user
        this.createUser = (userData) => __awaiter(this, void 0, void 0, function* () {
            const existingUser = yield user_model_1.User.findOne({ email: userData.email });
            if (existingUser) {
                // throw new CustomError('Email or Name already exists, please choose another one.', 400);
            }
            const newUser = yield user_model_1.User.create(userData);
            return newUser;
        });
        // Update user by ID
        this.updateUser = (id, updateData) => __awaiter(this, void 0, void 0, function* () {
            if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
                // throw new CustomError('Invalid user ID format', 400);
            }
            const existingUser = yield user_model_1.User.findOne({
                status: true,
                email: { $regex: new RegExp(`^${updateData.email}$`, 'i') },
            });
            // if (existingUser && existingUser._id.toString() !== id) {
            //   // throw new CustomError('Email or Name already exists.', 409);
            // }
            const updatedUser = yield user_model_1.User.findByIdAndUpdate(id, { name: updateData.name }, { new: true });
            if (!updatedUser) {
                // throw new CustomError('User not found', 404);
            }
            return updatedUser;
        });
        // Delete user by ID
        this.deleteUser = (id) => user_model_1.User.findByIdAndDelete(id);
    }
}
exports.default = new UserService();
