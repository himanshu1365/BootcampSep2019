const express = require('express')
const router = require('../routers/routes')
const bodyParser = require('body-parser')
const { PORT, HOST } =require('./config')

const app = express()

app.use(router())
app.use(bodyParser({
    extended: false
}))

app.listen(PORT,HOST, err=>{
    if(err) throw err;
    console.log(`Running on http:${HOST}:${PORT}`)
})