const md5 = require('md5')

const { getSessionId } = require('../getSessionId')
const { getCookie } = require('../getCookie')
const { getRequest } = require('../getHTML')
const { getStudent } = require('../htmlHandler')

module.exports.getStudent = async (req,res)=>{
    const {username, password} = req.body
    if (!username || !password) return res.status(400).json({data: '', error: 'Username or password not found!'})

    try {      
        const hashedPasword = md5(password)
        const sessionId = await getSessionId()

        const loginUrl = `https://qldt.utc.edu.vn/CMCSoft.IU.Web.Info/${sessionId}/login.aspx`
        const profileUrl = `https://qldt.utc.edu.vn/CMCSoft.IU.Web.Info/${sessionId}/StudentProfileNew/HoSoSinhVien.aspx`
    
        const cookie = await getCookie(username, hashedPasword, loginUrl)
        const html = await getRequest(cookie, profileUrl)
        const data = await getStudent(html)

        return res.status(200).json({data, error:''})

    } catch (err) {
        console.log(err)
        return res.json({data: '', error: err})
    }  
}