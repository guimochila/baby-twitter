'use strict'
const bcrypt = require('bcryptjs')

module.exports = {
  up: async (queryInterface) => {
    const password = await bcrypt.hash('testing', 10)

    return queryInterface.bulkInsert('Users', [
      {
        id: '718396c2-3615-4303-bd15-e10bbe4afce7',
        name: 'John',
        email: 'john@example.com',
        password,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '51216c93-da9e-4ba1-b263-28532c74865e',
        name: 'James',
        email: 'james@example.com',
        password,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'f8805227-747d-4e05-8c7a-ad3be3895817',
        name: 'Seth',
        email: 'seth@example.com',
        password,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Users', null, {})
  },
}
