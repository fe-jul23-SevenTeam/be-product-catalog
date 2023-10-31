import { Request, Response } from 'express';
import { productsInfoServices } from '../services';
import responseCodes from '../constants/responseCodes';
import { normalizeProductInfo } from '../helpers';

const getOneById = async (req: Request, res: Response) => {
	const { id } = req.params;

	const product = await productsInfoServices.getById(id);

	if (!product) {
		res.sendStatus(responseCodes.NOT_FOUND);

		return;
	}

	const normalizedProduct = normalizeProductInfo(product);

	res.statusCode = responseCodes.SUCCESS;
	res.send(normalizedProduct);
};

export const productsInfoController = {
	getOneById,
};
