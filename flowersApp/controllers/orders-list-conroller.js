const ordersMock = require('../mocks/orders.mocks')

function ordersListController(req, res) {

    res.send(ordersMock)
}


module.exports = ordersListController