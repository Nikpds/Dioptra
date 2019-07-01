using Dioptra.Api.Authorization;
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
    public class UserService : IUserService
    {
        private IDataContext _ctx;

        public UserService(IDataContext ctx)
        {
            _ctx = ctx;
        }

        public async void AddFailAttempt(User user)
        {
            if (user.AccessFailedCount <= 4)
            {
                user.AccessFailedCount = user.AccessFailedCount + 1;
            }
            else
            {
                user.AccessFailedCount = 0;
                user.LockoutEndDateUtc = DateTime.UtcNow.AddHours(1);
            }
            await _ctx.Users.Update
                (user);
        }

        public async Task<bool> Delete(User entity)
        {
            var success = await _ctx.Users.Delete(entity);

            return success;
        }

        public async Task<IEnumerable<User>> GetAll()
        {
            var users = await _ctx.Users.GetAll();

            return users;
        }

        public async Task<User> GetById(string id)
        {
            var user = await _ctx.Users.GetById(id);
            user.PasswordHash = null;
            return user;
        }

        public async Task<User> GetByUsername(string username)
        {
            User user = (await _ctx.Users.Get(x => x.UserName == username)).SingleOrDefault();
            return user;
        }

        public async Task<User> Insert(User entity)
        {
            entity.PasswordHash = AuthManager.HashPassword(entity.PasswordHash);
            var user = await _ctx.Users.Insert(entity);

            return user;
        }
        /// <summary>
        /// Checks if the user is lockedout by comparing the now date with 
        /// lockedout date. The dt variable is used in order to skip the error
        /// for nullable date  at user.LockoutEndDateUtc
        /// </summary>
        /// <param name="user"></param>
        /// <returns>True if he is lockedout. False if not</returns>
        public bool IsUserLockedOut(User user)
        {
            var dt = user.LockoutEndDateUtc ?? DateTime.UtcNow;
            if (user.LockoutEndDateUtc != null)
            {
                return DateTime.Compare(dt, DateTime.UtcNow) > 0;
            }
            return false;
        }

        public PagedData<User> PagedUsers(int page, int pageSize)
        {
            PagedData<User> result = new PagedData<User>();
            var query = _ctx.Users.GetQueryForAll();

            result.TotalRows = query.Count();
            result.Rows = query
               .Skip((page - 1) * pageSize)
               .Take(pageSize)
               .ToList();
            result.Page = page;
            result.PageSize = pageSize;

            return result;
        }

        public async void ResetFailAttempts(User user)
        {
            user.AccessFailedCount = 0;
            user.LockoutEndDateUtc = DateTime.UtcNow.AddHours(1);
            await _ctx.Users.Update(user);
        }

        public async Task<User> Update(string id, User entity)
        {
            var original = await _ctx.Users.GetById(id);
            original.FullName = entity.FullName;
            original.UserName = entity.UserName;
            original.Phone = entity.Phone;
            original.Email = entity.Email;

            if (!string.IsNullOrEmpty(entity.PasswordHash))
            {
                original.PasswordHash = AuthManager.HashPassword(entity.PasswordHash);
            }

            var user = await _ctx.Users.Update(original);
            user.PasswordHash = null;
            return user;
        }
    }
}
