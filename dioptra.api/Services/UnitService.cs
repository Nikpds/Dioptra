using Dioptra.Api.Services.Interfaces;
using Dioptra.Models.Entities;
using Dioptra.Models.Views;
using Dioptra.Mongo.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dioptra.Api.Services
{
    public class UnitService : IUnitService
    {
        private IDataContext _ctx;

        public UnitService(IDataContext ctx)
        {
            _ctx = ctx;
        }

        public Task<bool> Delete(Unit entity)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Unit>> GetAll()
        {
            throw new NotImplementedException();
        }

        public Task<Unit> GetById(string id)
        {
            throw new NotImplementedException();
        }

        public Task<Unit> Insert(Unit entity)
        {
            throw new NotImplementedException();
        }

        public PagedData<Unit> PagedUnits(int page, int pageSize)
        {
            PagedData<Unit> result = new PagedData<Unit>();
            var query = _ctx.Units.GetQueryForAll();

            result.TotalRows = query.Count();
            result.Rows = query
               .Skip((page - 1) * pageSize)
               .Take(pageSize)
               .ToList();
            result.Page = page;
            result.PageSize = pageSize;

            return result;
        }

        public Task<Unit> Update(string id, Unit entity)
        {
            throw new NotImplementedException();
        }
    }
}
