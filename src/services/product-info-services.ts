'use strict';

import { ProductsInfo } from '../DBconnection';
import { ProductInfoType } from '../types';

const getAll = async (category: string) => {
	const gadgets = await ProductsInfo.findAll({ where: { category } }).then(dataArr =>
		dataArr.map(data => data?.dataValues)
	);

	return gadgets;
};

const getById = async (id: string) => {
	const gadgetInfo = await ProductsInfo.findByPk(id).then(data => data?.dataValues);

	return gadgetInfo;
};

// needed for filling DB
const add = async (gadgetInfo: ProductInfoType) => {
	const preparedGadget = await ProductsInfo.create(gadgetInfo);

	return preparedGadget;
};

export const tabletsServices = {
	getAll,
	getById,
	add,
};
