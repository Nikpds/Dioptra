using Dioptra.Api.Services.Interfaces;
using MongoContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dioptra.Api.Services
{
    public class BaseService<T> : IBaseService<T>
    {
        private DataContext _ctx;
        public BaseService(DataContext ctx)
        {
            _ctx = ctx;
        }

        public bool Delete(T entity)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<T> GetAll()
        {
            throw new NotImplementedException();
        }

        public T GetById(string id)
        {
            throw new NotImplementedException();
        }

        public T Insert(T entity)
        {
            throw new NotImplementedException();
        }

        public T Update(T entity)
        {
            throw new NotImplementedException();
        }
    }
}
