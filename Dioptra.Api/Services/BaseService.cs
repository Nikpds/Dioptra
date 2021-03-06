﻿using Dioptra.Api.Services.Interfaces;
using Dioptra.Mongo;
using System;
using System.Collections.Generic;
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

        public Task<bool> Delete(T entity)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<T>> GetAll()
        {
            throw new NotImplementedException();
        }

        public Task<T> GetById(string id)
        {
            throw new NotImplementedException();
        }

        public Task<T> Insert(T entity)
        {

            throw new NotImplementedException();
        }

        public Task<T> Update(string id, T entity)
        {
            throw new NotImplementedException();
        }
    }
}
