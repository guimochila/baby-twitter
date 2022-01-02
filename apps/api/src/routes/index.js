const express = require('express')
const passport = require('passport')
const userRoutes = require('../components/users/user.routes')
const tweetRoutes = require('../components/tweets/tweet.routes')

const router = express.Router()

router.use('/auth', userRoutes)
router.use(
  '/tweets',
  passport.authenticate('jwt', { session: false }),
  tweetRoutes,
)

module.exports = router
