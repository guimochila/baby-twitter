const express = require('express')
const cors = require('cors')
const passport = require('passport')
const helmet = require('helmet')
const { getRoutes } = require('./routes')
const { notFoundHandler, globalErrorHandler } = require('./utils/errorHandler')

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(passport.initialize())
// Initializate  Passport strategies
require('./providers/passport-local')
require('./providers/passport-jwt')

app.use('/api', getRoutes())

/* Handling errors*/
app.use(notFoundHandler)
app.use(globalErrorHandler)

module.exports = { app }
