import { ProductInfoType, ProductInfoNormalized } from '../types';

const HOST = process.env.SERVER_HOST;

export const normalizeProductInfo = (product: ProductInfoType): ProductInfoNormalized => {
	const updatedProduct: ProductInfoNormalized = {
		...product,
		capacityAvailable: JSON.parse(product.capacityAvailable) as string[],
		colorsAvailable: JSON.parse(product.colorsAvailable) as string[],
		images: JSON.parse(product.images) as string[],
		description: JSON.parse(product.description) as string[],
		cell: JSON.parse(product.cell) as string[],
	};

	delete updatedProduct.createdAt;
	delete updatedProduct.updatedAt;
	updatedProduct.images = updatedProduct.images.map(imgUrl => `${HOST}/images/${imgUrl}`);

	return updatedProduct;
};
