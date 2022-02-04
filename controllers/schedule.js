const md5 = require('md5')

const { getSessionId } = require('../getSessionId')
const { getCookie } = require('../getCookie')
const { getRequest } = require('../getHTML')
const { getSchedule } = require('../htmlHandler')
const { stringHandler } = require('../stringHandler')

module.exports.getAllSchedule = async (req, res) => {
    const {username, password} = req.body
    if (!username || !password) return res.status(400).json({data: '', error: 'Username or password not found!'})

    try {      
        const hashedPasword = md5(password)
        const sessionId = await getSessionId()

        const loginUrl = `https://qldt.utc.edu.vn/CMCSoft.IU.Web.Info/${sessionId}/login.aspx`
        const registerUrl = `https://qldt.utc.edu.vn/CMCSoft.IU.Web.Info/${sessionId}/StudyRegister/StudyRegister.aspx`
    
        const cookie = await getCookie(username, hashedPasword, loginUrl)
    
        const html = await getRequest(cookie, registerUrl)
        const data = getSchedule (html)

        return res.status(200).json({data, error:''})

    } catch (err) {
        return res.status(400).json({data: '', error: err})
    }  
}

module.exports.getScheduleOfToday = async (req, res) => {
    const {username, password} = req.body
    if (!username || !password) return res.status(400).json({data: '', error: 'Username or password not found!'})

    try {      
        const hashedPasword = md5(password)
        const sessionId = await getSessionId()

        const loginUrl = `https://qldt.utc.edu.vn/CMCSoft.IU.Web.Info/${sessionId}/login.aspx`
        const registerUrl = `https://qldt.utc.edu.vn/CMCSoft.IU.Web.Info/${sessionId}/StudyRegister/StudyRegister.aspx`
    
        const cookie = await getCookie(username, hashedPasword, loginUrl)
    
        const html = await getRequest(cookie, registerUrl)
        const data = getSchedule (html)
        const finalData = stringHandler(data)
        if (!finalData) return res.status(200).json({data: 'No study schedule available!', error:''})

        return res.status(200).json({data: finalData, error:''})

    } catch (err) {
        return res.status(400).json({data: '', error: err})
    }  
}

module.exports.getScheduleOfDay = async (req, res) => {
    const {username, password} = req.body
    const {year, month, day} = req.query
    if (!username || !password) return res.status(400).json({data: '', error: 'Username or password not found!'})
    if (!day) return res.status(400).json({data: '', error: 'Day not found!'})

    try {      
        const hashedPasword = md5(password)
        const sessionId = await getSessionId()

        const loginUrl = `https://qldt.utc.edu.vn/CMCSoft.IU.Web.Info/${sessionId}/login.aspx`
        const registerUrl = `https://qldt.utc.edu.vn/CMCSoft.IU.Web.Info/${sessionId}/StudyRegister/StudyRegister.aspx`
    
        const cookie = await getCookie(username, hashedPasword, loginUrl)
    
        const html = await getRequest(cookie, registerUrl)
        const data = getSchedule (html)
        const finalData = stringHandler(data, year, month, day)
        if (!finalData) return res.status(200).json({data: 'No study schedule available!', error:''})

        return res.status(200).json({data: finalData, error:''})

    } catch (err) {
        return res.status(400).json({data: '', error: err})
    }  
}
