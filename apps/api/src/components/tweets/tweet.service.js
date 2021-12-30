const { pool } = require('../../utils/database')

async function getAllTweets() {
  const selectAllTweetsText = `SELECT tw.id, tw.tweet, name, tw.created_at
    FROM tweets tw
    JOIN users ON users.id = tw.owner_id
    ORDER BY created_at DESC`
  const data = await pool.query(selectAllTweetsText)
  const tweets = await data.rows

  return tweets
}

async function createNewTweet(id, tweet) {
  const insertNewTweetText = `
    INSERT INTO tweets
    VALUES
      (DEFAULT, $1, $2);
  `

  const data = await pool.query(insertNewTweetText, [id, tweet])

  return data
}

module.exports = { getAllTweets, createNewTweet }
