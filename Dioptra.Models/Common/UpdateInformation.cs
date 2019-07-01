using System;

namespace Dioptra.Models.Common
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
