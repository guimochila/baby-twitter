const { User } = require('../../models')

async function getUser(email) {
  // const selectUserByEmailText = `SELECT * FROM users WHERE email = $1`

  // const user = await pool.query(selectUserByEmailText, [email])

  try {
    const user = User.findOne({ where: { email } })

    return user
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}
module.exports = { getUser }
