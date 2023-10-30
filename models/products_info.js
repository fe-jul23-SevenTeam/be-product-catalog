'use strict';
/* eslint-disable */
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products_info extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  products_info.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    namespaceId: DataTypes.STRING,
    name: DataTypes.STRING,
    capacityAvailable: DataTypes.STRING,
    capacity: DataTypes.STRING,
    priceRegular: DataTypes.FLOAT,
    priceDiscount: DataTypes.FLOAT,
    colorsAvailable: DataTypes.STRING,
    color: DataTypes.STRING,
    images: DataTypes.TEXT,
    description: DataTypes.TEXT,
    screen: DataTypes.STRING,
    resolution: DataTypes.STRING,
    processor: DataTypes.STRING,
    ram: DataTypes.STRING,
    camera: DataTypes.STRING,
    zoom: DataTypes.STRING,
    cell: DataTypes.STRING,
    category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'products_info',
  });
  return products_info;
};