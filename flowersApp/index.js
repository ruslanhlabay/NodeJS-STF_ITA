const express = require('express')
const bodyParser = require('body-parser')
const flowersListController = require('./controllers/flowers-list.controller')
const flowerByIdController = require('./controllers/flower-by-id-conroller')
const flowersAvailableListController = require('./controllers/flowers-available-list-conroller')
const ordersListController = require('./controllers/orders-list-conroller')


const app = express()
const PORT = 3000


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true }))


app.get('/flowers',   flowersListController)
app.get('/available-flowers',   flowersAvailableListController)
app.get('/flower/:id',   flowerByIdController)
app.get('/orders',   ordersListController)

// app.get('/order-flowers/:id/:quantity',   flowersOrderingController)
// app.get('/list-of-ordered-flowers/:id',   flowersOrderedlistController)



app.listen(PORT, () => {

    console.log(`Example app listen on http://localhost:${PORT}`)
})