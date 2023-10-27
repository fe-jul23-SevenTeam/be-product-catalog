import fs from 'fs/promises';
import path from 'path';
import { tabletsServices } from '../../services';
import { ProductInfoType } from '../../types';
import { Categories } from '../../enums';

export async function addGadgetInfo() {
	const filePath = path.resolve('src/DBconnection/setup', 'accessories.json');
	const promiseData = await fs.readFile(filePath);
	const data = JSON.parse(promiseData.toString());

	await data.forEach((gadget: ProductInfoType) => {
		const gadgetCopy = { ...gadget, category: Categories.Accessories };

		gadgetCopy.capacityAvailable = JSON.stringify(gadgetCopy.capacityAvailable);
		gadgetCopy.colorsAvailable = JSON.stringify(gadgetCopy.colorsAvailable);
		gadgetCopy.images = JSON.stringify(gadgetCopy.images);
		gadgetCopy.description = JSON.stringify(gadgetCopy.description);
		gadgetCopy.cell = JSON.stringify(gadgetCopy.cell);

		tabletsServices.add(gadgetCopy);
	});
}
