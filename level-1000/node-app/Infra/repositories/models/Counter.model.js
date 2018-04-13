module.exports = (sequelize, DataTypes) => {
  const Counter = sequelize.define('Counter', {
    counterId: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV1, allowNull: false },
    name: DataTypes.STRING,
    value: DataTypes.INTEGER
  }, {
    timestamps: true
  })

  return Counter
}
