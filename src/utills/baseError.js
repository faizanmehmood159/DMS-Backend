class BaseError extends Error {
  constructor(name, statusCode, isOperational, description) {
    super(description);

    Object.setPrototypeOf(this, new.target.prototype); // Restore prototype chain
    this.name = name;
    this.statusCode = statusCode;
    this.isOperational = isOperational;

    Error.captureStackTrace(this);
  }
}

module.exports = BaseError;
