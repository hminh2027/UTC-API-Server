const md5 = require('md5')

const { getSessionId } = require('../getSessionId')
const { getCookie } = require('../getCookie')
const { getRequest } = require('../request')
const { getSchedule } = require('../htmlHandler')
const { stringHandler } = require('../stringHandler')

const username = '191210709'
const password = '85273200'

module.exports.schedule = async (req,res) => {
    const hashedPasword = md5(password)
    const sessionId = await getSessionId()

    const loginUrl = `https://qldt.utc.edu.vn/CMCSoft.IU.Web.Info/${sessionId}/login.aspx`
    const registerUrl = `https://qldt.utc.edu.vn/CMCSoft.IU.Web.Info/${sessionId}/StudyRegister/StudyRegister.aspx`

    const cookie = await getCookie(username, hashedPasword, loginUrl)
    const html = await getRequest(cookie, registerUrl)
    const data = getSchedule (html)
    const finalData = stringHandler(data)
    res.json(data)
}