// index.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const AppRoutes = require('./src/routes'); 
const { errorHandler } = require('./src//utills/errorHandler');

dotenv.config();
const app = express();
app.use(express.json());

app.use('/api', AppRoutes);

connectDB();

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
