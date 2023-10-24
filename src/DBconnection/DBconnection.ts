import { Sequelize } from 'sequelize-typescript';

const HOST: string = process.env.DB_CONNECTION!;

export const sequelize = new Sequelize(HOST, {
	dialect: 'postgres',
	dialectOptions: {
		ssl: true,
	},
});
