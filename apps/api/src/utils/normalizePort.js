/**
 * Normalize a port into a number, string, or false.
 *
 * @param {string | number} value - Port value to be normalized
 * @returns {number | false} - Returns the port in type of number if value is valid or false.
 */
function normalizePort(value) {
  var port = parseInt(value, 10)

  if (isNaN(port)) {
    return value
  }

  if (port >= 0) {
    return port
  }

  return false
}

module.exports = { normalizePort }
