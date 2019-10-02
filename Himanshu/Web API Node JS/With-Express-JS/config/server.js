const express = require('express')
const route = require('../routers/routes')
const app = express();
const port = 3000

app.use('/',route)


app.listen(port, ()=>{
    console.log('Server is running at '+port)
})