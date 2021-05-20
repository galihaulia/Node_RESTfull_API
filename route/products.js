const express = require('express');
const route = express.Router();
const Sequelize = require('sequelize');
const Product = require('../models/product');

route.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handle GET Product'
    });
});

route.post('/', (req, res, next) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price
    });
    product
        .save()
        .then(result => {
            console.log(result);
        })
        .catch(err => console.log(err));
    res.status(201).json({
        message: 'Handle POST Product',
        createdProduct: product
    });
});

route.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if(id === 'special'){
        res.status(200).json({
            message: 'id special',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'not special'
        })
    }
});

route.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Update product'
    });
});

route.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted product'
    });
});

module.exports = route;