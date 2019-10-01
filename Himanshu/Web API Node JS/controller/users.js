const { BaseController } = require("./BaseController");

class Users extends BaseController {
   constructor() {
     super();
     this.users = [];
   }
}

exports.Users = Users