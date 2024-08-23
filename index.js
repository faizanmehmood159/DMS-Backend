// index.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const AppRoutes = require('./src/routes'); 
const cors = require('cors');
const { errorHandler } = require('./src/utills/errorHandler');
const path = require('path');

dotenv.config();
const app = express();
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api', AppRoutes);



app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, 
}));

app.options('*', cors());

connectDB();

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
