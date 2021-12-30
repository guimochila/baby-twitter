const passport = require('passport')
const LocalStrategy = require('passport-local')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { getUser } = require('../components/users/user.service')

async function verifyUser(email, password, done) {
  const [user] = await getUser(email)

  if (!user) {
    return done(null, false, { error: 'Invalid email or password.' })
  }

  const isValidPassword = await bcrypt.compare(password, user.password)

  if (!isValidPassword) {
    return done(null, false, { error: 'Invalid email or password.' })
  }

  const token = jwt.sign(
    { user: user.email, id: user.id, name: user.name },
    process.env.JWT_TOKEN_SECRET,
    { expiresIn: '1d' },
  )

  return done(null, { email: user.email, id: user.id, name: user.name, token })
}

passport.use(
  'local',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    verifyUser,
  ),
)
