const { user } = require('../models')



exports.getUsers = async function (req,res){
    const response = await user.getUsers()
    res.send(response)
}