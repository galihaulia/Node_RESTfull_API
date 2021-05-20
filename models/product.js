const Sequelize = require('sequelize');
const db = require('../config/database');

const Product = db.define('product',{
    name:{type: Sequelize.STRING},
    price:{type: Sequelize.NUMBER}
});

module.exports = Product;
