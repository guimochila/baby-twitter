const express = require('express')
const cors = require('cors')
const passport = require('passport')
const helmet = require('helmet')
const apiRoutes = require('./routes')
const { notFoundHandler, globalErrorHandler } = require('./utils/errorHandler')
const { httpLogger } = require('./utils/logger')

const app = express()

app.use(httpLogger)
app.use(helmet())
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  }),
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(passport.initialize())
// Initializate  Passport strategies
require('./providers/passport-local')
require('./providers/passport-jwt')

app.use('/api', apiRoutes)

/* Handling errors*/
app.use(notFoundHandler)
app.use(globalErrorHandler)

module.exports = { app }
