const { validationResult } = require('express-validator');
const Doctor = require('../../../models/doctor');
const ApiError = require('../../../utills/apiError');

const addDoctor = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMsg = 'Validation failed: Missing or invalid fields';
    console.error(errorMsg, errors.array());
    return res.status(400).json({ error: errorMsg, details: errors.array() });
  }

  const {
    first_name, last_name, email, phone, address,
    doctor_weight, marital_status, sex, blood_group, DOB,
    doctor_height, doctor_history
  } = req.body;

  try {
    let doctor = await Doctor.findOne({ email });
    if (doctor) {
      const errorMsg = 'Doctor already exists';
      console.error(errorMsg, { email });
      return res.status(400).json({ error: errorMsg });
    }

    const imagePath = req.file ? req.file.path : null;
    const imageUrl = req.file ? `${req.protocol}://${req.get('host')}/${imagePath}` : null;

    doctor = new Doctor({
      image: imageUrl,
      first_name,
      last_name,
      email,
      phone,
      address,
      doctor_weight,
      marital_status,
      sex,
      blood_group,
      DOB,
      doctor_height,
      doctor_history
    });

    await doctor.save();
    res.status(201).json({ message: 'Doctor added successfully', doctor });
  } catch (error) {
    console.error('Add Doctor error:', error);
    next(new ApiError(500, 'Server error', true, error.message));
  }
};


module.exports = { addDoctor };
