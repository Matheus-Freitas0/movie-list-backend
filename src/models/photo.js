const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Photo = sequelize.define('Photo', {
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  relatedTo: { 
    type: DataTypes.STRING, 
    allowNull: false,
  },
  relatedId: {
    type: DataTypes.INTEGER, 
    allowNull: false,
  },
});

module.exports = Photo;
