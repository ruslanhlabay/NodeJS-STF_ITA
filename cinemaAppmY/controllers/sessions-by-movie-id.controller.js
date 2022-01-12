const {
    getMovieById,
} require ('../services/movie.service')

function sessionByMovieIdController(req, res) {
    const { sessions } = getMovieById(Number(req.params.id))

    res.json(
        sessions.filter((session) => {
            const currentDate = new Date()
            const startDate = Date.UTC(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                currentDate.getDate(),
                session.startTimeHours,
                session.startTimeMinutes,


            )
            return startDate.getDate.getTime() >= currentDate.getTime()
        })

        const
    )

    res.json()
}

module.exports = sessionByMovieIdController