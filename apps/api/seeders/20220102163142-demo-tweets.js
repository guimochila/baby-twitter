'use strict'
const { v4: UUIDV4 } = require('uuid')

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert('Tweets', [
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
        ownerId: 'f8805227-747d-4e05-8c7a-ad3be3895817',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        text: 'New Years is here',
        ownerId: '51216c93-da9e-4ba1-b263-28532c74865e',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        text: 'Moving countries is nice?',
        ownerId: '51216c93-da9e-4ba1-b263-28532c74865e',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Tweets', null, {})
  },
}
