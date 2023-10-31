import { Request, Response } from 'express';
import { productServices } from '../services';
import responseCodes from '../constants/responseCodes';
import { normalizeProduct } from '../helpers';

// TODO PAGINATION
const getAll = async (req: Request, res: Response) => {
	const params = req.query;

	const products = await productServices.getAll(params);

	const normalizedProducts = products.map(normalizeProduct);

	res.statusCode = responseCodes.SUCCESS;
	res.send(normalizedProducts);
};

const getOneById = async (req: Request, res: Response) => {
	const { id } = req.params;

	if (isNaN(+id)) {
		res.sendStatus(responseCodes.BAD_REQUEST);

		return;
	}

	const product = await productServices.getById(id);

	if (!product) {
		res.sendStatus(responseCodes.NOT_FOUND);

		return;
	}

	const normalizedProduct = normalizeProduct(product);

	res.statusCode = responseCodes.SUCCESS;
	res.send(normalizedProduct);
};

const getLengthByCategory = async (req: Request, res: Response) => {
	const { category } = req.params;

	if (!category) {
		res.sendStatus(responseCodes.BAD_REQUEST);

		return;
	}

	const length = await productServices.getLengthByCategory(category);

	if (!length) {
		res.sendStatus(responseCodes.NOT_FOUND);

		return;
	}

	res.statusCode = responseCodes.SUCCESS;
	res.send({ length });
};

export const productsController = {
	getAll,
	getOneById,
	getLengthByCategory,
};
