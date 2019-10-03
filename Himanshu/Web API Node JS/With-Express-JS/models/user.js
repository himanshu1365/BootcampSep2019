const fs = require('fs')

exports.getUsers = async function(req,res){
    return readFile();
}

exports.newUsers = async function(req,res){
    let filedata = readFile();
    let bodyData = req.body();
    
    return filedata
}

function readFile(){
    return fs.promises.readFile('input.json', "utf-8");
}

function writeFile(new_data){
    return fs.promises.writeFile('input.json',JSON.stringify(new_data));
}