using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dioptra.Api.Shared.Domain
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
