const { body } = require('express-validator');

const addDoctorValidation = [
  body('first_name').notEmpty().withMessage('First name is required'),
  body('last_name').notEmpty().withMessage('Last name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').isLength({ min: 10, max: 10 }).withMessage('Phone number must be 10 digits'),
  body('address').notEmpty().withMessage('Address is required'),
  body('doctor_weight').isFloat({ gt: 0 }).withMessage('Doctor weight must be a positive number'),
  body('marital_status').isIn(['Single', 'Married', 'Divorced', 'Widowed']).withMessage('Marital status is required'),
  body('sex').isIn(['Male', 'Female', 'Other']).withMessage('Sex is required'),
  body('blood_group').isIn(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']).withMessage('Blood group is required'),
  body('DOB').isDate().withMessage('Date of Birth is required and should be a valid date'),
  body('doctor_height').isFloat({ gt: 0 }).withMessage('Doctor height must be a positive number'),
];

module.exports = addDoctorValidation;
