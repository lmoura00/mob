'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Corridas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      partida: {
        type: Sequelize.STRING
      },
      destino: {
        type: Sequelize.STRING
      },
      motId: {
        type: Sequelize.INTEGER,
        references:{
          model:'mots',
          key:'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
      },
      paxId: {
        type: Sequelize.INTEGER,
        references:{
          model:'paxes',
          key:'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Corridas');
  }
};