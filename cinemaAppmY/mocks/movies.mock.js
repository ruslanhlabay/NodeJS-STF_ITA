const  Movie = require('../models/movie.model')
const  Session = require('../models/session.model')

const movies = [
    new Movie(
        1,
        'Matrix',
        Date.UTC(2021, 12, 3),
        Date.UTC(2022, 1, 10),
        [
            new Session(1, 14, 0, 90),
            new Session(1, 17, 0, 90),
            new Session(1, 20, 0, 90)
        ]
    ),
    new Movie(
        2,
        'Uncharted',
        Date.UTC(2021, 12, 3),
        Date.UTC(2022, 1, 10),
        [
            new Session(1, 14, 0, 90),
            new Session(1, 17, 0, 90),
            new Session(1, 20, 0, 90)
        ]
    ),
    new Movie(
        3,
        'Agent 007',
        Date.UTC(2021, 11, 15),
        Date.UTC(2022, 1, 10),
        [
            new Session(1, 14, 0, 90),
            new Session(1, 17, 0, 90),
            new Session(1, 20, 0, 90)
        ]
    ),
    new Movie(
        4,
        'Deadpool',
        Date.UTC(2020, 10, 3),
        Date.UTC(2021, 1, 10),
        [
            new Session(1, 14, 0, 90),
            new Session(1, 17, 0, 90),
            new Session(1, 20, 0, 90)
        ]
    )]

module.exports = movies