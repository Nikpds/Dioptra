using Dioptra.Api.Services.Interfaces;
using Dioptra.Models.Entities;
using Dioptra.Mongo;
using Dioptra.Mongo.Interfaces;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Dioptra.Api.Services
{
    public class BaseService<T> : IBaseService<T> where T : Entity
    {
        private MongoDbRepository<T> _ctx;

        public BaseService(IDbCollection<T> ctx)
        {
            _ctx = ctx.Collection;
        }

        public async Task<bool> Delete(T entity)
        {
            var result = await _ctx.Delete(entity);

            return result;
        }

        public async Task<IEnumerable<T>> GetAll()
        {
            var result = await _ctx.GetAll();

            return result;
        }

        public async Task<T> GetById(string id)
        {
            var result = await _ctx.GetById(id);

            return result;
        }

        public async Task<T> Insert(T entity)
        {
            var result = await _ctx.Insert(entity);

            return result;
        }

        public async Task<T> Update(string id, T entity)
        {
            var result = await _ctx.Update(entity);

            return result;
        }
    }
}
