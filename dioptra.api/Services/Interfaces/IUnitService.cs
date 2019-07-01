using Dioptra.Models.Entities;
using Dioptra.Models.Views;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dioptra.Api.Services.Interfaces
{
    public interface IUnitService : IBaseService<Unit>
    {
        PagedData<Unit> PagedUnits(int page, int pageSize);
    }
}
