/* eslint-disable */ 
require('dotenv').config();

const DB_CONNECTION = process.env.DB_CONNECTION;

const db_config = {
	url: DB_CONNECTION,
	dialect: 'postgres',
	dialectOptions: {
		ssl: true,
	}
};

module.exports = {
	development: {
    username: "postgres",
    password: 12345678,
    database: "postgres",
    host: "localhost",
    dialect: "postgres"
  },
	test: {...db_config},
	production: {...db_config},
};