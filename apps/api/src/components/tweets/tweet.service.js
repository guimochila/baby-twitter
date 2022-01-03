const { Tweet, User } = require('../../models')

/**
 * Tweet response structure.
 *
 * @typedef {object} tweet
 * @property {string} id - Unique id in UUIDV4 format
 * @property {string} text  - Tweet text
 * @property {string} createdAt - When Tweet was created
 * @property {string} updatedAt - When Tweet was last time updated
 * @property {object} user - Object with tweet's owner information
 * @property {string} user.name - Name of the author of the tweet
 */

/**
 * Get user from database by email
 *
 * @async
 * @function getAllTweets
 * @returns {Array<tweet>} - Returns a list of tweets ordered by createdAt
 */
async function getAllTweets() {
  const tweets = await Tweet.findAll({
    attributes: {
      exclude: ['ownerId'],
    },
    include: {
      model: User,
      attributes: ['name'],
      as: 'user',
    },
    order: [['createdAt', 'DESC']],
  })

  return tweets
}

/**
 * Get user from database by email
 *
 * @async
 * @function createNewTweet
 * @param {string} id - The user id
 * @param {string} tweet - Tweet text
 * @returns {tweet} - Return the created tweet
 */
async function createNewTweet(id, tweet) {
  const { dataValues } = await Tweet.create({
    ownerId: id,
    text: tweet,
  })

  return dataValues
}

module.exports = { getAllTweets, createNewTweet }
