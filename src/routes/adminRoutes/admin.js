const express = require('express');
const router = express.Router();
const authMiddleware = require('../../middlewares/authMiddleware');
const addDoctorValidation = require('../../middlewares/addDoctorValidation');
const upload = require('../../middlewares/upload');

const { addDoctor } = require('../../controllers/admin/Doctors/addDoctors');
const { addMedicalInfo } = require('../../controllers/admin/Doctors/addMedicalInfo');
const { addPatient } = require('../../controllers/admin/Patients/addPatient');


const { getAllMedicalInfo , getMedicalInfoById} = require('../../controllers/admin/Doctors/getAllMedicalInfo');
const { getAllDoctors, getDoctorById } = require('../../controllers/admin/Doctors/getAllDoctors');
const { getAllPatients } = require('../../controllers/admin/Patients/getAllPatients');


const { updateMedicalInfo } = require('../../controllers/admin/Doctors/updateMedicalInfo');
const { updateDoctor } = require('../../controllers/admin/Doctors/updateDoctor');
const { UpdatePatient } = require('../../controllers/admin/Patients/updatePatient');


const { deleteMedicalInfo } = require('../../controllers/admin/Doctors/deleteMedicalInfo');
const { deleteDoctor } = require('../../controllers/admin/Doctors/deleteDoctor');
const { deletePatient } = require('../../controllers/admin/Patients/deletePatient');





//Post API's
router.post('/addDoctor', upload.single('image'), addDoctorValidation,authMiddleware , addDoctor);
router.post('/addMedicalInfo',authMiddleware, addMedicalInfo);
router.post('/addPatient', upload.single('image'), addDoctorValidation,authMiddleware , addPatient);


// Get API's
router.get('/getAllMedicalInfo', getAllMedicalInfo);
router.get('/getMedicalInfo/:id', getMedicalInfoById);
router.get('/getAllDoctors', getAllDoctors);
router.get('/getDoctor/:id', getDoctorById);
router.get('/getAllPatient', getAllPatients)

// Update API's
router.post('/updateMedicalInfo/:id', authMiddleware,updateMedicalInfo);
router.post('/updateDoctor/:id', upload.single('image'), authMiddleware, updateDoctor);
router.post('/updatePatient/:id',authMiddleware, UpdatePatient);


// Delete API's
router.delete('/deleteMedicalInfo/:id',authMiddleware,  deleteMedicalInfo);
router.delete('/deleteDoctor/:id',authMiddleware, deleteDoctor);
router.delete('/deletePatient/:id',authMiddleware, deletePatient);



module.exports = router;
