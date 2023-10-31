import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs/promises';

export const getDefaultPage = async (req: Request, res: Response) => {
	const filePath = path.resolve('', 'README.html');
	const promiseData = await fs.readFile(filePath);

	res.setHeader('Content-Type', 'text/html');

	res.send(promiseData);
};
