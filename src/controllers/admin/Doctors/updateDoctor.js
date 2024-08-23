const { validationResult } = require('express-validator');
const Doctor = require('../../../models/doctor');
const ApiError = require('../../../utills/apiError');

const updateDoctor = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMsg = 'Validation failed: Missing or invalid fields';
    console.error(errorMsg, errors.array());
    return res.status(400).json({ error: errorMsg, details: errors.array() });
  }

  const { id } = req.params;
  const {
    first_name, last_name, email, phone, address,
    doctor_weight, marital_status, sex, blood_group, DOB,
    doctor_height, doctor_history
  } = req.body;

  try {
    let doctor = await Doctor.findById(id);
    if (!doctor) {
      const errorMsg = 'Doctor not found';
      console.error(errorMsg, { id });
      return res.status(404).json({ error: errorMsg });
    }

    const imagePath = req.file ? req.file.path : doctor.image;
    const imageUrl = req.file ? `${req.protocol}://${req.get('host')}/${imagePath}` : doctor.image;

    // Update the doctor's information
    doctor.image = imageUrl;
    doctor.first_name = first_name || doctor.first_name;
    doctor.last_name = last_name || doctor.last_name;
    doctor.email = email || doctor.email;
    doctor.phone = phone || doctor.phone;
    doctor.address = address || doctor.address;
    doctor.doctor_weight = doctor_weight || doctor.doctor_weight;
    doctor.marital_status = marital_status || doctor.marital_status;
    doctor.sex = sex || doctor.sex;
    doctor.blood_group = blood_group || doctor.blood_group;
    doctor.DOB = DOB || doctor.DOB;
    doctor.doctor_height = doctor_height || doctor.doctor_height;
    doctor.doctor_history = doctor_history || doctor.doctor_history;

    await doctor.save();
    res.status(200).json({ message: 'Doctor updated successfully', doctor });
  } catch (error) {
    console.error('Update Doctor error:', error);
    next(new ApiError(500, 'Server error', true, error.message));
  }
};

module.exports = { updateDoctor };
