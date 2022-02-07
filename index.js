const express = require('express')
const app = express()
const routers = require('./routers/index')

app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.set('view engine', 'pug')

const PORT = process.env.PORT || 8000

routers(app)

app.get('/', (req, res)=>{
    res.render('index', {message: 'This is pug template!'})
})


app.listen(PORT, ()=>console.log(`Server is working on ${PORT}!!`))