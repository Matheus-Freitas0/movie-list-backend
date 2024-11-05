import { DataTypes } from 'sequelize';
import { define } from '../db';

const User = define('Movies', {
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
    }

});

export default User;