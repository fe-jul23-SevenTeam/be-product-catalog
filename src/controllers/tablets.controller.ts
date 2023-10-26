import { Request, Response } from 'express';
import { tabletsServices } from '../services';
import responseCodes from '../constants/responseCodes';
import { normalizeGadget } from '../helpers/normalizeGadget';

// TODO PAGINATION
const getAll = async (req: Request, res: Response) => {
	const phones = await tabletsServices.getAll();

	const normalizedPhones = phones.map(normalizeGadget);

	res.statusCode = responseCodes.SUCCESS;
	res.send(normalizedPhones);
};

const getOneById = async (req: Request, res: Response) => {
	const { id } = req.params;

	const phone = await tabletsServices.getById(id);

	if (!phone) {
		res.sendStatus(responseCodes.NOT_FOUND);

		return;
	}

	const normalizedPhone = normalizeGadget(phone);

	res.statusCode = responseCodes.SUCCESS;
	res.send(normalizedPhone);
};

export const tabletsController = {
	getAll,
	getOneById,
};
