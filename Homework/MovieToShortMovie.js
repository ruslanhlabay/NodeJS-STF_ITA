function Movie(title, subtitle, rate=[0, 0, 0, 0, 0]) {
    return {
        title, 
        subtitle,
        rate: {
            '1': rate[0],
            '2': rate[1],
            '3': rate[2],
            '4': rate[3],
            '5': rate[4],
            getAverage: function() {
                let result = 0,
                votes = 0,
                rateSum = 0,
                rateVotes = 0,
                rating = 0

                    for (let index in rate) {
                        rating = Number(index) + 1
                        votes = Number(rate[index])
                        isNaN(votes) ? votes = 0 :

                        rateVotes += votes
                        rateSum += rating * votes
                    }

                result = Number( (rateSum / rateVotes).toFixed(1) )

                return result
            },
            valueOf() {
                return this.getAverage()
            },
        },
    }
}


function ShortMovie(fullname, rate=[0, 0, 0, 0, 0]) {
    return {
        fullname,
        rate,
        toString() {
            return this.fullname + ', rate: ' + this.rate
        }
    }
}



function transformMovieToShortMovie(movie) {
  //  запитати в Романа чи змінювати переданий об*єкт чи робити новий
    const newShortMovie = new ShortMovie

    newShortMovie.fullname = movie.title + ' (' + movie.subtitle + ')'
    newShortMovie.rate = movie.rate

    return newShortMovie
}


const O = new Movie('Star Wars', 'Episode 4', [0, 'a', , 'b', 30])

// console.log(O);

// console.log(O.rate.getAverage());

console.log(+O.rate);

o2 = transformMovieToShortMovie(O)

console.log(String(o2));
console.log('o2', o2);
console.log('rate-',o2.rate);