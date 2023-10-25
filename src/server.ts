import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';

import { router as phonesRouter } from './routes/phonesInfo.router';
import { getImage } from './controllers/images.controller';

const PORT = process.env.SERVER_PORT;
const HOST = process.env.SERVER_HOST;
const USER_HOST = process.env.USER_HOST;
const USER_HOST_DEV = process.env.USER_HOST_DEV;

export const server = express();

// TODO check TS
const corsOptions = {
	origin: [USER_HOST!, USER_HOST_DEV!],
};

server.use('/phones', cors(corsOptions), express.json(), phonesRouter);
server.use('/images', cors(corsOptions), getImage);

server.listen(PORT, () => {
	// eslint-disable-next-line
	console.log(`API is working on ${HOST}`);
});
