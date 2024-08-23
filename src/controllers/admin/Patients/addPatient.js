const { validationResult } = require('express-validator');
const Patient = require('../../../models/patient');
const ApiError = require('../../../utills/apiError');

const addPatient = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMsg = 'Validation failed: Missing or invalid fields';
    console.error(errorMsg, errors.array());
    return res.status(400).json({ error: errorMsg, details: errors.array() });
  }

  const {
    first_name, last_name, email, phone, address,
    patient_weight, marital_status, sex, blood_group, DOB,
    patient_height, patient_history
  } = req.body;

  try {
    let patient = await Patient.findOne({ email });
    if (patient) {
      const errorMsg = 'Patient already exists';
      console.error(errorMsg, { email });
      return res.status(400).json({ error: errorMsg });
    }

    const imagePath = req.file ? req.file.path : null;
    const imageUrl = req.file ? `${req.protocol}://${req.get('host')}/${imagePath}` : null;

    patient = new Patient({
      image: imageUrl,
      first_name,
      last_name,
      email,
      phone,
      address,
      patient_weight,
      marital_status,
      sex,
      blood_group,
      DOB,
      patient_height,
      patient_history
    });

    await patient.save();
    res.status(201).json({ message: 'Patient added successfully', patient });
  } catch (error) {
    console.error('Add Patient error:', error);
    next(new ApiError(500, 'Server error', true, error.message));
  }
};

module.exports = { addPatient };
