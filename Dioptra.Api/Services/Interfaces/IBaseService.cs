using System;
using System.Collections.Generic;

namespace Dioptra.Api.Services.Interfaces
{
    public interface IBaseService<T>
    {
        IEnumerable<T> GetAll();
        T GetById(string id);
        T Insert(T entity);
        T Update(T entity);
        Boolean Delete(T entity);
    }
}
