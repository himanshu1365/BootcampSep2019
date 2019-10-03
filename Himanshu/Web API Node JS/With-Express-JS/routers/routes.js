const express = require('express')
const { getUsers, newUsers } = require('../controllers/users')
const { baseURI } = require('../config/config')

module.exports =()=> {
    const router = express.Router();

    router.get(`${baseURI}/users`, getUsers)
    router.post(`${baseURI}/users`,newUsers)
    
    return router;
}
