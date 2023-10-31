import { Order, Sequelize } from 'sequelize';
import { RequestQuery, ProductsQueryParams } from '../types';

const getOrder = (sortBy: string): Order | undefined => {
	switch (sortBy) {
		case 'newest':
			return [['year', 'DESC']];

		case 'alphabetically':
			return [['name', 'DESC']];

		case 'cheapest':
			return [['price', 'ASC']];

		case 'best-price':
			return [['fullPrice', Sequelize.literal(' - "price"'), 'DESC']];

		default:
			return;
	}
};

export const getPreparedRequestQuery = (params: ProductsQueryParams): RequestQuery => {
	const requestQuery: RequestQuery = {};

	if (params.category) {
		requestQuery.where = { category: params.category };
	}

	if (params.pageSize) {
		requestQuery.limit = +params.pageSize;
		requestQuery.offset = (+(params.page ?? 1) - 1) * requestQuery.limit;
	}

	if (params.sortBy) {
		requestQuery.order = getOrder(params.sortBy);
	}

	return requestQuery;
};
