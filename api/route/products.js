const express = require('express');
const route = express.Router();

route.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handle GET Product'
    });
});

route.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Handle POST Product'
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