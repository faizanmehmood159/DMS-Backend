const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const User = require('../../models/User');
const ApiError = require('../../utills/apiError');

const signIn = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMsg = 'Validation failed: Missing or invalid fields';
    console.error(errorMsg, errors.array());
    return next(new ApiError(400, errorMsg, true, errors.array()));
  }

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      const errorMsg = 'Invalid credentials';
      console.error(errorMsg, { email });
      return next(new ApiError(401, errorMsg, true, { email }));
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      const errorMsg = 'Invalid credentials';
      console.error(errorMsg, { email });
      return next(new ApiError(401, errorMsg, true, { email }));
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' } 
    );

    res.status(200).json({ token, message: 'Login successful' });
  } catch (error) {
    console.error('SignIn error:', error);
    next(new ApiError(500, 'Server error', true, error.message));
  }
};

module.exports = { signIn };
