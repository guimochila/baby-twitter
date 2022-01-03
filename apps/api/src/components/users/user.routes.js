const express = require('express')
const passport = require('passport')
const { catchErrors } = require('../../utils/errorHandler')
const { login } = require('./user.controllers')

const router = express.Router()

router.post(
  '/',
  passport.authenticate('local', { session: false }),
  catchErrors(login),
)

module.exports = router
