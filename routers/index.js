const credit = require('./credit')
const schedule = require('./schedule')

module.exports = (app) => {
    app.use('/credit', credit)
    app.use('/schedule', schedule)
}