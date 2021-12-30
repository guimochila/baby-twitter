const express = require('express')
const passport = require('passport')
const { login } = require('../components/users/auth.controllers')

function getAuthRoutes() {
  const router = express.Router()

  router.post('/', passport.authenticate('local', { session: false }), login)

  return router
}

module.exports = { getAuthRoutes }
