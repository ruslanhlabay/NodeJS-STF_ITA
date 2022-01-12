const moviesMock = require('../mocks/movies.mock')

function movieListController(req, res) {
   res.send(
       moviesMock.filter((movie) => {
           return movie.endRentalDate >= new Date().getTime()
       })
   )
}


module.exports = movieListController