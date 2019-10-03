const express = require('express')
const { getUsers, newUsers,updateUsers,deleteUser } = require('../controllers/users')
const { baseURI } = require('../config/config')

module.exports =()=> {
    const router = express.Router();

    router.get(`${baseURI}/users`, getUsers)
    router.post(`${baseURI}/users`,newUsers)
    router.put(`${baseURI}/users`, updateUsers)
    router.delete(`${baseURI}/users`, deleteUser)
    return router;
}
