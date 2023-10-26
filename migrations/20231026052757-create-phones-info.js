'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Phones_info', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			category: {
				type: Sequelize.STRING
			},
			phoneId: {
				type: Sequelize.STRING
			},
			idemId: {
				type: Sequelize.STRING
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
			ram: {
				type: Sequelize.STRING
			},
			year: {
				type: Sequelize.INTEGER
			},
			image: {
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
		await queryInterface.dropTable('Phones_info');
	}
};