using System;

namespace Dioptra.Models.Entities
{
    public class User : Entity
    {
        public string Name { get; set; }
        public string LastName { get; set; }
        public string UserName { get; set; }
        public string PasswordHash { get; set; }

        public int AccessFailedCount { get; set; }
        public bool IsFirstLogin { get; set; }
        public DateTime? LockoutEndDateUtc { get; set; }


        public override Reference AsReference()
        {
            throw new NotImplementedException();
        }
    }
}
