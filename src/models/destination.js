const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config');

const Destination = sequelize.define('Destination', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  visited: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  imageUrl: {
    type: DataTypes.STRING, 
    allowNull: true,
  },
});

module.exports = Destination;
