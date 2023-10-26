'use strict';

import { Tablets } from '../DBconnection';
import { Gadget } from '../types';

const getAll = async () => {
	const gadgets = await Tablets.findAll().then(dataArr => dataArr.map(data => data?.dataValues));

	return gadgets;
};

const getById = async (id: string) => {
	const gadgetInfo = await Tablets.findByPk(id).then(data => data?.dataValues);

	return gadgetInfo;
};

// needed for filling DB
const add = async (gadgetInfo: Gadget) => {
	const preparedGadget = await Tablets.create(gadgetInfo);

	return preparedGadget;
};

export const tabletsServices = {
	getAll,
	getById,
	add,
};
