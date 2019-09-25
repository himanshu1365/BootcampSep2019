using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using auth.Models;

namespace auth.Controllers
{
    [Produces("application/json")]
    [Route("login")]
    public class LoginController : Controller
    {
        auth_databaseContext db = new auth_databaseContext();
        
        // POST: login
        [HttpPost]
        public bool Post([FromBody]UserPassword value)
        {
            var entity = db.UserPassword.Where(s => s.Username == value.Username && s.Password == value.Password).ToList();
            if(entity.Count() != 0)
            {
                return true;
            }
            else
            {
                return false;
            }

        }
        
    }
}
