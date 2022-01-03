const { v4: UUIDV4 } = require('uuid')
const { User, Tweet } = require('./src/models')

global.beforeAll(() => {
  const mUser = {
    id: '51216c93-da9e-4ba1-b263-28532c74865e',
    name: 'James',
    password: '$2a$10$RVjIf9GDPOSX.VgbswDGf.U1aPcTzOLi4XKRoNzgOqn1evu/lpcka',
    email: 'james@example.com',
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  const mFindOne = jest.fn((query) => {
    const {
      where: { email },
    } = query

    if (mUser.email === email) {
      return mUser
    } else {
      return null
    }
  })

  const mFindAll = jest.fn(() => {
    return [
      {
        id: UUIDV4(),
        text: 'Amazing tweet',
        ownerId: '718396c2-3615-4303-bd15-e10bbe4afce7',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        text: 'News from BreachLock',
        user: { name: 'James ' },
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        text: 'New Years is here',
        user: { name: 'James ' },
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        text: 'Moving countries is nice?',
        user: { name: 'James ' },
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]
  })

  const mCreate = jest.fn(({ ownerId, text }) => {
    return {
      dataValues: {
        id: UUIDV4(),
        ownerId,
        text,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
    }
  })

  jest.spyOn(User, 'findOne').mockImplementation(mFindOne)
  jest.spyOn(Tweet, 'findAll').mockImplementation(mFindAll)
  jest.spyOn(Tweet, 'create').mockImplementation(mCreate)
})
