const Sequelize = require('sequelize');
const database = require('../database/db');

const Carros = database.define(
    "carro",
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        imagem: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        nome: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        carroceria: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        cambio: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        ano: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        velocidade: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
        createdAt: false,
        updateAt: false,
    }
);

const initTable = async () => {
    await Carros.sync();
};

initTable();

module.exports = Carros;