import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db'; // Import the connectDB function
import routes from './routes';  // Import the index file from routes folder
import  {verifyJWT}  from './middleware/verifyJWT';
dotenv.config();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
connectDB(); // Call the MongoDB connection function

// ✅ Apply middleware globally
app.use(verifyJWT);

// Register the routes
app.use('/api',routes);  // Register all routes from routes/index.ts

// Example route for testing
app.get('/', (_, res) => {
  res.send('Hello from Express + TypeScript + MongoDB!');
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
