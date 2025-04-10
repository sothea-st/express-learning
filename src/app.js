const express = require('express');
const connectDB = require('./config/db');
const routes = require('./routes');
require('dotenv').config();

const app = express(); // express() Creates the main app server


connectDB();

app.use(express.json()); // Middleware to parse JSON request bodies

// All API routes under `/api`
app.use('/api', routes); // Handle GET requests to /


const PORT = process.env.PORT || 8001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // Start the server

module.exports = app;
