const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Plan = sequelize.define('Plan', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

module.exports = Plan;
