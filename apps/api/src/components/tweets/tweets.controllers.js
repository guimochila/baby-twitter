const express = require('express')
const { getAllTweets, createNewTweet } = require('./tweet.service')

/**
 * @typedef {import('./tweet.service').tweet} tweet
 */

/**
 * Object with tweets.
 *
 * @typedef {object} Tweets
 * @property {Array<tweet>} tweets - An array of Tweets
 */

/**
 * Return a list of all tweets.
 *
 * @async
 * @function
 * @param {express.Request} req - The request.
 * @param {express.Response} res -  The response.
 * @returns {Tweets} - Returns an array of tweets
 */
async function httpGetAllTweets(req, res) {
  const tweets = await getAllTweets()

  res.send({ tweets })
}

/**
 * Return a list of all tweets.
 *
 * @typedef {object} requestBody
 * @property {string} ownerId this is name in query
 * @property {string} tweet this is age in query
 * @function
 * @param {express.Request<{}, {},requestBody>} req - The request.
 * @param {express.Response} res - The response.
 * @returns {tweet} - Returns the tweet object
 */
async function httpCreateNewTweet(req, res) {
  const { ownerId, tweet } = req.body

  const createdTweet = await createNewTweet(ownerId, tweet)

  return res.status(201).json({ ...createdTweet })
}

module.exports = { httpGetAllTweets, httpCreateNewTweet }
