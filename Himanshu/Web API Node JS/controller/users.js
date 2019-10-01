const fs = require("fs");
const path = require("path");

const { BaseController } = require("./BaseController");

class Users extends BaseController {
   constructor() {
      super();
      this.users = [];
   }

   async getUsers(req, res) {
      super.read(req,res);
   }

   async createUser(req, res) {
      super.create(req,res)
   }

   async updateUser(req, res) {
      super.update(req,res);
   }

   async deleteUser(req, res) {
      try {
      } 
      catch (err) {
         console.error(err);
      }
   }
}

exports.Users = Users;

function readFile() {
   const dbPath = path.join(__dirname, "../db", "users.json");
   return fs.promises.readFile(dbPath, "utf-8");
}

function writeFile(data) {
   const dbPath = path.join(__dirname, "../db", "users.json");
   return fs.promises.writeFile(dbPath, JSON.stringify(data));
}