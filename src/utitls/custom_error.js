class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;  // Helps distinguish between operational and programming errors.
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = CustomError;
