const BASE_OF_MOVIES = [['9.5 weeks', 18],
                        ['Commando', 13],
                        ['Lion-king', 0]]
const movie =[]

function Movie(title, recommendedAge) {
    return {
        title,
        recommendedAge
    }
}

function getMoviesData(inputBase) {
    for (let i = 0; i<inputBase.length; i++) {
        movie[i] = new Movie(inputBase[i][0], inputBase[i][1])
    }
}

function checkAge(movieTitle, clientAge) {
    let i = 0
    while (!(movieTitle === movie[i].title)) {
        if (!(movie[i+1])) {
            return false
        }
        i++
    }

    return clientAge >= movie[i].recommendedAge

}


getMoviesData(BASE_OF_MOVIES)

console.log(checkAge('Lion-king', 5))
console.log(checkAge('Commando', 5))
console.log(checkAge('9.5 weeks', 5))

console.log(checkAge('Commando-2', 5)) // не існує такого фільму в базі