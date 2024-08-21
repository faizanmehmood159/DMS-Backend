const express = require('express');
const router = express.Router();
const authMiddleware = require('../../middlewares/authMiddleware');
const addDoctorValidation = require('../../middlewares/addDoctorValidation');
const upload = require('../../middlewares/upload');

const { addDoctor } = require('../../controllers/admin/Doctors/addDoctors');
const { addMedicalInfo } = require('../../controllers/admin/Doctors/addMedicalInfo');

const { getAllMedicalInfo , getMedicalInfoById} = require('../../controllers/admin/Doctors/getAllMedicalInfo');

const { updateMedicalInfo } = require('../../controllers/admin/Doctors/updateMedicalInfo');

const { deleteMedicalInfo } = require('../../controllers/admin/Doctors/deleteMedicalInfo');

//Post API's
router.post('/addDoctor', upload.single('image'), addDoctorValidation,authMiddleware , addDoctor);
router.post('/addMedicalInfo',authMiddleware, addMedicalInfo);
router.post('/addMedicalInfo', addMedicalInfo);

// Get API's
router.get('/getAllMedicalInfo', getAllMedicalInfo);
router.get('/getMedicalInfo/:id', getMedicalInfoById);

// Update API's
router.post('/updateMedicalInfo/:id', authMiddleware,updateMedicalInfo);

// Delete API's
router.delete('/deleteMedicalInfo/:id',authMiddleware,  deleteMedicalInfo);

module.exports = router;
