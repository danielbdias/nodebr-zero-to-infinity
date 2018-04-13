const dependencies = {
  IncreaseCounter: require('Domain/UseCases/IncreaseCounter')
}

module.exports = (req, res, injection) => {
  const { IncreaseCounter } = Object.assign({}, dependencies, injection)

  const name = req.query.name

  return IncreaseCounter(name, injection)
}
