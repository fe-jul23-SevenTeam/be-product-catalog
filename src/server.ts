import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';

import { router as Products } from './routes/products.router';
import { router as Tablets } from './routes/tablets.router';

import { getImage } from './controllers';
import { addGadgetInfo } from './DBconnection/setup/addGadgetsInfo';

const PORT = process.env.SERVER_PORT;
const HOST = process.env.SERVER_HOST;
const USER_HOST = process.env.USER_HOST;
const USER_HOST_DEV = process.env.USER_HOST_DEV;

export const server = express();

// TODO check TS
const corsOptions = {
	origin: [USER_HOST ?? '', USER_HOST_DEV ?? ''],
};

server.use('/tablets', cors(corsOptions), express.json(), Tablets);
server.use('/products', cors(corsOptions), express.json(), Products);

server.use('/images', cors(corsOptions), getImage);

server.listen(PORT, () => {
	// eslint-disable-next-line
	console.log(`API is working on ${HOST}`);
});

addGadgetInfo();
