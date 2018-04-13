const express = require('express')

const { registerMiddlewares } = require('./infra/middleware')
const { registerRoutes } = require('./infra/routes')

const app = express()

registerMiddlewares(app)

registerRoutes(app)

const server = app.listen(3000, function () {
  console.log(`App running on port ${server.address().port}.`)
})
