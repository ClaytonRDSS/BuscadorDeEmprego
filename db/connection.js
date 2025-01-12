const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    // Banco que sera ultilizado;
    dialect: 'sqlite',
    // Onde esta o banco
    storage: './db/app.db',
});

module.exports = sequelize;
