using Dioptra.Models.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Dioptra.Mongo.Interfaces
{
    public interface IDbCollection<T> where T : Entity
    {
        MongoDbRepository<T> Collection { get; set; }
    }
}
