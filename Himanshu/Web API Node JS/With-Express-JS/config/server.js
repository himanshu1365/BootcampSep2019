const express = require('express')
const router = require('../routers/routes')
const bodyParser = require('body-parser')
const { PORT, HOST } =require('./config')
const mongooseConnection = require('../db').connection;

const app = express()

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.use(router())

app.listen(PORT,HOST, err=>{
    if(err) throw err;
    console.log(`Running on http:${HOST}:${PORT}`)
})