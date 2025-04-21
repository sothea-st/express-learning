"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("./user.controller"));
const auth_middleware_1 = require("../../middleware/auth-middleware");
const router = (0, express_1.Router)();
// Apply the verifyJWT middleware globally for all routes in this router
router.use(auth_middleware_1.verifyJWT);
router.get('/users', user_controller_1.default.getUsers);
router.get('/users/:id', user_controller_1.default.getUser);
router.post('/users', user_controller_1.default.createUser);
router.put('/users/:id', user_controller_1.default.updateUser);
router.delete('/users/:id', user_controller_1.default.deleteUser);
exports.default = router;
