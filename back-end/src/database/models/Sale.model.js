/**
* @param {import('sequelize').DataTypes} DataTypes
* @param {import('sequelize').Sequelize } Sequelize
* @returns
*/

module.exports = (sequelize, DataTypes) => {
    const Sale = sequelize.define(
  'Sale', 
    { id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        userId: { allowNull: false, type: DataTypes.INTEGER },
        sellerId: { allowNull: false, type: DataTypes.INTEGER },
        totalPrice: { allowNull: false, type: DataTypes.DECIMAL(9, 2) },
        deliveryAdress: { allowNull: false, type: DataTypes.STRING },
        deliveryNumber: { allowNull: false, type: DataTypes.STRING },
        saleDate: { allowNull: false, type: DataTypes.STRING },
        status: { allowNull: false, type: DataTypes.STRING },
    },
  { timestamps: false, tableName: 'sales', underscored: true },
    );
    Sale.associate = (models) => {
        Sale.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
        Sale.belongsTo(models.User, { foreignKey: 'sellerId', as: 'seller' });
    };
    return Sale;
  };
