'use strict';

/* eslint-disable */ 
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      category: {
        type: Sequelize.STRING
      },
      itemId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'products_info',
          key: 'id',
        }
      },
      name: {
        type: Sequelize.STRING
      },
      fullPrice: {
        type: Sequelize.FLOAT
      },
      price: {
        type: Sequelize.FLOAT
      },
      screen: {
        type: Sequelize.STRING
      },
      capacity: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.INTEGER
      },
      ram: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};