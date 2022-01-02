const morgan = require('morgan')
const { createLogger, format, transports } = require('winston')
const { timestamp, combine, printf, errors, json } = format

const isProd = process.env.NODE_ENV === 'production'
const logLevel = process.env.LOG_LEVEL || 'info'

const levels = {
  http: 10,
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  fatal: 60,
}

function buildDevLogs() {
  const logFormat = printf(({ level, message, timestamp, stack }) => {
    return `${timestamp} ${level}: ${stack || message}`
  })

  return createLogger({
    format: combine(
      format.colorize({ all: true }),
      timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      errors({ stack: true }),
      logFormat,
    ),
    levels,
    transports: [new transports.Console()],
    level: logLevel,
  })
}

function buildProdLogs() {
  return createLogger({
    format: combine(timestamp(), errors({ stack: true }), json()),
    levels,
    transports: [new transports.Console()],
  })
}

let logger

if (isProd) {
  logger = buildProdLogs()
} else {
  logger = buildDevLogs()
}

const stream = {
  // Use the http severity
  write: (message) => logger.http(message),
}

const httpLogger = morgan(
  ':method :url :status :res[content-length] - :response-time ms',
  { stream },
)

module.exports = { logger, httpLogger }
