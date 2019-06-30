using Dioptra.Models.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace Dioptra.Models.Entities
{
    public class Unit : Entity
    {
        public string Name { get; set; }
        public string NATOName { get; set; }
        //public Lookup MilitaryOrganization { get; set; }
        //public Lookup Nationality { get; set; }
        //public Lookup UnitType { get; set; }
        //public Lookup UnitMission { get; set; }
        //public Lookup SupportedBy { get; set; }
        public string AirportCode { get; set; }
        public string InfoSource { get; set; }
        public string Remarks { get; set; }
               
        public Location Location { get; set; }

        public Lookup Parent { get; set; }
    }
}
