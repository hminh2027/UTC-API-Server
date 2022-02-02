const md5 = require('md5')

const { getCookie } = require('../getCookie')
const { postRequest } = require('../request')
const { getCredits } = require('../htmlHandler')

const username = '420334'
const password = '18/11/1999'

module.exports.credit = async (req,res)=>{
    const hashed = md5(password)
    const cookie = await getCookie(username, hashed)
    const html = await postRequest(cookie)
    const data = getCredits(html)
    res.send(html)
    //res.json(data)
}