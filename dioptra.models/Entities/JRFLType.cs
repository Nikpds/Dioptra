using System;

namespace Dioptra.Models.Entities
{
    public class JRFLType : NameEntity
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
