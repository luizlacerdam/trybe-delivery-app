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
        email: { allowNull: false, type: Sequelize.STRING },
        password: { allowNull: false, type: Sequelize.STRING },
        role: { allowNull: false, type: Sequelize.STRING },
       });
  },

  async down(queryInterface) {
   await queryInterface.dropTable('products');
  },
};
