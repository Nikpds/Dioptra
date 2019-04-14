using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.IdGenerators;
using System;

namespace Domain.Models.Entities
{
    public abstract class Entity
    {
        [BsonId(IdGenerator = typeof(StringObjectIdGenerator))]
        private string _Id;
        private DateTime _Created;

        protected Entity()
        {
            _Created = DateTime.UtcNow;
        }

        [BsonIgnore]
        public virtual string Id
        {
            get { return _Id; }
            protected set
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


        public bool IsTransient()
        {
            return Id == default(String);
        }

        public abstract Reference AsReference();
    }
}
