'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Livros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      autor: {
        type: Sequelize.STRING,
        allowNull: false
      },
      editora: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ano: {
        type: Sequelize.STRING,
        allowNull: false
      },
      genero: {
        type: Sequelize.STRING,
        allowNull: false
      },
      foto: {
        type: Sequelize.STRING,
        
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Livros');
  }
};