module.exports = {
  async up(queryInterface, Sequelize) {
   await queryInterface.createTable('products', { 
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: Sequelize.INTEGER,
    },
    name: { allowNull: false, type: Sequelize.STRING },
    price: { allowNull: false, type: Sequelize.DECIMAL(4, 2) },
    urlImage: { allowNull: false, field: 'url_image', type: Sequelize.STRING },
       });
  },

  async down(queryInterface) {
   await queryInterface.dropTable('products');
  },
};
