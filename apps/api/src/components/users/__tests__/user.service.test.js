const { getUser } = require('../user.service')
const { User } = require('../../../models')

describe('User Service', () => {
  it('Should return user', async () => {
    const user = await getUser('james@example.com')

    expect(User.findOne).toHaveBeenCalledTimes(1)
    expect(User.findOne).toHaveBeenCalledWith({
      where: { email: 'james@example.com' },
    })
    expect(user).toHaveProperty('id')
    expect(user).toHaveProperty('name', 'James')
    expect(user).toHaveProperty('email', 'james@example.com')
  })

  it('Should return null if user does not exist', async () => {
    const user = await getUser('notexist@example.com')

    expect(user).toBe(null)
  })
})
