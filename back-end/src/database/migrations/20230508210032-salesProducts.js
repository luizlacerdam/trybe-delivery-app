module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales_products', { 
      saleId: { allowNull: false, type: Sequelize.INTEGER, field: 'sale_id' },
      productId: { allowNull: false, type: Sequelize.INTEGER, field: 'product_id' },
      quantity: { allowNull: false, type: Sequelize.INTEGER },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('sales_products');
  },
};
