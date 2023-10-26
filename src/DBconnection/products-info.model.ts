import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { sequelize } from './DBconnection';

@Table({
	timestamps: true,
	tableName: 'products_info',
	modelName: 'ProductsInfo',
})
export class ProductsInfo extends Model {
	@Column({
		type: DataType.TEXT,
		primaryKey: true,
		allowNull: false,
	})
	id: string;

	@Column(DataType.TEXT)
	namespaceId: string;

	@Column(DataType.TEXT)
	name: string;

	@Column(DataType.TEXT)
	capacityAvailable: string;

	@Column(DataType.TEXT)
	capacity: string;

	@Column(DataType.FLOAT)
	priceRegular: number;

	@Column(DataType.FLOAT)
	priceDiscount: number;

	@Column(DataType.TEXT)
	colorsAvailable: string;

	@Column(DataType.TEXT)
	color: string;

	@Column(DataType.TEXT)
	images: string;

	@Column(DataType.TEXT)
	description: string;

	@Column(DataType.TEXT)
	screen: string;

	@Column(DataType.TEXT)
	resolution: string;

	@Column(DataType.TEXT)
	processor: string;

	@Column(DataType.TEXT)
	ram: string;

	@Column(DataType.TEXT)
	camera: string;

	@Column(DataType.TEXT)
	zoom: string;

	@Column(DataType.TEXT)
	cell: string;

	@Column(DataType.TEXT)
	category: string;
}

sequelize.addModels([ProductsInfo]);
// ProductsInfo.sync({ force: true }); // will delete all data from DB
