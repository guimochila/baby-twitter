/**
 * Normalize a port into a number, string, or false.
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
