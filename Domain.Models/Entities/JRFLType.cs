using System;

namespace Domain.Models.Entities
{
    public class JRFLType : Entity
    {

        public JRFLType()
        {
            Created = DateTime.UtcNow;
        }

        public override Reference AsReference()
        {
            throw new NotImplementedException();
        }
    }
}
