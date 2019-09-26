using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using auth.Models;
using auth.CustomModels;


namespace auth.Controllers
{
    [Produces("application/json")]
    [Route("signup")]
    public class ValuesController : Controller
    {
        auth_databaseContext db = new auth_databaseContext();

        //// POST signup
        [EnableCors("ApiCorsPolicy")]
        [HttpPost]
        public bool Post([FromBody] CustomJoinedDetails val)
        {
            var entity = db.UserDetails.Where(s => s.Email == val.Email).ToList();
            if (entity.Count() == 0)
            {
                var hashedPassword = BCrypt.Net.BCrypt.HashPassword(val.Password);
                UserPassword userPassword = new UserPassword
                {
                    Username = val.Username,
                    Password = hashedPassword
                };
                UserDetails userDetails = new UserDetails
                {
                    Email = val.Email,
                    UsernameNavigation = userPassword
                };
                db.UserDetails.Add(userDetails);
                db.SaveChanges();
                return true;
            }
            return false;
        }
    }
}
