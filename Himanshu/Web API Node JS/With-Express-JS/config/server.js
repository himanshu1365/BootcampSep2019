const express = require('express')
const bodyParser = require('body-parser')
const routers = require('../routes/routers')
const { PORT, HOST } = require("./config");

const server = express()
server.use(bodyParser({
    extended: false
}))

server.use(routers);

server.listen(PORT, HOST, err => {
    if (err) throw err;
    console.log(`Runnnig on: http://${HOST}:${PORT}`);
});