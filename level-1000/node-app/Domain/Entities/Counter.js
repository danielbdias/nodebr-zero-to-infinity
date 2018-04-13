const { Entity, validatorAdapter } = require('speck-entity')
const Joi = require('joi')
const adapter = validatorAdapter('joi', Joi)

class Counter extends Entity { }

Counter.SCHEMA = {
  counterId: adapter(Joi.string().guid()),
  name: adapter(Joi.string()),
  value: adapter(Joi.number())
}

module.exports = Counter
