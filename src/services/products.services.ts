'use strict';

import { Products } from '../DBconnection';
import { ProductsQueryParams } from '../types';
import { getPreparedRequestQuery } from '../helpers';

const getAll = async (params: ProductsQueryParams) => {
	const requestQuery = getPreparedRequestQuery(params);

	const phones = await Products.findAll(requestQuery).then(dataArr =>
		dataArr.map(data => data?.dataValues)
	);

	return phones;
};

const getById = async (id: string) => {
	const phone = await Products.findByPk(id).then(data => data?.dataValues);

	return phone;
};

export const productServices = {
	getAll,
	getById,
};
