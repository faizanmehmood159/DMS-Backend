const { validationResult } = require('express-validator');
const Patient = require('../../../models/patient');
const ApiError = require('../../../utills/apiError');

const UpdatePatient = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMsg = 'Validation failed: Missing or invalid fields';
    console.error(errorMsg, errors.array());
    return res.status(400).json({ error: errorMsg, details: errors.array() });
  }

  const { id } = req.params;
  const {
    first_name, last_name, email, phone, address,
    patient_weight, marital_status, sex, blood_group, DOB,
    patient_height, patient_history
  } = req.body;

  try {
    let patient = await Patient.findById(id);
    if (!patient) {
      const errorMsg = 'Patient not found';
      console.error(errorMsg, { id });
      return res.status(404).json({ error: errorMsg });
    }

    const imagePath = req.file ? req.file.path : patient.image;
    const imageUrl = req.file ? `${req.protocol}://${req.get('host')}/${imagePath}` : patient.image;

    // Update the patient's information
    patient.image = imageUrl;
    patient.first_name = first_name || patient.first_name;
    patient.last_name = last_name || patient.last_name;
    patient.email = email || patient.email;
    patient.phone = phone || patient.phone;
    patient.address = address || patient.address;
    patient.patient_weight = patient_weight || patient.patient_weight;
    patient.marital_status = marital_status || patient.marital_status;
    patient.sex = sex || patient.sex;
    patient.blood_group = blood_group || patient.blood_group;
    patient.DOB = DOB || patient.DOB;
    patient.patient_height = patient_height || patient.patient_height;
    patient.patient_history = patient_history || patient.patient_history;

    await patient.save();
    res.status(200).json({ message: 'Patient updated successfully', patient });
  } catch (error) {
    console.error('Update Patient error:', error);
    next(new ApiError(500, 'Server error', true, error.message));
  }
};

module.exports = { UpdatePatient };
