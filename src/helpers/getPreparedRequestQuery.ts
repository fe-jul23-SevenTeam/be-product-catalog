import { Sequelize } from 'sequelize';
import { RequestQuery, ProductsQueryParams } from '../types';

const getOrder = (sortBy: string) => {
	switch (sortBy) {
		case 'age':
			return [['year', 'DESC']];

		case 'title':
			return [['name', 'DESC']];

		case 'price':
			return [['price', 'ASC']];

		case 'best-price':
			return [['fullPrice', Sequelize.literal('-'), 'price', 'DESC']];

		default:
			return null;
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
