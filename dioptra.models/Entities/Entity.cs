using Dioptra.Models.Common;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.IdGenerators;
using System;

namespace Dioptra.Models.Entities
{
    public abstract class Entity
    {
        [BsonId(IdGenerator = typeof(StringObjectIdGenerator))]
        private string _Id { get; set; }
        private DateTime _Created;
        protected virtual object Actual => this;
        protected Entity()
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
        public virtual UpdateInformation UpdateInfo { get; set; }

        public override bool Equals(object obj)
        {
            var other = obj as Entity;

            if (other is null)
                return false;

            if (ReferenceEquals(this, other))
                return true;

            if (Actual.GetType() != other.Actual.GetType())
                return false;

            if (string.IsNullOrEmpty(Id) || string.IsNullOrEmpty(other.Id))
                return false;

            return Id == other.Id;
        }

        public static bool operator ==(Entity a, Entity b)
        {
            if (a is null && b is null)
                return true;

            if (a is null || b is null)
                return false;

            return a.Equals(b);
        }

        public static bool operator !=(Entity a, Entity b)
        {
            return !(a == b);
        }

        public override int GetHashCode()
        {
            return (Actual.GetType().ToString() + Id).GetHashCode();
        }
    }
}
