"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
// src/utils/jwt.util.ts
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const privateKeyPath = path_1.default.join(__dirname, '../keys/private.key');
const publicKeyPath = path_1.default.join(__dirname, '../keys/public.key');
const privateKey = fs_1.default.readFileSync(privateKeyPath, 'utf8');
const publicKey = fs_1.default.readFileSync(publicKeyPath, 'utf8');
const generateToken = (payload) => {
    return jsonwebtoken_1.default.sign(payload, privateKey, {
        algorithm: 'RS256',
        expiresIn: '1h',
    });
};
exports.generateToken = generateToken;
const verifyToken = (token) => {
    return jsonwebtoken_1.default.verify(token, publicKey, {
        algorithms: ['RS256'],
    });
};
exports.verifyToken = verifyToken;
