const mongoose = require('mongoose');

const medicalInfoSchema = new mongoose.Schema({
  main_specialization: {
    type: String,
    required: true
  },
  secondary_specialization: {
    type: String,
    required: false
  },
  medical_education: {
    type: String,
    required: true
  },
  period: {
    type: String, // or you can use Date type if you want to store specific dates
    required: true
  }
}, { timestamps: true });

const MedicalInfo = mongoose.model('MedicalInfo', medicalInfoSchema);

module.exports = MedicalInfo;
