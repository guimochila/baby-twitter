const { Pool } = require('pg')
const config = require('config')

const DB_USER = process.env.APP_DB_USER
const DB_PASSWORD = process.env.APP_DB_PASSWORD
const DB_NAME = config.get('dbConfig.dbName')
const DB_PORT = config.get('dbConfig.port')
const DB_HOST = config.get('dbConfig.host')

const pool = new Pool({
  user: DB_USER,
  database: DB_NAME,
  password: DB_PASSWORD,
  port: DB_PORT,
  host: DB_HOST,
})

module.exports = { pool }
