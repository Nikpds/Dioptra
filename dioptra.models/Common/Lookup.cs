using System;
using System.Collections.Generic;
using System.Text;

namespace Dioptra.Models.Common
{
    public class Lookup : IEquatable<Lookup>
    {
        public string Id { get; set; }
        public string Representation { get; set; }

        public bool Equals(Lookup other)
        {
            if (other == null)
            {
                return false;
            }
            if (this.Id == other.Id)
            {
                return true;
            }
            return false;
        }

        public override int GetHashCode()
        {
            return this.Id.GetHashCode();
        }

        public override bool Equals(object obj)
        {
            if (obj == null)
            {
                return false;
            }
            Lookup other = obj as Lookup;
            if (other == null)
            {
                return false;
            }
            return this.Id.Equals(other.Id);
        }

        public static bool operator ==(Lookup l1, Lookup l2)
        {
            if ((l1 is null) || (l2 is null))
            {
                return Object.Equals(l1, l2);
            }
            return l1.Equals(l2);
        }

        public static bool operator !=(Lookup l1, Lookup l2)
        {
            if ((l1 == null) || (l2 == null))
            {
                return !Object.Equals(l1, l2);
            }
            return !(l1.Equals(l2));
        }
    }
}
