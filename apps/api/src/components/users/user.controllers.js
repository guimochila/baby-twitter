const express = require('express')

/**
 * @typedef {import('./user.service').user} user
 */

/**
 * Return a list of all tweets.
 *
 * @async
 * @function
 * @param {express.Request} req - Request Object.
 * @param {express.Response} res - Response Object.
 * @returns {user} - Returns user
 */
async function login(req, res) {
  res.json(req.user)
}

module.exports = { login }
