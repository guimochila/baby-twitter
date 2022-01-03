const request = require('supertest')
const { app } = require('../../../app')
const { User } = require('../../../models')

describe('User Routes', () => {
  it('Should login user with correct credentials', async () => {
    const email = 'james@example.com'
    const res = await request(app).post('/api/auth').send({
      email,
      password: 'testing',
    })

    expect(User.findOne).toHaveBeenCalledTimes(1)
    expect(User.findOne).toHaveBeenCalledWith({ where: { email } })
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('email', email)
    expect(res.body).toHaveProperty('name', 'James')
    expect(res.body).toHaveProperty('token')
    expect(res.body).toHaveProperty('id')
  })

  it('Should not login user with wrong credentials', async () => {
    const res = await request(app).post('/api/auth').send({
      email: 'notexist@example.com',
      password: 'testing',
    })

    expect(res.statusCode).toEqual(401)
  })
})
