const express = require('express')
const { getUsers, newUsers,updateUsers } = require('../controllers/users')
const { baseURI } = require('../config/config')

module.exports =()=> {
    const router = express.Router();

    router.get(`${baseURI}/users`, getUsers)
    router.post(`${baseURI}/users`,newUsers)
    router.put(`${baseURI}/users`, updateUsers)
    
    return router;
}
