'use strict';

import { Products } from '../DBconnection';
import { Product } from '../types';

const getAll = async () => {
	const phones = await Products.findAll().then(dataArr => dataArr.map(data => data?.dataValues));

	return phones;
};

const getById = async (id: string) => {
	const phone = await Products.findByPk(id).then(data => data?.dataValues);

	return phone;
};

// needed for filling DB
const add = async (phoneInfo: Product) => {
	const preparedPhone = await Products.create(phoneInfo);

	return preparedPhone;
};

export const productServices = {
	getAll,
	getById,
	add,
};
