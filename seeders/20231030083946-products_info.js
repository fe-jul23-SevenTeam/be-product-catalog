'use strict';

/* eslint-disable */
const fs = require('fs/promises');
const path = require('path');

const FILES_TO_READ = [
  'phones',
  'tablets',
  'accessories',
]

async function prepareFileData(fileName) {
	const filePath = path.resolve('src/DBconnection/setup', `${fileName}.json`);
	const promiseData = await fs.readFile(filePath);
	const data = JSON.parse(promiseData.toString());

	const preparedFileData = await data.map(gadget => {
		const gadgetCopy = { ...gadget, category: fileName };

		gadgetCopy.capacityAvailable = JSON.stringify(gadgetCopy.capacityAvailable);
		gadgetCopy.colorsAvailable = JSON.stringify(gadgetCopy.colorsAvailable);
		gadgetCopy.images = JSON.stringify(gadgetCopy.images);
		gadgetCopy.description = JSON.stringify(gadgetCopy.description);
		gadgetCopy.cell = JSON.stringify(gadgetCopy.cell);

    gadgetCopy.createdAt = new Date();
    gadgetCopy.updatedAt = new Date();

		return gadgetCopy;
	});

	return preparedFileData;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const dataPromises = FILES_TO_READ.map(prepareFileData);
    const preparedData = await Promise.all(dataPromises);
    const normalizedData = preparedData.reduce((acc, data) => ([...acc, ...data]) , [])

    return queryInterface.bulkInsert('products_info', normalizedData);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products_info', null, {});
  }
};
