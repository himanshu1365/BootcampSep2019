const { user } = require('../models')


module.exports = {
    getUsers,
    newUsers
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
        //console.log('response : '+response)
        response = JSON.parse(response)
        res.send(response)
    }
    catch(err){
        console.error(err)
    }
}