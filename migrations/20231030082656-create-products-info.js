'use strict';
/* eslint-disable */

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products_info', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      namespaceId: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      capacityAvailable: {
        type: Sequelize.STRING
      },
      capacity: {
        type: Sequelize.STRING
      },
      priceRegular: {
        type: Sequelize.FLOAT
      },
      priceDiscount: {
        type: Sequelize.FLOAT
      },
      colorsAvailable: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      images: {
        type: Sequelize.TEXT
      },
      description: {
        type: Sequelize.TEXT
      },
      screen: {
        type: Sequelize.STRING
      },
      resolution: {
        type: Sequelize.STRING
      },
      processor: {
        type: Sequelize.STRING
      },
      ram: {
        type: Sequelize.STRING
      },
      camera: {
        type: Sequelize.STRING
      },
      zoom: {
        type: Sequelize.STRING
      },
      cell: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('products_info');
  }
};