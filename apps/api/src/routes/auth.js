const express = require('express')
const passport = require('passport')
const { login } = require('../components/users/user.controllers')

function getAuthRoutes() {
  const router = express.Router()

  /**
   * @swagger
   * /api/auth:
   *   post:
   *     summary:  Authenticate user.
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               email:
   *                 type: string
   *                 description: The user's email address.
   *                 example: john@example.com
   *              password:
   *                 type: string
   *                 description:  The user's password
   *     responses:
   *       200:
   *        description: Authenticated
   *       401:
   *        description: Not Authenticated
   *         ...
   */
  router.post('/', passport.authenticate('local', { session: false }), login)

  return router
}

module.exports = { getAuthRoutes }
