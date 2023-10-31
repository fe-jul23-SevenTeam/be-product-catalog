import { ProductsQueryParams } from './products-query-params.type';

export type RequestQuery = {
	where?: ProductsQueryParams;
	limit?: number;
	offset?: number;
	// eslint-disable-next-line
	order?: any;
	// order?: [string, Literal | string, string | undefined][];
};
