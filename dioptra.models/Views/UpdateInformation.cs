using System;
using System.Collections.Generic;
using System.Text;

namespace Dioptra.Models.Views
{
    public class UpdateInformation
    {
        public string NodeId { get; set; }
        public string NodeName { get; set; }
        public string UserId { get; set; }
        public string UserDisplayName { get; set; }
        public string UnitId { get; set; }
        public string UnitDisplayName { get; set; }
        public DateTime LastUpdate { get; set; }
    }
}
