const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Movies = sequelize.define('Movies', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    year: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    director: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    synopsis: {
        type: DataTypes.TEXT,
    },
    note: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: true,
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
});

module.exports = Movies