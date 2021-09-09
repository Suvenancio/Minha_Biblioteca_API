'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Livros extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Livros.init({
    nome: DataTypes.STRING,
    autor: DataTypes.STRING,
    editora: DataTypes.STRING,
    ano: DataTypes.STRING,
    genero: DataTypes.STRING,
    foto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Livros',
  });
  return Livros;
};