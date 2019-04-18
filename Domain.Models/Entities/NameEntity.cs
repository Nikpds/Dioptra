using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Models.Entities
{
    public class NameEntity : Entity
    {
        public string Name { get; set; }
        public override Reference AsReference()
        {
            throw new NotImplementedException();
        }
    }
}
