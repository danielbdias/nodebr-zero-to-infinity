const saveTheWorld = require('../business/saveTheWorld')

function saveTheWorldRoute(req, res) {
  const { weapon } = req.query

  const { success, message } = saveTheWorld(weapon)

  const httpCode = success ? 200 : 503

  res.status(httpCode).send(message)
}

function registerRoutes(app) {
  app.get('/', saveTheWorldRoute)
}

module.exports = { registerRoutes }
