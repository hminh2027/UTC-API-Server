const express = require('express')
const app = express()
const routers = require('./routers/index')

const PORT = process.env.PORT || 8000

routers(app)

app.get('/', (req, res)=>{
    res.send('Welcome to my School\' Schedule APIs')
})


app.listen(PORT, ()=>console.log(`Server is working on ${PORT}!!`))