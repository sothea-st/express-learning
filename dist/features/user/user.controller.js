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
const user_service_1 = __importDefault(require("./user.service"));
class UserController {
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield user_service_1.default.getAllUsers();
            res.json(users);
        });
    }
    getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield user_service_1.default.getUserById(req.params.id);
                if (!user)
                    return res.status(404).json({ message: "User not found" });
                res.json(user);
            }
            catch (error) {
                res.status(400).json("error");
            }
        });
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.status(201).json(yield user_service_1.default.createUser(req.body));
            }
            catch (error) {
                res.status(400).json({ message: error.message });
            }
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedUser = yield user_service_1.default.updateUser(req.params.id, req.body);
                res.json(updatedUser);
            }
            catch (error) {
                res.status(400).json({ message: error.message });
            }
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedUser = yield user_service_1.default.deleteUser(req.params.id);
            if (!deletedUser)
                return res.status(404).json({ message: "User not found" });
            res.json({ message: "User deleted" });
        });
    }
}
exports.default = new UserController();
