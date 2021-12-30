const { createServer } = require('http')
require('dotenv').config()
const { app } = require('./app')
const { normalizePort } = require('./utils/normalizePort')
const { pool } = require('./utils/database')

/* Setting PORT number*/
const PORT = normalizePort(process.env.PORT || 3001)
app.set('port', PORT)

const server = createServer(app)

async function startServer() {
  await pool.connect()

  server.listen(PORT, () => {
    console.log(`Server started listening at port: ${PORT}`)
  })
}

startServer()

/* Unhandled Rejection and Expection */
process.on('uncaughtException', (error) => {
  console.log(`
  Uncaught exception: ${error.name} ${error.message}, ${error.stack}, shutting down
  `)
  process.exit(1)
})

process.on('unhandledRejection', (error) => {
  console.log(
    `Unhandled Rejection: ${error.name} ${error.message}, shutting down...`,
  )
  server.close(() => {
    process.exit(1)
  })
})
