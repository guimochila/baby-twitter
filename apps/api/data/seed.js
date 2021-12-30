require('dotenv').config()
const bcrypt = require('bcryptjs')
const { Pool } = require('pg')

const pool = new Pool({
  user: process.env.APP_DB_USER,
  database: process.env.APP_DB_NAME,
  password: process.env.APP_DB_PASSWORD,
  port: process.env.POSTGRES_PORT,
  host: 'localhost',
})

async function deleteData() {
  console.log('😢 Goodbye data...')
  try {
    await pool.query('DELETE FROM tweets;')
    await pool.query('DELETE FROM  users;')
  } catch (error) {
    console.error(`Error on deleting data: ${error}`)
  }
}

async function loadData() {
  // Default password for sample users
  const password = await bcrypt.hash('testing', 10)
  const insertUsers = `
    INSERT INTO users
    VALUES
      (DEFAULT, 'john', 'john@example.com', '${password}'),
      (DEFAULT, 'james', 'james@example.com', '${password}'),
      (DEFAULT, 'seth', 'seth@example.com', '${password}');
  `

  const insertTweets = `
    INSERT INTO tweets
    VALUES
      (DEFAULT, '1', 'Breach Lock is amazing'),
      (DEFAULT, '1', 'Great product! Keep on!'),
      (DEFAULT, '2', 'Well done guys!'),
      (DEFAULT, '3', 'Anybody here?'),
      (DEFAULT, '2', 'New Years is coming.');
  `

  try {
    await pool.query(insertUsers)
    await pool.query(insertTweets)
    console.log('👍 - Data inserted!')
    process.exit()
  } catch (error) {
    console.log('\n 👎 - Error inserting the data')
    console.log(error)
    process.exit(1)
  }
}

if (process.argv.includes('--delete')) {
  deleteData()
} else {
  loadData()
}
