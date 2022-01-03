const request = require('supertest')
const { app } = require('../../../app')
const { Tweet } = require('../../../models')

describe('Tweet Routes', () => {
  let token
  let userId

  beforeAll(async () => {
    // Login process
    const resLogin = await request(app)
      .post('/api/auth')
      .send({ email: 'james@example.com', password: 'testing' })
    token = resLogin.body.token
    userId = resLogin.body.id
  })

  it('Should return 401 if user is not authenticated', async () => {
    const res = await request(app).get('/api/tweets')

    expect(res.statusCode).toEqual(401)
  })

  it('Should return a list of tweets with user authenticated', async () => {
    const res = await request(app)
      .get('/api/tweets')
      .set('Authorization', `Bearer ${token}`)

    expect(res.statusCode).toEqual(200)
    expect(res.body.tweets.length).toEqual(4)
  })

  it('Should create new tweet', async () => {
    const tweetBody = { ownerId: userId, tweet: 'Testing new Tweet' }

    const res = await request(app)
      .post('/api/tweets')
      .send(tweetBody)
      .set('Authorization', `Bearer ${token}`)

    expect(Tweet.create).toHaveBeenCalledTimes(1)
    expect(Tweet.create).toHaveBeenCalledWith({
      ownerId: tweetBody.ownerId,
      text: tweetBody.tweet,
    })

    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('text', tweetBody.tweet)
    expect(res.body).toHaveProperty('ownerId', tweetBody.ownerId)
  })
})
