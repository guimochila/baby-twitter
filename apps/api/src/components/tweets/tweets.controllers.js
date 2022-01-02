const { getAllTweets, createNewTweet } = require('./tweet.service')

async function httpGetAllTweets(req, res) {
  const tweets = await getAllTweets()

  res.send({ tweets })
}

async function httpCreateNewTweet(req, res) {
  const { ownerId, tweet } = req.body

  const createdTweet = await createNewTweet(ownerId, tweet)

  return res.status(201).json({ ...createdTweet })
}

module.exports = { httpGetAllTweets, httpCreateNewTweet }
