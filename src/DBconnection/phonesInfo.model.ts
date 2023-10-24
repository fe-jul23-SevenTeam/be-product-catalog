import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { sequelize } from './DBconnection';

@Table({
	timestamps: true,
	tableName: 'phones_info',
	modelName: 'PhonesInfoModel',
})

// TODO check table (hardcoded)
export class PhonesInfoModel extends Model {
	@Column(DataType.TEXT)
		category!: string;

	@Column(DataType.TEXT)
		phoneId!: string;

	@Column(DataType.TEXT)
		itemId!: string;

	@Column(DataType.TEXT)
		name!: string;

	@Column(DataType.FLOAT)
		fullPrice!: number;

	@Column(DataType.FLOAT)
		price!: number;

	@Column(DataType.TEXT)
		screen!: string;

	@Column(DataType.TEXT)
		capacity!: string;

	@Column(DataType.TEXT)
		color!: string;

	@Column(DataType.TEXT)
		ram!: string;

	@Column(DataType.INTEGER)
		year!: number;

	@Column(DataType.TEXT)
		image!: string;
}

sequelize.addModels([PhonesInfoModel]);
// PhonesInfoModel.sync({ force: true }); // will delete all data from DB
