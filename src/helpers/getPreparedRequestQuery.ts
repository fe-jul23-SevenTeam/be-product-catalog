import { Order, Sequelize } from 'sequelize';
import { RequestQuery, ProductsQueryParams } from '../types';
import { sequelize } from '../DBconnection';

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

		case 'recommended':
			return sequelize.random();

		default:
			return;
	}
};

export const getPreparedRequestQuery = (params: ProductsQueryParams): RequestQuery => {
	const requestQuery: RequestQuery = {};

	if (params.category) {
		requestQuery.where = { category: params.category };
	}

	if (params.pageSize && !isNaN(+params.pageSize)) {
		requestQuery.limit = +params.pageSize;

		const page = +(params.page ?? 1);
		const normalizedPage = isNaN(page) ? 1 : page;

		requestQuery.offset = (normalizedPage - 1) * requestQuery.limit;
	}

	if (params.sortBy) {
		requestQuery.order = getOrder(params.sortBy);
	}

	return requestQuery;
};
