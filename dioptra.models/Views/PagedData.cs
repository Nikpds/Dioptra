using System;
using System.Collections.Generic;
using System.Text;

namespace Dioptra.Models.Views
{
    public class PagedData<T>
    {
        public int TotalRows { get; set; }
        public int Page { get; set; }
        public int PageSize { get; set; }
        public List<T> Rows { get; set; }

        public PagedData()
        {
            Rows = new List<T>();
        }
    }
}
