import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const PORT = process.env.SERVER_PORT;
const HOST = process.env.SERVER_HOST;

export const server = express();
server.listen(PORT, () => {
	// eslint-disable-next-line
	console.log(`API is working on ${HOST}`);
});
