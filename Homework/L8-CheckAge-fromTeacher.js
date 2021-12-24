function Movie(name, age) {
    return {
        name,
        age,
    }
}

const movies = [
    new Movie('Commando', 18),
    new Movie('Matrix', 18),
    new Movie('Lord of the Rings', 12),
    new Movie('Agent 007', 20),
]

function getMovieByName(name) {
    for (const movie of movies) {
        if (movie.name === name) {
            return movie
        }
    }

    return null
}

function checkAge(name, age) {
    const movie = getMovieByName(name)
    
    return Boolean(movie) && movie.age<Number(age)
}


console.log(checkAge('Lion-king', 5))
console.log(checkAge('Commando', 5))
console.log(checkAge('9.5 weeks', 5))
console.log(checkAge('Matrix', 20))
const movies = [
    {
        name:
    }
]