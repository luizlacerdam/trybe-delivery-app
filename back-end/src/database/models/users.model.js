/**
* @param {import('sequelize').DataTypes} DataTypes
* @param {import('sequelize').Sequelize } Sequelize
* @returns
*/

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
'user', 
{
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { allowNull: false, type: DataTypes.STRING },
      email: { allowNull: false, type: DataTypes.STRING },
      password: { allowNull: false, type: DataTypes.STRING },
      role: { allowNull: false, type: DataTypes.STRING },
  },
{ timestamps: false, tableName: 'users', underscored: true },
  );
  
  return User;
};
