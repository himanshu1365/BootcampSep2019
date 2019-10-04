const webtoken = require('jsonwebtoken')
const { SECRET } = require('../config/config');
const localStorage = require('localStorage')

module.exports.checkAuthentication = (req,res)=>{
    if(localStorage.getItem('nodeToken')){
        verifyToken(req,res)
    }
    else{
        generateNewToken(req,res)
    }
}

const generateNewToken = (req,res)=>{
    const token = webtoken.sign({token: req.body.inputUsername},SECRET)
    localStorage.setItem({'nodeToken':token})
}