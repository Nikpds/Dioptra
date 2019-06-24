using Dioptra.Models.Entities;
using Dioptra.Mongo;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Dioptra.Api.Services.Interfaces
{
    public interface IBaseService<T> where T : Entity
    {
        Task<IEnumerable<T>> GetAll(IMongoDbRepository<T> repository);
        Task<T> GetById(string id, IMongoDbRepository<T> repository);
        Task<T> Insert(T entity, IMongoDbRepository<T> repository);
        Task<T> Update(string id, T entity, IMongoDbRepository<T> repository);
        Task<Boolean> Delete(T entity, IMongoDbRepository<T> repository);
    }
}
