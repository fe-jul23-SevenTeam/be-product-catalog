import { Product } from '../types';

const HOST = process.env.SERVER_HOST;

export const normalizeProduct = (product: Product): Product => {
	const updatedProduct = { ...product };

	delete updatedProduct.createdAt;
	delete updatedProduct.updatedAt;
	updatedProduct.image = `${HOST}/images/${updatedProduct.image}`;

	return updatedProduct;
};
