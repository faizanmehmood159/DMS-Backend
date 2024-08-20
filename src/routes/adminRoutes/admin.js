const express = require('express');
const router = express.Router();
const authMiddleware = require('../../middlewares/authMiddleware');

const { addDoctor } = require('../../controllers/admin/Doctors/addDoctors');


const addDoctorValidation = require('../../middlewares/addDoctorValidation');
const upload = require('../../middlewares/upload');

//Post API's
router.post('/addDoctor', upload.single('image'), addDoctorValidation,authMiddleware , addDoctor);

module.exports = router;
