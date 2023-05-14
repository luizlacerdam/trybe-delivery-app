/**
* @param {import('sequelize').QueryInterface} queryInterface
* @param {import('sequelize').Sequelize } Sequelize
*/
module.exports = {
  async up(queryInterface, Sequelize) {
      await queryInterface.createTable('users', { 
        id: {
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
          type: Sequelize.INTEGER,
        },
        name: { allowNull: false, type: Sequelize.STRING },
        email: { allowNull: false, type: Sequelize.STRING },
        password: { allowNull: false, type: Sequelize.STRING },
        role: { allowNull: true, type: Sequelize.STRING },
        
        });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('users');
  },
};
