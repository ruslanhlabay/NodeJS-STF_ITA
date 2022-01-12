const {
    getMovieById,
    getSessionsById,
} = require('../services/movie.service')
const {
    convertSessionToSessionDetailed,
} = require('../services/session.service')
const sessionsMock = require('../mocks/sessions.mock')

function sessionsByMovieIdController(req, res) {
    const { sessions:sessionIds } = getMovieById(Number(req.params.id))


    // const sessions = sessionsMock.filter( (session) => sessionIds.includes(session.id) )

    getSessionsById(sessionIds)



    const preparedSessions = sessions.filter((session) => {
        const currentDate = new Date()

        const startDate = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate(),
            session.startTimeHours,
            session.startTimeMinutes,
        )

        return startDate.getTime() >= currentDate.getTime()
    })

    res.json(
        preparedSessions.map(convertSessionToSessionDetailed)
    )
}

module.exports = sessionsByMovieIdController
