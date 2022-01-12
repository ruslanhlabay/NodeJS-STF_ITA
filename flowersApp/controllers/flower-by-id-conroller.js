const flowersMock = require('../mocks/flowers.mocks')

function flowerByIdController(req, res) {
    const id = Number(req.params.id)

    res.json(
        flowersMock.filter((flower) => flower.id ===id )
    )
}


module.exports = flowerByIdController