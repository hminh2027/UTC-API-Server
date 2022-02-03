const md5 = require('md5')

const { getSessionId } = require('../getSessionId')
const { getCookie } = require('../getCookie')
const { getRequest } = require('../request')
const { getSchedule } = require('../htmlHandler')
const { stringHandler } = require('../stringHandler')

module.exports.schedule = async (req, res) => {
    try {
        const {username, password} = req.body
        if (!username || !password) return res.status(400).json({data: '', error: 'Username or password not found!'})

        const hashedPasword = md5(password)
        const sessionId = await getSessionId()

        const loginUrl = `https://qldt.utc.edu.vn/CMCSoft.IU.Web.Info/${sessionId}/login.aspx`
        const registerUrl = `https://qldt.utc.edu.vn/CMCSoft.IU.Web.Info/${sessionId}/StudyRegister/StudyRegister.aspx`
    
        const cookie = await getCookie(username, hashedPasword, loginUrl)
    
        const html = await getRequest(cookie, registerUrl)
        const data = getSchedule (html)
        const finalData = stringHandler(data)

        return res.status(200).json({data: finalData, error:''})

    } catch (err) {
        console.log(err)
        return res.json({data: '', error: err})
    }
    
}