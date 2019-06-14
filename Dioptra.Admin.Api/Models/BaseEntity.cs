using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.IdGenerators;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dioptra.Admin.Api.Models
{
    public class BaseEntity
    {
        [BsonId(IdGenerator = typeof(StringObjectIdGenerator))]
        private string _Id;
        private DateTime _Created;

        protected BaseEntity()
        {
            _Created = DateTime.UtcNow;
        }

        [BsonIgnore]
        public virtual string Id
        {
            get { return _Id; }
            set
            {
                _Id = value;
            }
        }

        public virtual DateTime Created
        {
            get { return _Created; }
            protected set
            {
                _Created = value;
            }
        }
    }
}
