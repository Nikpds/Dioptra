using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dioptra.Api.Shared.Domain
{
    public abstract class Entity
    {
        string _Id;
        DateTime _Created;
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
