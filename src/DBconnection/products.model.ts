import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { sequelize } from './DBconnection';

@Table({
	timestamps: true,
	tableName: 'products',
	modelName: 'Products',
})
export class Products extends Model {
	@Column(DataType.TEXT)
	category: string;

	@Column({
		type: DataType.TEXT,
		references: {
			model: 'products_info',
			key: 'id',
		},
	})
	itemId: string;

	@Column(DataType.TEXT)
	name: string;

	@Column(DataType.FLOAT)
	fullPrice: number;

	@Column(DataType.FLOAT)
	price: number;

	@Column(DataType.TEXT)
	screen: string;

	@Column(DataType.TEXT)
	capacity: string;

	@Column(DataType.TEXT)
	color: string;

	@Column(DataType.TEXT)
	ram: string;

	@Column(DataType.INTEGER)
	year: number;

	@Column(DataType.TEXT)
	image: string;
}

sequelize.addModels([Products]);
// Products.sync({ force: true }); // will delete all data from DB
