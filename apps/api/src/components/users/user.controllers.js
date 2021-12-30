async function login(req, res) {
  res.json(req.user)
}

module.exports = { login }
