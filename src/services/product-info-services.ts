'use strict';

import { ProductsInfo } from '../DBconnection';

const getById = async (id: string) => {
	const gadgetInfo = await ProductsInfo.findByPk(id).then(data => data?.dataValues);

	return gadgetInfo;
};

export const productsInfoServices = {
	getById,
};
