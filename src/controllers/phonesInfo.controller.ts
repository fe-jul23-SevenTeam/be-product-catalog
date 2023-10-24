import { Request, Response } from 'express';
import PhonesInfoServices from '../services/phonesInfo.services';
import responseCodes from '../constants/responseCodes';

// TODO PAGINATION
const getAll = async (req: Request, res: Response) => {
	const phones = await PhonesInfoServices.getAll();

	res.send(phones);
};

const getOneById = async (req: Request, res: Response) => {
	const { id } = req.params;

	const phone = await PhonesInfoServices.getById(id);

	if (!phone) {
		res.sendStatus(responseCodes.NOT_FOUND);

		return;
	}

	res.statusCode = responseCodes.SUCCESS;
	res.send(phone);
};

export default {
	getAll,
	getOneById,
};
