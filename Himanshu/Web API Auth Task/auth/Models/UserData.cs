using System;
using System.Collections.Generic;

namespace auth.Models
{
    public partial class UserData
    {
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string CollegeName { get; set; }
        public string CollegeId { get; set; }
    }
}
