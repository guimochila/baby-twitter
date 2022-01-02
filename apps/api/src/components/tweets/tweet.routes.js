const express = require('express')
const { catchErrors } = require('../../utils/errorHandler')
const { httpCreateNewTweet, httpGetAllTweets } = require('./tweets.controllers')

const router = express.Router()

/**
 * @swagger
 * /api/tweets:
 *   get:
 *     summary: Retrieve a list of Tweets.
 *     description: Retrieve a list of all Tweets.
 *     responses:
 *       200:
 *         description: A list of tweets.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 tweets:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The tweet ID.
 *                         example: 1
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: John
 *                       tweet:
 *                         type: string
 *                         description: The tweet description
 *                         example: This is a tweet
 *                       created_at:
 *                         type: Date
 *                         description: The date when the tweet was created
 *                         example: "2021-12-30T11:12:29.106Z"
 */
router.get('/', catchErrors(httpGetAllTweets))

/**
 * @swagger
 * /api/tweets:
 *   post:
 *     summary: Create a new Tweet.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ownerId:
 *                 type: integer
 *                 description: The user id.
 *                 example: 1
 *               tweet:
 *                 type: string
 *                 description: The tweet a text
 *                 example: This is a tweet
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  status:
 *                    type: string
 *                    description: "ok" if the tweet was created
 *                    example: "ok"
 *
 */
router.post('/', catchErrors(httpCreateNewTweet))

module.exports = router
