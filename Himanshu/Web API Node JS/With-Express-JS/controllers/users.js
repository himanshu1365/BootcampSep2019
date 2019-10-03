const { user } = require('../models')


module.exports = {
    getUsers
}
function getUsers(req,res){
    console.log('hello')
    const response = user.getUsers()
    res.send(response)
}