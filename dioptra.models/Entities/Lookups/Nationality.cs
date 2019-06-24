using System;
using System.Collections.Generic;
using System.Text;
using Dioptra.Models.Common;
namespace Dioptra.Models.Entities.Lookups
{
    public class Nationality : NameEntity
    {
        public string ShortName { get; set; }
        public Lookup FoF { get; set; }
    }
}
