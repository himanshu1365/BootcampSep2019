const express = require('express')
const Users = require('../controllers/users')
const { baseURI } = require('../config/config')
const { checkAuthentication } = require('../auth/auth')


module.exports =()=> {
    const router = express.Router();

    router.get(`${baseURI}/users`, Users.getUsers)
    router.post(`${baseURI}/users`,Users.newUsers)
    router.put(`${baseURI}/users`, Users.updateUsers)
    router.delete(`${baseURI}/users`, Users.deleteUser)

    router.get(`${baseURI}/database`,Users.getUsersFromDB)
    router.post(`${baseURI}/database`,Users.writeUsersToDB)
    router.put(`${baseURI}/database`,Users.updateUsersToDB)
    router.delete(`${baseURI}/database`,Users.deleteUserFromDB)

    router.get('/login',(req,res)=>{
        return res.render('login.ejs')
    })

    router.post('/login/loginAuthentication',(req,res)=>{
        const logindata = req.body
        if(logindata.inputUsername == 'himanshu' && logindata.inputPassword == 'himanshu'){
            checkAuthentication(req,res);
        }
    })
    return router;
}
