const flowersMock = require('../mocks/flowers.mocks')

function flowersListController(req, res) {

    res.send(flowersMock)
}


module.exports = flowersListController