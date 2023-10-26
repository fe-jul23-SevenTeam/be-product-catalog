import fs from 'fs/promises';
import path from 'path';
import { tabletsServices } from '../../services';
import { Gadget } from '../../types';

export async function addGadgetInfo() {
	const filePath = path.resolve('src/DBconnection/setup', 'tablets.json');
	const promiseData = await fs.readFile(filePath);
	const data = JSON.parse(promiseData.toString());

	await data.forEach((gadget: Gadget) => {
		const gadgetCopy = { ...gadget };

		gadgetCopy.capacityAvailable = JSON.stringify(gadgetCopy.capacityAvailable);
		gadgetCopy.colorsAvailable = JSON.stringify(gadgetCopy.colorsAvailable);
		gadgetCopy.images = JSON.stringify(gadgetCopy.images);
		gadgetCopy.description = JSON.stringify(gadgetCopy.description);
		gadgetCopy.cell = JSON.stringify(gadgetCopy.cell);

		tabletsServices.add(gadgetCopy);
	});
}
