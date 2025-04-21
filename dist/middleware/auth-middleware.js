"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJWT = void 0;
const jwt_1 = require("../utils/jwt");
const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!(authHeader === null || authHeader === void 0 ? void 0 : authHeader.startsWith('Bearer '))) {
        return res.status(401).json({ message: 'Missing token' });
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = (0, jwt_1.verifyToken)(token);
        req.user = decoded;
        next();
    }
    catch (err) {
        return res.status(403).json({ message: 'Invalid or expired token' });
    }
};
exports.verifyJWT = verifyJWT;
