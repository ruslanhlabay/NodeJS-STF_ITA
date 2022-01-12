const express = require('express')
const bodyParser = require('body-parser')
const movieListController = require('./controllers/movie-list.controller')
const movieByIdController = require('./controllers/movie-by-id.controller')


const app = express()
const PORT = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/movies',  movieListController)

app.get('/movies/:id',  movieListController)

app.get('/movies/:id/sessions', sessionByMovieIdConroller)



app.listen(PORT, () => {
    console.log(`Example app listen on http://localhost:${PORT}`)
})