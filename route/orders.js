const express = require('express');
const route = express.Router();

route.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handle GET Order'
    });
});

route.post('/', (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    };
    res.status(201).json({
        message: 'Handle POST Order',
        order: order
    });
});

route.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'detail orders',
        orderId: req.params.orderId
    });
});

route.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted orders'
    });
});

module.exports = route;