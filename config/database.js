const Sequelize = require('sequelize');
const sequelize = new Sequelize('nodeapibelajar', 'postgres', 'galih', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;