/**
* @param {import('sequelize').DataTypes} DataTypes
* @param {import('sequelize').Sequelize } Sequelize
* @returns
*/

module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define(
  'Product', 
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: { allowNull: false, type: DataTypes.STRING },
        price: { allowNull: false, type: DataTypes.DECIMAL(4, 2) },
        urlImage: { allowNull: false, type: DataTypes.STRING },
    },
  { timestamps: false, tableName: 'products', underscored: true },
    );
  //   Product.associate = (models) => {
  //     Product.belongsToMany(models.Sale, { foreignKey: 'productId', as: 'products' });
  // };
    return Product;
  };
