const express = require('express')
const Users = require('../controllers/users')
const { baseURI,basePath } = require('../config/config')
const path = require('path')

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
    return router;
}
