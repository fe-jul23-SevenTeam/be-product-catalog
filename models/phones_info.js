'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class phones_info extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  phones_info.init({
    category: DataTypes.STRING,
    phoneId: DataTypes.STRING,
    idemId: DataTypes.STRING,
    name: DataTypes.STRING,
    fullPrice: DataTypes.NUMBER,
    price: DataTypes.NUMBER,
    screen: DataTypes.STRING,
    capacity: DataTypes.STRING,
    ram: DataTypes.STRING,
    year: DataTypes.NUMBER,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'phones_info',
  });
  return phones_info;
};