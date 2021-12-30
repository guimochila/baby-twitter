const express = require('express')
const passport = require('passport')
const { getAuthRoutes } = require('./auth')
const { getTweetsRoutes } = require('./tweets')

function getRoutes() {
  const router = express.Router()

  router.use('/auth', getAuthRoutes())
  router.use(
    '/tweets',
    passport.authenticate('jwt', { session: false }),
    getTweetsRoutes(),
  )

  return router
}

module.exports = { getRoutes }
