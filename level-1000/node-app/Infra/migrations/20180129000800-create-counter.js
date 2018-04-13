module.exports = {
  up: (queryInterface, Sequelize) => {
    const columns = {
      counterId: {
        type: Sequelize.UUID,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
      value: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        type: Sequelize.DATE(6)
      },
      updatedAt: {
        type: Sequelize.DATE(6)
      }
    }

    return queryInterface.createTable('Counters', columns, require('./config/defaultTableConfig'))
  },
  down: (queryInterface) => queryInterface.dropTable('Counters')
}
