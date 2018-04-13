const dependencies = {
  CounterRepository: require('Infra/repositories/CounterRepository')
}

const Counter = require('Domain/Entities/Counter')

module.exports = async function IncreaseCounter (counterName, injection) {
  const { CounterRepository } = Object.assign({}, dependencies, injection)

  const counter = await CounterRepository.findOneByCriterias({ name: counterName }, injection)

  const counterToSave = counter || new Counter({ name: counterName, value: 0 })

  counterToSave.value = counterToSave.value + 1

  return CounterRepository.save(counterToSave)
}
