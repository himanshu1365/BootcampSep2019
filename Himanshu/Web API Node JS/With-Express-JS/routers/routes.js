const express = require('express')
const { getUsers } = require('../controllers/users')
const { baseURI } = require('../config/config')

module.exports =()=> {
    const router = express.Router();

    router.get(`${baseURI}/users`,getUsers)
    
    return router;
}
