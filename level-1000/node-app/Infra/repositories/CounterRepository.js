const { Repository, AutoMapper } = require('speck-sequelize-repository')

const Counter = require('Domain/Entities/Counter')

const dependencies = {
  Counter: require('./models').Counter,
  CounterMap: new AutoMapper(Counter).createMapFromEntity(Counter)
}

module.exports = Repository.for(dependencies.Counter, dependencies.CounterMap, {})
