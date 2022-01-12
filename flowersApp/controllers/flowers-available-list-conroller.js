const flowersMock = require('../mocks/flowers.mocks')

function flowersAvailableListController(req, res) {
    const id = Number(req.params.id)

    res.json(
        flowersMock.filter((flower) => Number(flower.availableQuantity) > 0 )
)
}


module.exports = flowersAvailableListController