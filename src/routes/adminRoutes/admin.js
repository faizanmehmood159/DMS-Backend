const express = require('express');
const router = express.Router();
const authMiddleware = require('../../middlewares/authMiddleware');
const addDoctorValidation = require('../../middlewares/addDoctorValidation');
const upload = require('../../middlewares/upload');

const { addDoctor } = require('../../controllers/admin/Doctors/addDoctors');
const { addMedicalInfo } = require('../../controllers/admin/Doctors/addMedicalInfo');

//Post API's
router.post('/addDoctor', upload.single('image'), addDoctorValidation,authMiddleware , addDoctor);
router.post('/addMedicalInfo',authMiddleware, addMedicalInfo);

module.exports = router;
