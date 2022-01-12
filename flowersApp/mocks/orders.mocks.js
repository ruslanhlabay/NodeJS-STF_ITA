const Order = require('../models/order.model')

const orders = [
    new Order (
        1,
        'Іван',
        1,
        10,
        true,
        '28/11/21',
    ),
    new Order (
        2,
        'Антон',
        2,
        5,
        true,
        '28/11/21',
    ),
    new Order (
        3,
        'Віктор Павлік',
        3,
        3,
        false,
        '02/12/21',
    )
]

module.exports = orders