const express = require('express')
/**
 * CatchErros for API routes - It is wrapper to catch errors
 *
 * @param {Function} fn - Express route function
 * @returns {Function} - Express route function handling error to next function
 */
function catchErrors(fn) {
  return function (req, res, next) {
    return fn(req, res, next).catch(next)
  }
}

/**
 *  Not Found Error Handler
  If we hit a route that is not found, we mark it as 404 and pass it along to the next error handler to display
 *
 *
 * @param {express.Request} req - Request object
 * @param {express.Response} res - Response object
 * @param {express.NextFunction} next - Next function
 */
function notFoundHandler(req, res, next) {
  const error = new Error(`Not found - ${req.originalUrl}`)
  error.status = 404
  next(error)
}

/**
 *    Development Error Hanlder
 * In development we show good error messages or any other previously un-handled error, we can show good info on what happened
 *
 * @param {express.ErrorRequestHandler} err - Error Request handler
 * @param {express.Response} res - Response object
 */
function handleDevErrors(err, res) {
  const status = err.status || res.statusCode

  res.status(status).json({
    status: err.status,
    message: err.message,
    error: err,
    stack: err.stack || '',
  })
}

/**
 *  Production Error Hanlder - No stacktraces are leaked to user
 *
 * @param {express.ErrorRequestHandler} err - Error Request handler
 * @param {express.Response} res - Response object
 */
function handleProdErrors(err, res) {
  const status = 500
  const message = err.message || 'Ooops! Something went wrong!'

  res.status(status).json({ status, message })
}

/**
 * Express middleware to handle uncaught errors.
 *
 * @param {express.ErrorRequestHandler} err - Error Request handler
 * @param {express.Request} req - Request object
 * @param {express.Response} res - Response object
 * @param {express.NextFunction} next - Next Function
 */
function globalErrorHandler(err, req, res, next) {
  if (process.env.NODE_ENV === 'production') {
    handleProdErrors(err, res)
  } else {
    handleDevErrors(err, res)
  }
}

module.exports = {
  notFoundHandler,
  globalErrorHandler,
  catchErrors,
}
