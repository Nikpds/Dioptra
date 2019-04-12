using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dioptra.Api.Shared.Domain
{
    public class Reference 
    {
        public string Id { get; set; }
        public string Name { get; set; }

        public Reference(string id, string name)
        {
            Id = id;
            Name = name;
        }
        
    }
}
