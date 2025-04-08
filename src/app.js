const express = require('express');
const app = express();
const routes = require('./routes');
require('dotenv').config();
const connectDB = require('./config/db');

// Connect to MongoDB
connectDB();

app.use(express.json());

// API routes
app.use('/api', routes);

module.exports = app;
