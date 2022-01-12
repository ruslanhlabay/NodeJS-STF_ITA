const moviesMock = require('../mocks/movies.mock.js')

function getMovieById(id) {
    return moviesMock.find((movie) => movie.id ===id ))

}

module.exports = {
    getMovieById,
}