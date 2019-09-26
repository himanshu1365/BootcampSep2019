using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using auth.Models;
using Microsoft.Extensions.Primitives;

namespace auth.Controllers
{
    [Produces("application/json")]
    [Route("login")]
    public class LoginController : Controller
    {
        auth_databaseContext db = new auth_databaseContext();
        // POST: login
        [HttpPost]
        public bool Post([FromBody]dynamic value)
        {
            StringValues userValue;
            StringValues passwordValue;
            Request.Headers.TryGetValue("Username", out userValue);
            Request.Headers.TryGetValue("Password", out passwordValue);

            String username = userValue.FirstOrDefault();
            String password = passwordValue.FirstOrDefault();


            var entity = db.UserPassword.Where(s => s.Username == username).FirstOrDefault();

            if (entity.Username != null)
            {
                bool validPassword = BCrypt.Net.BCrypt.Verify(password, entity.Password);
                if (validPassword)
                {
                    return true;
                }
                return false;
            }
            else
            {
                return false;
            }

        }
        
    }
}
