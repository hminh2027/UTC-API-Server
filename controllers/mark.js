module.exports.mark = async (req,res)=>{
    const hashed = md5(password)
    const cookie = await getCookie(username, hashed)
    const html = await postRequest(cookie)
    const data = getCredits(html)
    res.send(html)
    //res.json(data)
}