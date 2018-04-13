const bodyParser = require('body-parser')

function registerMiddlewares(app) {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
}

module.exports = { registerMiddlewares }
