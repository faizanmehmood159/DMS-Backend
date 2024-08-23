const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  image: { type: String, default: null },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  patient_weight: { type: Number, required: true },
  marital_status: { type: String, required: true },
  sex: { type: String, required: true },
  blood_group: { type: String, required: true },
  DOB: { type: Date, required: true },
  patient_height: { type: Number, required: true },
  patient_history: { type: String, required: true }
}, { timestamps: true });

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
