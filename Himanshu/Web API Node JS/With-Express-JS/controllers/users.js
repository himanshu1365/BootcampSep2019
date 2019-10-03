const { user } = require('../models')


module.exports = {
    getUsers,
    newUsers,
    updateUsers
}
async function getUsers(req,res){
    try{
        let response = await user.getUsers()
        response = JSON.parse(response);
        res.send(response)
    }
    catch(err){
        console.error(err);
    }
}

async function newUsers(req,res){
    try{
        let response = await user.newUsers(req,res);
        res.send(response)
    }
    catch(err){
        console.error(err)
    }
}

async function updateUsers(req,res){
    try{
        let response = await user.updateUsers(req,res);
        res.send(response)
    }
    catch(err){
        console.log(err)
    }
}