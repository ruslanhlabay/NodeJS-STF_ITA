const moviesMock = require('../mocks/movies.mock')
const {
    getMovieById
} = require ('../services/movie.service')



function movieByIdController(req, res) {
    const id = Number(req.params.id)

    res.json(
        moviesMock.filter( (movie) => movie.id ===id )
    )
}

module.exports = movieByIdController

