"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJWT = void 0;
const verifyJWT = (req, res, next) => {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }
    try {
        // Replace this with jwt.verify(token, secret) in real-world usage
        if (token === "valid_token") {
            return next();
        }
        return res.status(403).json({ message: "Invalid token" });
    }
    catch (err) {
        return res.status(400).json({ message: "Token verification failed" });
    }
};
exports.verifyJWT = verifyJWT;
