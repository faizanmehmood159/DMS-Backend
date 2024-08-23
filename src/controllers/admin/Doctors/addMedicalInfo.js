const { validationResult, body } = require('express-validator');
const MedicalInfo = require('../../../models/medicalInfo');
const ApiError = require('../../../utills/apiError');

const addMedicalInfo = [

  body('main_specialization').notEmpty().withMessage('Main specialization is required'),
  body('medical_education').notEmpty().withMessage('Medical education is required'),
  body('period').notEmpty().withMessage('Period is required'),

  
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMsg = 'Validation failed: Missing or invalid fields';
      console.error(errorMsg, errors.array());
      return res.status(400).json({ error: errorMsg, details: errors.array() });
    }

    const { main_specialization, secondary_specialization, medical_education, period } = req.body;

    try {
      const medicalInfo = new MedicalInfo({
        main_specialization,
        secondary_specialization,
        medical_education,
        period
      });

      await medicalInfo.save();
      res.status(201).json({ message: 'Medical information added successfully', medicalInfo });
    } catch (error) {
      console.error('Add Medical Info error:', error);
      next(new ApiError(500, 'Server error', true, error.message));
    }
  }
];

module.exports = { addMedicalInfo };
