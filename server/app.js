const express = require('express')
const cors = require('cors')
const app = express()
const diaries = require('./routers/diaryRoutes')

app.use(cors())
app.use(express.json())
app.use('/diary', diaries)

app.get ('/',(req,res)=>{
    res.send('Welcome to my little world!')
})

module.exports = app