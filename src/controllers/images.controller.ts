import fs from 'fs';
import stream from 'stream';
import path from 'path';
import { Request, Response } from 'express';

import responseCodes from '../constants/responseCodes';

export const getImage = (req: Request, res: Response) => {
	const normalizedUrl = new URL(req.url, `http://${req.headers.host}`);
	const normalizedPath = normalizedUrl.pathname.split('/');
	const fileName = normalizedPath.splice(normalizedPath.length - 1).join('');

	const fullFilePath = path.resolve(`src/assets/${normalizedPath.join('/')}`, fileName);

	const readStream = fs.createReadStream(fullFilePath);
	const ps = new stream.PassThrough();
	stream.pipeline(readStream, ps, err => {
		if (err) {
			// eslint-disable-next-line
			console.log(err);
			return res.sendStatus(responseCodes.NOT_FOUND);
		}
	});

	readStream.on('close', () => {
		readStream.destroy();

		return;
	});

	ps.pipe(res);
};
