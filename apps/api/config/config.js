require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

const options = {
  username: process.env.APP_DB_USER,
  password: process.env.APP_DB_PASSWORD,
  database: process.env.APP_DB_NAME,
  host: process.env.POSTGRES_HOST,
  dialect: 'postgres',
}

module.exports = {
  development: {
    ...options,
  },
  test: {
    ...options,
    host: 'localhost',
    logging: false,
  },
  production: {
    ...options,
    logging: false,
  },
}
