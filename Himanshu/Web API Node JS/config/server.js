const http = require('http')
const { HOST, PORT }  = require('./config')

const server = http.createServer((req,res)=>{
    req.on("data", chunk =>{
        req.body = JSON.parse(Buffer.from(chunk,"utf-8").toString())
    })
})

server.on("request", (req,res)=>{
    if (req.url.includes("?")) queryStringParser(req);
})

server.listen(HOST,PORT, err=>{
    if(err) throw err;
    console.log(`Running on: http://${HOST}:${PORT}`)
})