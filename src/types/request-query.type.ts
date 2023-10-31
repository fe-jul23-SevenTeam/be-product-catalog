import { ProductsQueryParams } from './products-query-params.type';
import { Order } from 'sequelize';

export type RequestQuery = {
	where?: ProductsQueryParams;
	limit?: number;
	offset?: number;
	order?: Order;
};
