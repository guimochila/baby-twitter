const { Tweet, User } = require('../../models')

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

async function createNewTweet(id, tweet) {
  const { dataValues } = await Tweet.create({
    ownerId: id,
    text: tweet,
  })

  return dataValues
}

module.exports = { getAllTweets, createNewTweet }
