// utils/errorHandler.js
const ApiError = require('./apiError');

const errorHandler = (err, req, res, next) => {
  // Log the error stack trace for debugging
  console.error(`Error Stack: ${err.stack}`);

  // If the error is an instance of ApiError, use its properties
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      status: 'error',
      statusCode: err.statusCode,
      message: err.message,
      details: err.errorDetails || null, 
    });
  }

  
  return res.status(500).json({
    status: 'error',
    statusCode: 500,
    message: 'Internal Server Error',
    details: err.message || 'An unexpected error occurred', 
  });
};

module.exports = { errorHandler };
