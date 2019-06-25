using Dioptra.Api.Services.Interfaces;
using Dioptra.Models.Entities;
using Dioptra.Models.Views;
using Dioptra.Mongo;
using Dioptra.Mongo.Interfaces;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dioptra.Api.Services
{
    public static class BaseService
    {
        public static async Task<bool> Delete<T>(T entity, IMongoDbRepository<T> repository) where T : NameEntity
        {
            var result = await repository.Delete(entity);

            return result;
        }

        public static async Task<IEnumerable<T>> GetAll<T>(IMongoDbRepository<T> repository) where T : NameEntity
        {
            var result = await repository.GetAll();

            return result;
        }

        public static PagedData<T> GetPagedData<T>(int page, int pageSize, IMongoDbRepository<T> repository) where T : NameEntity
        {
            PagedData<T> result = new PagedData<T>();
            var query = repository.GetQueryForAll();

            result.TotalRows = query.Count();

            result.Rows = query
               .Skip((page - 1) * pageSize)
               .Take(pageSize)
               .ToList();
            result.Page = page;

            result.PageSize = pageSize;

            return result;
        }

        public static async Task<T> GetById<T>(string id, IMongoDbRepository<T> repository) where T : NameEntity
        {
            var result = await repository.GetById(id);

            return result;
        }

        public static async Task<T> Insert<T>(T entity, IMongoDbRepository<T> repository) where T : NameEntity
        {
            var result = await repository.Insert(entity);

            return result;
        }

        public static async Task<T> Update<T>(T entity, IMongoDbRepository<T> repository) where T : NameEntity
        {
            var result = await repository.Update(entity);

            return result;
        }
    }
}
