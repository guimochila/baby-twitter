module.exports = (sequelize, DataTypes) => {
  const Tweet = sequelize.define('Tweet', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Tweet must not be empty' },
      },
    },
  })

  Tweet.associate = (models) => {
    Tweet.belongsTo(models.User, {
      foreignKey: 'ownerId',
      as: 'user',
    })
  }

  return Tweet
}
