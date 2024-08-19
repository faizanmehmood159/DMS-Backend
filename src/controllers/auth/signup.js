// controllers/auth/signup.js
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const User = require('../../models/User'); 
const ApiError = require('../../utills/apiError');

const signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMsg = 'Validation failed: Missing or invalid fields';
    console.error(errorMsg, errors.array());
    return next(new ApiError(400, errorMsg, true, errors.array()));
  }

  const { firstName, lastName, email, password } = req.body;

  try {
    let user = await User.findOne({ email }); 
    if (user) {
      const errorMsg = 'User already exists';
      console.error(errorMsg, { email });
      return next(new ApiError(400, errorMsg, true, { email }));
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Signup error:', error);
    next(new ApiError(500, 'Server error', true, error.message));
  }
};

module.exports = { signup };
