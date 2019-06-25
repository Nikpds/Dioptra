using Dioptra.Models.Entities;
using Dioptra.Mongo;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Dioptra.Api.Services.Interfaces
{
    public interface IBaseService<T> where T : Entity
    {
        Task<IEnumerable<T>> GetAll();
        Task<T> GetById(string id);
        Task<T> Insert(T entity);
        Task<T> Update(string id, T entity);
        Task<Boolean> Delete(T entity);
    }
}
