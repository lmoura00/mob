'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Corrida extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Corrida.belongsTo(models.Mot);
      Corrida.hasMany(models.Pax)
    }
  }
  Corrida.init({
    partida: DataTypes.STRING,
    destino: DataTypes.STRING,
    motId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Corrida',
  });
  return Corrida;
};