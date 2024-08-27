const { body } = require('express-validator');

const addDoctorValidation = [
  body('first_name')
    .notEmpty()
    .withMessage('First name is required'),
  body('last_name')
    .notEmpty()
    .withMessage('Last name is required'),
  body('email')
    .isEmail()
    .withMessage('Valid email is required')
    .matches(/\S+@\S+\.\S+/)
    .withMessage('Please enter a valid email address'),
  body('phone')
    .matches(/^\d{10}$/)
    .withMessage('Phone number must be 10 digits and valid'),
  body('city')
    .notEmpty()
    .withMessage('City is required'),
  body('sex')
    .isIn(['Male', 'Female', 'Other'])
    .withMessage('Sex must be Male, Female, or Other'),
  body('languages')
    .isIn(['English', 'French', 'Arabic', 'German'])
    .withMessage('Languages must be one of English, French, Arabic, or German'),
  body('DOB')
    .notEmpty()
    .withMessage('Date of Birth is required'),
  body('nationality')
    .isIn(['Maroc', 'Tunisie', 'Algerier', 'Egypt'])
    .withMessage('Nationality must be one of Maroc, Tunisie, Algerier, or Egypt'),
  body('zip')
    .notEmpty()
    .withMessage('ZIP code is required'),
  body('user_role')
    .notEmpty()
    .withMessage('User role is required'),
  body('address')
    .notEmpty()
    .withMessage('Address is required'),
  body('bio')
    .optional()
    .isString()
    .withMessage('Bio must be a string if provided'),
];

module.exports = addDoctorValidation;
