using Dioptra.Models.Entities;
using Dioptra.Models.Views;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Dioptra.Api.Services.Interfaces
{
    public interface IUserService : IBaseService<User>
    {
        void AddFailAttempt(User user);

        void ResetFailAttempts(User user);

        bool IsUserLockedOut(User user);

        Task<User> GetByUsername(string username);

        PagedData<User> PagedUsers(int page, int pageSize);
    }
}
