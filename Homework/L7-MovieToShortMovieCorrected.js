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
                rate.length = 5; //якщо передали голосів більше ніж за 5 оцінок, то для розрахунку беремо лише перші 5
                for (let index in rate) {
                    rating = Number(index) + 1
                    votes = Number(rate[index])
                    // якщо задали значення голосів не цифрами, то такі значення берем рівними 0
                    // інший варіант поведінки - не розраховувати взагалі такий рейтинг але обрано перший варіант)
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



// Тестим створення Movie з передаванням надлишкових даних у Rate. Середній Rate повинен бути 5.
const movie1 = new Movie('Star Wars', 'Episode 4', new Rate([0,0,0,0,500,8, 10]))
console.log('movie1=', movie1)
console.log(+movie1.rate)
console.log(String(movie1.rate))

// Тестим створення ShortMovie
const movie2 = new ShortMovie('Predator - Episod 79', new Rate([0,0,0,20,200]))
console.log('movie2=', movie2)
console.log(+movie2.rate)
console.log(String(movie2.rate))

// Тестим перетворення Movie у ShortMovie
const movie3 = transformMovieToShortMovie(movie1)
console.log('movie3=', movie3)
console.log(+movie3.rate)
console.log(String(movie3.rate))

// Тестим варіант з передаванням в Rate недостатньоъ кількості аргументів і частина аргументів не числового типу
const movie4 = new ShortMovie('Dead student - Episod 1', new Rate([0,5,'20','ab']))
console.log('movie4=', movie4)
console.log(+movie4.rate)
console.log(String(movie4.rate))

// Тестим варіант без передавання даних в Rate
const movie5 = new ShortMovie('Dead student - Episod 2', new Rate)
console.log('movie5=', movie5)
console.log(+movie5.rate)
console.log(String(movie5.rate))

// Якщо в movie5 не передати new Rate буде помилка