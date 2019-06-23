using System;

namespace Dioptra.Models.Entities
{
    public class User : Entity
    {
        public string FullName { get; set; }
        public string UserName { get; set; }
        public string PasswordHash { get; set; }

        public int AccessFailedCount { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public bool IsOnReset { get; set; }
        public DateTime? LockoutEndDateUtc { get; set; }

    }
}
