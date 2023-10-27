'use strict';
/* eslint-disable */ 

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  products.init({
    category: DataTypes.STRING,
    itemId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'products_info',
        key: 'id',
      }
    },
    name: DataTypes.STRING,
    fullPrice: DataTypes.NUMBER,
    price: DataTypes.NUMBER,
    screen: DataTypes.STRING,
    capacity: DataTypes.STRING,
    color: DataTypes.STRING,
    ram: DataTypes.STRING,
    year: DataTypes.NUMBER,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};