"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./config/db"); // Import the connectDB function
const routes_1 = __importDefault(require("./routes")); // Import the index file from routes folder
const verifyJWT_1 = require("./middleware/verifyJWT");
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middleware to parse JSON
app.use(express_1.default.json());
// Connect to MongoDB
(0, db_1.connectDB)(); // Call the MongoDB connection function
// ✅ Apply middleware globally
app.use(verifyJWT_1.verifyJWT);
// Register the routes
app.use('/api', routes_1.default); // Register all routes from routes/index.ts
// Example route for testing
app.get('/', (_, res) => {
    res.send('Hello from Express + TypeScript + MongoDB!');
});
// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
