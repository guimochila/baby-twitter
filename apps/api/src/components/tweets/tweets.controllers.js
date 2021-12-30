const { getAllTweets, createNewTweet } = require('./tweet.service')

async function httpGetAllTweets(req, res) {
  const tweets = await getAllTweets()

  res.send({ tweets })
}

async function httpCreateNewTweet(req, res) {
  const { ownerId, tweet } = req.body

  const data = await createNewTweet(ownerId, tweet)

  if (data.rowCount === 1) {
    return res.status(201).json({ status: 'ok' })
  }
}

module.exports = { httpGetAllTweets, httpCreateNewTweet }
