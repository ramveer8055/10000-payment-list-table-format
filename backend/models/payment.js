'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Payment.init({
    uuid: DataTypes.STRING,
    status: DataTypes.STRING,
    mid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'payment',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return Payment;
};