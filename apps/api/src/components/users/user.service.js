const { User } = require('../../models')

/**
 * Tweet response structure.
 *
 * @typedef {object} user
 * @property {string} id - Unique id in UUIDV4 format
 * @property {string} email - User email
 * @property {string} name - User name
 * @property {string} token - JWT
 */

/**
 * Get user from database by email
 *
 * @async
 * @function getUser
 * @param {string} email - The user email.
 * @returns {user} - Returns a user object if found
 */
async function getUser(email) {
  const user = User.findOne({ where: { email } })

  return user
}
module.exports = { getUser }
