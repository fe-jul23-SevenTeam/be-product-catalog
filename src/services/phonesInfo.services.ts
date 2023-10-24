'use strict';

import { PhonesInfoModel } from '../DBconnection';
import { PhoneInfo } from '../types';

const getAll = async () => {
	const phones = await PhonesInfoModel.findAll();

	return phones;
};

const getById = async (id: string) => {
	const phone = await PhonesInfoModel.findByPk(id);

	return phone;
};

// needed for filling DB
const add = async (phoneInfo: PhoneInfo) => {
	const preparedPhone = await PhonesInfoModel.create(phoneInfo);

	return preparedPhone;
};

export default {
	getAll,
	getById,
	add,
};