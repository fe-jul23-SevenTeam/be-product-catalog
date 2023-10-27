import fs from 'fs/promises';
import path from 'path';
import { productServices } from '../../services';
import { Product } from '../../types';

export async function addProductsToDb() {
	const filePath = path.resolve('src/DBconnection/setup', 'products.json');
	const promiseData = await fs.readFile(filePath);
	const data = JSON.parse(promiseData.toString());

	await data.forEach((phone: Product) => {
		const phoneCopy = { ...phone };
		delete phoneCopy.id;

		productServices.add(phoneCopy);
	});
}
