using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dioptra.Admin.Api.Models
{
    public class User : BaseEntity
    {
        public string Fullname { get; set; }
        public bool IsActive { get; set; }
        public UserRole Role { get; set; }
        public string Username { get; set; }
        public string PasswordHash { get; set; }

    }

    public enum UserRole
    {
        Admin,
        HelpDesk
    }
}
