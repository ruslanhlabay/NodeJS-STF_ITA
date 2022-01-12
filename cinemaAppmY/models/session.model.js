
function  Session(id, startTimeHours, startTimeMinutes, duration) {
    return {
        id,
        startTimeHours,
        startTimeMinutes,
        duration,
    }
}

module.exports = Session