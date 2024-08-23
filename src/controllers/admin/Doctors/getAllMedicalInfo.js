const { validationResult, body } = require('express-validator');
const MedicalInfo = require('../../../models/medicalInfo');
const ApiError = require('../../../utills/apiError');


const getAllMedicalInfo = async (req, res, next) => {
    try {
      const medicalInfos = await MedicalInfo.find();
      res.status(200).json(medicalInfos);
    } catch (error) {
      console.error('Get All Medical Info error:', error);
      next(new ApiError(500, 'Server error', true, error.message));
    }
  };
  
  const getMedicalInfoById = async (req, res, next) => {
    const { id } = req.params;
    
    try {
      const medicalInfo = await MedicalInfo.findById(id);
      if (!medicalInfo) {
        return res.status(404).json({ error: 'Medical information not found' });
      }
      res.status(200).json(medicalInfo);
    } catch (error) {
      console.error('Get Medical Info by ID error:', error);
      next(new ApiError(500, 'Server error', true, error.message));
    }
  };
  
module.exports = {getAllMedicalInfo , getMedicalInfoById}