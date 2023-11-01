import { Order } from 'sequelize';
import { ProductsQueryParams } from './products-query-params.type';

export type RequestQuery = {
	where?: ProductsQueryParams;
	limit?: number;
	offset?: number;
	order?: Order;
};
