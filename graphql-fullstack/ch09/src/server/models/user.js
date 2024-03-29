module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    avatar: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {});
  User.associate = (models) => {
    User.hasMany(models.Post);
    User.belongsToMany(models.Chat, { through: 'users_chats' });
  };
  return User;
};
