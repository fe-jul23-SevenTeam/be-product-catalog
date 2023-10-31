'use strict';

import { Products } from '../DBconnection';
import { ProductsQueryParams } from '../types';
import { getPreparedRequestQuery } from '../helpers';

const getAll = async (params: ProductsQueryParams) => {
	const requestQuery = getPreparedRequestQuery(params);

	const products = await Products.findAll(requestQuery).then(dataArr =>
		dataArr.map(data => data?.dataValues)
	);

	return products;
};

const getById = async (id: string) => {
	const product = await Products.findByPk(id).then(data => data?.dataValues);

	return product;
};

const getLengthByCategory = async (category: string) => {
	const length = await Products.count({
		where: {
			category,
		},
	});

	return length;
};

export const productServices = {
	getAll,
	getById,
	getLengthByCategory,
};
