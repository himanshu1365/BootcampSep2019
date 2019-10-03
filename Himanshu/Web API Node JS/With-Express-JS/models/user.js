const fs = require('fs')
const users= []

exports.getUsers = async function(req,res){
    return new Promise((resolve,reject)=>{
        resolve({
            status: 200,
            statusText: 'Ok',
            data: users
        })
    })
}