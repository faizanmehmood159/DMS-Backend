const { validationResult, body } = require('express-validator');
const MedicalInfo = require('../../../models/medicalInfo');
const ApiError = require('../../../utills/apiError');

const deleteMedicalInfo = async (req, res, next) => {
    const { id } = req.params;
  
    try {
      const medicalInfo = await MedicalInfo.findByIdAndDelete(id);
      if (!medicalInfo) {
        return res.status(404).json({ error: 'Medical information not found' });
      }
      res.status(200).json({ message: 'Medical information deleted successfully' });
    } catch (error) {
      console.error('Delete Medical Info error:', error);
      next(new ApiError(500, 'Server error', true, error.message));
    }
  };
  

  module.exports ={ deleteMedicalInfo}