using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using auth.Models;

namespace auth.Controllers
{
    [Produces("application/json")]
    [Route("signup")]
    public class ValuesController : Controller
    {
        auth_databaseContext db = new auth_databaseContext();
        
        // POST signup
        //[EnableCors("AllowedOrigins")]
        [HttpPost]
        public bool Post([FromBody] UserData val)
        {
            var entity = db.UserData.Select(s => new UserData() { Username = s.Username, Email = s.Email }).Where(s => s.Email == val.Email).ToList();
            if(entity.Count() == 0)
            {
                db.UserData.Add(val);
                db.SaveChanges();
                return true;
            }
            else
            {
                return false;
            }
            
        }

       
    }
}
