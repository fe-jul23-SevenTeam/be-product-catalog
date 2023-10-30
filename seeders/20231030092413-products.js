'use strict';

/* eslint-disable */ 
const fs = require('fs/promises');
const path = require('path');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const filePath = path.resolve('src/DBconnection/setup', 'products.json');
    const promiseData = await fs.readFile(filePath);
    const data = JSON.parse(promiseData.toString());

    const preparedData = data.map(product => {
      const productCopy = {...product};

      productCopy.createdAt = new Date();
      productCopy.updatedAt = new Date();

      delete productCopy.id;

      return productCopy;
    });

    return queryInterface.bulkInsert('products', preparedData);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};
