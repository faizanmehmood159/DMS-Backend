const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const AppRoutes = require('./src/routes'); 
const cors = require('cors');
const { errorHandler } = require('./src/utills/errorHandler');
const path = require('path');

dotenv.config();
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Static folder for file uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// CORS configuration
app.use(cors({
  origin: 'http://localhost:5173', // Allow frontend origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
}));

// Preflight OPTIONS request handling
app.options('*', cors());

// Connect to the database
connectDB();

// API routes
app.use('/api', AppRoutes);

// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
