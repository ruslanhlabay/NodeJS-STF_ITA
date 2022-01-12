function Order(id, name, flowerId, Quantity, packing, DateofOrder) {
    return {
        id,
        name,
        flowerId,
        Quantity,
        packing,
        DateofOrder,
    }
}

module.exports = Order