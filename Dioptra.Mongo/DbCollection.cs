using Dioptra.Models.Entities;
using Dioptra.Mongo.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Dioptra.Mongo
{
    public class DbCollection<T> : IDbCollection<T> where T : Entity
    {
        public MongoDbRepository<T> Collection { get; set; }

        public DbCollection(DataContext ctx)
        {
            Collection = new MongoDbRepository<T>(ctx.Database);
        }

    }
}
