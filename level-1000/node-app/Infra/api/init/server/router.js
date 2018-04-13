const { Router } = require('express')

const increaseCounterRouter = require('../../endpoints/increaseCounter/increaseCounter.router')

const getRouter = () => {
  const router = new Router()

  router.use('/increaseCounter', increaseCounterRouter())

  return router
}

module.exports = getRouter
