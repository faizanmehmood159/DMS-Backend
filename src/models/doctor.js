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
  city: {
    type: String,
    required: true
  },
  sex: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true
  },
  languages: {
    type: String,
    enum: ['English', 'French', 'Arabic', 'German'],
    required: true
  },
  DOB: {
    type: String,
    required: true
  },
  nationality: {
    type: String,
    enum: ['Maroc', 'Tunisie', 'Algerier', 'Egypt'],
    required: true
  },
  zip: {
    type: String,
    required: true
  },
  user_role: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: false
  }
}, { timestamps: true });

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
