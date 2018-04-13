const CommandRouterBuilder = require('../../commandRouterBuilder')

const getRouter = () => {
  const router = new CommandRouterBuilder()

  router.get('/', require('./increaseCounter.command'))

  return router.build()
}

module.exports = getRouter
