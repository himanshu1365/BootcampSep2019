const { objectParser } = require('../utils/utils')

const obj = objectParser(process.argv)

module.exports = {
    PORT: process.env.PORT || obj.PORT || 9000,
    HOST: process.env.HOST || obj.HOST || "0.0.0.0",
    baseURI: process.env.baseURI || obj.baseURI || "/api",
    SECRET: "eyJhbGciOi",
    database: {
        DB_USER: process.env.DB_USER || obj.DB_USER || "admin",
        DB_PASSWORD: process.env.DB_PASSWORD || obj.DB_PASSWORD || "root"
    },
    basePath : `C:\Users\himanshu.chauhan\Desktop\BootcampSep2019\Himanshu\Web API Node JS\With-Express-JS\views`
}