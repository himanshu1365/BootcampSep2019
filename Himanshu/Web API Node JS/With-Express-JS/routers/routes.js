const express = require('express')
const { getUsers, newUsers, updateUsers, deleteUser, getUsersFromDB, writeUsersToDB, updateUsersToDB,deleteUserFromDB } = require('../controllers/users')
const { baseURI } = require('../config/config')

module.exports =()=> {
    const router = express.Router();

    router.get(`${baseURI}/users`, getUsers)
    router.post(`${baseURI}/users`,newUsers)
    router.put(`${baseURI}/users`, updateUsers)
    router.delete(`${baseURI}/users`, deleteUser)

    router.get(`${baseURI}/database`,getUsersFromDB)
    router.post(`${baseURI}/database`,writeUsersToDB)
    router.put(`${baseURI}/database`,updateUsersToDB)
    router.delete(`${baseURI}/database`,deleteUserFromDB)
    return router;
}
