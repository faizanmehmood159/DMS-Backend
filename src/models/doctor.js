const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  image: {
    type: String,
    required: false
  },
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/\S+@\S+\.\S+/, 'Please enter a valid email address']
  },
  phone: {
    type: String,
    required: true,
    match: [/^\d{10}$/, 'Please enter a valid phone number']
  },
  address: {
    type: String,
    required: true
  },
  doctor_weight: {
    type: Number,
    required: true
  },
  marital_status: {
    type: String,
    enum: ['Single', 'Married', 'Divorced', 'Widowed'],
    required: true
  },
  sex: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true
  },
  blood_group: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    required: true
  },
  DOB: {
    type: String,
    required: true
  },
  doctor_height: {
    type: Number,
    required: true
  },
  doctor_history: {
    type: String,
    required: false
  }
}, { timestamps: true });

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
