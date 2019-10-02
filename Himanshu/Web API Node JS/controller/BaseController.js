const fs = require('fs')
const path = require('path')


class BaseController{
    constructor(){
        this.users = []
    }
    async read(req,res){
        fs.promises.readFile('input.json').then(data=>{
            data = JSON.parse(data)
            res.end(JSON.stringify(data))
        }).catch(err=>{
            const response = { error: err };
            res.setHeader("content-type", "application/json");
            res.end(JSON.stringify(response));
        })
    }

    async create(req,res){
        fs.promises.readFile('input.json').then(data=>{
            let JSONdata = []
            JSONdata = JSON.parse(data)
            let filedata = req.body
            JSONdata.push(filedata)
            fs.promises.writeFile('input.json',JSON.stringify(JSONdata)).then(data=>{
                const response = {
                    status: 200,
                    statusText: "OK",
                    message: "Client Inserted!"
                };
                res.end(JSON.stringify(response))
            }).catch(err=>{
                const response = { error: err }
                res.setHeader("content-type", "application/json")
                res.end(JSON.stringify(response))
            })
        }).catch(err=>{
            const response = { error: err }
            res.setHeader("content-type", "application/json")
            res.end(JSON.stringify(response))
        })
    }

    async update(req,res){
        let JSONdata = ""
        req.on('data',chunk =>{
            JSONdata += chunk.toString();
        })
        req.on('end',()=>{
            JSONdata = JSON.parse(JSONdata)
            fs.promises.readFile('input.json').then(data=>{
                data = JSON.parse(data)
                let headerID = Number.parseInt(Number.parseInt(req.headers.id))
                for(var id in data){
                    if(data[id]['id'] == headerID){
                        console.log(data[id],req.headers.id)
                        data[id] = JSONdata
                    }
                }
                fs.promises.writeFile('input.json',JSON.stringify(data)).then(data=>{
                    const response = {
                        status: 200,
                        statusText: "OK",
                        message: "Client Updated"
                    };
                    res.end(JSON.stringify(response))
                }).catch(err=>{
                    const response = { error: err }
                    res.setHeader("content-type", "application/json")
                    res.end(JSON.stringify(response))
                })
            }).catch(err=>{
                const response = { error: err }
                res.setHeader("content-type", "application/json")
                res.end(JSON.stringify(response))
            })
        })
    }
}
 
 exports.BaseController = BaseController;


 function readFile() {
    const dbPath = path.join(__dirname, "../", "input.json");
    return fs.promises.readFile(dbPath, "utf-8");
  }
  
  function writeFile(data) {
    const dbPath = path.join(__dirname, "../", "input.json");
    return fs.promises.writeFile(dbPath, JSON.stringify(data));
  }