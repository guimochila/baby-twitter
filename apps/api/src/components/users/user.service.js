const { pool } = require('../../utils/database')

async function getUser(email) {
  const selectUserByEmailText = `SELECT * FROM users WHERE email = $1`

  const user = await pool.query(selectUserByEmailText, [email])

  return user.rows
}
module.exports = { getUser }
