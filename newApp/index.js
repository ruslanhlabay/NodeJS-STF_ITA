const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const { movieCheckerController } = require('../newApp/controllers/movieCheckers')
const upload = multer()
const app = express()
const PORT = 3000


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true }))

app.get ('/get-name/:name/:surname', (req, res)=> {
    console.log(req.params)

    const {name: myName, surname} = req.params

     res.send(`My name is ... ${myName} ${surname}`)
})

app.get ('/get-age/:age', (req, res)=> {
    const {age} = req.params

    res.send(`I am ${age} old `)
})


app.post ('/add-user', (req, res) => {
    console.log(req.body)
    res.send('')

})


app.get('/check-user-age/:movieId/:clientAge', movieCheckerController())

app.listen(PORT, () => {

    console.log(`Example app listen on http://localhost:${PORT}`)
})