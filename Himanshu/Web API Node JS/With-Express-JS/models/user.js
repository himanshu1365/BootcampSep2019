const fs = require('fs')

exports.getUsers = async function(req,res){
    return readFile();
}

exports.newUsers = async function(req,res){
    let filedata, body_data, users = []

    body_data = req.body
    filedata = await readFile();
    
    filedata = JSON.parse(filedata)
    for(let i=0;i<filedata.length;i++){
        users.push(filedata[i])
    }
    users.push(body_data)
    writeFile(users)

    return({
        status: 200,
        statusText: 'Ok',
        message: "Inserted data"
    })
}

exports.updateUsers = async function(req,res){
    let filedata,key

    filedata = await readFile()
    body = req.body
    key = Object.keys(body)[0]

    filedata = JSON.parse(filedata)
    for(var i=0;i<filedata.length;i++){
        if(filedata[i]['id'] == req.query.id){
            filedata[i][key] = body[key]
        }
    }
    writeFile(filedata)

    return({
        status: 200,
        statusText: 'Ok',
        message: "Updated data"
    })
}

function readFile(){
    return fs.promises.readFile('input.json', "utf-8");
}

function writeFile(new_data){
    return fs.promises.writeFile('input.json',JSON.stringify(new_data));
}