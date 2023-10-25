import { Request, Response } from 'express';
import PhonesInfoServices from '../services/phonesInfo.services';
import responseCodes from '../constants/responseCodes';
import { normalizePhoneInfo } from '../helpers';

// TODO PAGINATION
const getAll = async (req: Request, res: Response) => {
	const phones = await PhonesInfoServices.getAll();

	const normalizedPhones = phones.map(normalizePhoneInfo);

	res.statusCode = responseCodes.SUCCESS;
	res.send(normalizedPhones);
};

const getOneById = async (req: Request, res: Response) => {
	const { id } = req.params;

	const phone = await PhonesInfoServices.getById(id);

	if (!phone) {
		res.sendStatus(responseCodes.NOT_FOUND);

		return;
	}

	const normalizedPhone = normalizePhoneInfo(phone);

	res.statusCode = responseCodes.SUCCESS;
	res.send(normalizedPhone);
};

export default {
	getAll,
	getOneById,
};
