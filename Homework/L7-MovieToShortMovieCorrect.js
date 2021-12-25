function Movie(title, subtitle, rate) {
    return {
        title,
        subtitle,
        rate,
    }
}

function ShortMovie(fullname, rate) {
    return {
        fullname,
        rate,
    }
}


function Rate(rate=[0,0,0,0,0]) {
    return {
        1: rate[0],
        2: rate[1],
        3: rate[2],
        4: rate[3],
        5: rate[4],
        getAverage: function () {
            let result,
                votes = 0,
                rateSum = 0,
                rateVotes = 0,
                rating = 0

            for (let index in rate) {
                rating = Number(index) + 1
                votes = Number(rate[index])
                    if (isNaN(votes)) {
                        votes = 0
                    }
                rateVotes += votes
                rateSum += rating * votes
            }
            result = ((rateSum/rateVotes).toFixed(1))

            return rateVotes===0 ? 0 : result

        },

        [Symbol.toPrimitive](hint) {
            switch (hint) {
                case 'number':
                case 'string':
                    return this.getAverage()
                default:
                    return null
            }
        },
    }
}


function transformMovieToShortMovie(movie) {
    return new ShortMovie(
        `${movie.title} - ${movie.subtitle}`, movie.rate
    )
}


const movie1 = new Movie('Star Wars', 'Episode 4', new Rate([0,5,10,200,500]))
console.log('movie1=', movie1)
console.log(+movie1.rate)
console.log(String(movie1.rate))

const movie2 = new ShortMovie('Predator - Episod 79', new Rate([0,5,10,20,200]))
console.log('movie2=', movie2)
console.log(+movie2.rate)
console.log(String(movie2.rate))

const movie3 = transformMovieToShortMovie(movie1)
console.log('movie3=', movie3)
console.log(+movie3.rate)
console.log(String(movie3.rate))

const movie4 = new ShortMovie('Dead student - Episod 1', new Rate([0,5,,'20','ab']))
console.log('movie4=', movie4)
console.log(+movie4.rate)
console.log(String(movie4.rate))

const movie5 = new ShortMovie('Dead student - Episod 2', new Rate)
console.log('movie5=', movie5)
console.log(+movie5.rate)
console.log(String(movie5.rate))

// Якщо в movie5 не передати new Rate буде помилка