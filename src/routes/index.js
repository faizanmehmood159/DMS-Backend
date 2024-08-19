// src/routes/index.js
const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes/auth');
// const adminRoutes = require('./adminRoutes/admin');

router.use('/auth', authRoutes);
// router.use('/admin', adminRoutes);

module.exports = router; 
