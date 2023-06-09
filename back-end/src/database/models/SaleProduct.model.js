/**
* @param {import('sequelize').DataTypes} DataTypes
* @param {import('sequelize').Sequelize } Sequelize
* @returns
*/

module.exports = (sequelize, DataTypes) => {
    const SaleProduct = sequelize.define(
  'SaleProduct', 
{ saleId: { allowNull: false, type: DataTypes.INTEGER },
        productId: { allowNull: false, type: DataTypes.INTEGER },
        quantity: { allowNull: false, type: DataTypes.INTEGER },
    },
{ timestamps: false, tableName: 'sales_products', underscored: true },
    );
    SaleProduct.associate = (models) => {
        models.Product.belongsToMany(models.Sale, {
            as: 'sales', through: SaleProduct, foreignKey: 'productId', otherKey: 'saleId' });
        models.Sale.belongsToMany(models.Product, {
            as: 'products', through: SaleProduct, foreignKey: 'saleId', otherKey: 'productId' });
    };
    return SaleProduct;
  };
