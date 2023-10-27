import { Request, Response } from 'express';
import { tabletsServices } from '../services';
import responseCodes from '../constants/responseCodes';
import { normalizeProductInfo } from '../helpers';
import { Categories } from '../enums';

// TODO PAGINATION + IS NOT FOUND IF WRONG CATEGORY
const getByCategory = async (req: Request, res: Response) => {
	const { category } = req.params;

	const isCategoryCorrect = (Object.values(Categories) as string[]).includes(category);

	if (!isCategoryCorrect) {
		res.sendStatus(responseCodes.BAD_REQUEST);

		return;
	}

	const productsInfo = await tabletsServices.getAll(category);
	const normalizedProductInfo = productsInfo.map(normalizeProductInfo);

	res.statusCode = responseCodes.SUCCESS;
	res.send(normalizedProductInfo);
};

const getOneById = async (req: Request, res: Response) => {
	const { id } = req.params;

	const phone = await tabletsServices.getById(id);

	if (!phone) {
		res.sendStatus(responseCodes.NOT_FOUND);

		return;
	}

	const normalizedPhone = normalizeProductInfo(phone);

	res.statusCode = responseCodes.SUCCESS;
	res.send(normalizedPhone);
};

export const tabletsController = {
	getByCategory,
	getOneById,
};
