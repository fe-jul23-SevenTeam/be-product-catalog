import { Request, Response } from 'express';
import { productServices } from '../services';
import responseCodes from '../constants/responseCodes';
import { normalizeProduct } from '../helpers';

// TODO PAGINATION
const getAll = async (req: Request, res: Response) => {
	const phones = await productServices.getAll();

	const normalizedPhones = phones.map(normalizeProduct);

	res.statusCode = responseCodes.SUCCESS;
	res.send(normalizedPhones);
};

const getOneById = async (req: Request, res: Response) => {
	const { id } = req.params;

	const phone = await productServices.getById(id);

	if (!phone) {
		res.sendStatus(responseCodes.NOT_FOUND);

		return;
	}

	const normalizedPhone = normalizeProduct(phone);

	res.statusCode = responseCodes.SUCCESS;
	res.send(normalizedPhone);
};

export const productsController = {
	getAll,
	getOneById,
};
