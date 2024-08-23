// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');
const ApiError = require('../utills/apiError');

const authMiddleware = (req, res, next) => {
  const authHeader = req.header('Authorization');

  if (!authHeader) {
    const errorMsg = 'No token, authorization denied';
    console.error(errorMsg);
    return next(new ApiError(401, errorMsg, true));
  }

  const token = authHeader.split(' ')[1]; // Extract the token from the "Bearer <token>" string

  if (!token) {
    const errorMsg = 'Token format is incorrect';
    console.error(errorMsg);
    return next(new ApiError(401, errorMsg, true));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token
    req.user = decoded; // Attach the decoded token data to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    console.error('Token verification failed:', err.message);
    return next(new ApiError(401, 'Token is not valid', true));
  }
};

module.exports = authMiddleware;
