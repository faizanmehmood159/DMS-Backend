const BaseError = require('./baseError'); // Ensure this path is correct

class ApiError extends BaseError {
  constructor(statusCode, description, isOperational = true, errorDetails = null) {
    super('API Error', statusCode, isOperational, description);
    this.errorDetails = errorDetails;
  }
}

module.exports = ApiError;
