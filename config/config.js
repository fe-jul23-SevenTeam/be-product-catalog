require('dotenv').config()

const DB_CONNECTION = process.env.DB_CONNECTION;
const db_config = {
	url: DB_CONNECTION,
	dialect: 'postgres',
	dialectOptions: {
		ssl: true,
	}
};

module.exports = {
	development: {...db_config},
	test: {...db_config},
	production: {...db_config},
};