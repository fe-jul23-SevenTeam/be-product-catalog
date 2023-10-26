import { Gadget, GadgetNormalized } from '../types';

const HOST = process.env.SERVER_HOST;

export const normalizeGadget = (product: Gadget): GadgetNormalized => {
	//@ts-ignore
	const updatedProduct: GadgetNormalized = {
		...product,
	};

	delete updatedProduct.createdAt;
	delete updatedProduct.updatedAt;

	updatedProduct.capacityAvailable = JSON.parse(product.capacityAvailable);
	updatedProduct.colorsAvailable = JSON.parse(product.colorsAvailable);
	updatedProduct.images = JSON.parse(product.images);
	updatedProduct.description = JSON.parse(product.description);
	updatedProduct.cell = JSON.parse(product.cell);

	updatedProduct.images = updatedProduct.images.map(imgUrl => `${HOST}/images/${imgUrl}`);
	return updatedProduct;
};
