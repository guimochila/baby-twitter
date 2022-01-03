const express = require('express')
const { catchErrors } = require('../../utils/errorHandler')
const { httpCreateNewTweet, httpGetAllTweets } = require('./tweets.controllers')

const router = express.Router()

router.get('/', catchErrors(httpGetAllTweets))
router.post('/', catchErrors(httpCreateNewTweet))

module.exports = router
