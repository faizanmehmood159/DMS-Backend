const { validationResult, body } = require('express-validator');
const MedicalInfo = require('../../../models/medicalInfo');
const ApiError = require('../../../utills/apiError');

// Update Medical Info by ID
const updateMedicalInfo = async (req, res, next) => {
    const { id } = req.params;
    const { main_specialization, secondary_specialization, medical_education, period } = req.body;
  
    try {
      const medicalInfo = await MedicalInfo.findByIdAndUpdate(id, {
        main_specialization,
        secondary_specialization,
        medical_education,
        period
      }, { new: true });
  
      if (!medicalInfo) {
        return res.status(404).json({ error: 'Medical information not found' });
      }
      res.status(200).json({ message: 'Medical information updated successfully', medicalInfo });
    } catch (error) {
      console.error('Update Medical Info error:', error);
      next(new ApiError(500, 'Server error', true, error.message));
    }
  };
  

  module.exports ={ updateMedicalInfo}