using System;
using System.Linq;
using System.Threading.Tasks;
using Dioptra.Admin.Api.Authorization;
using Dioptra.Admin.Models;
using Dioptra.Admin.Api.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Dioptra.Admin.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private DataContext _ctx;
        public UserController(DataContext ctx)
        {
            _ctx = ctx;
        }

        [HttpGet("all")]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var result = await _ctx.Users.GetAll();
                return Ok(result);

            }
            catch (Exception exc)
            {
                return BadRequest("Παρουσιάστηκε κάποιο σφάλμα. " + exc.Message);
            }
        }
        [HttpPost("")]
        public async Task<IActionResult> Insert([FromBody] User user)
        {
            try
            {
                user.PasswordHash = AuthManager.HashPassword(user.PasswordHash);
                var result = await _ctx.Users.Insert(user);
                result.PasswordHash = null;
                return Ok(result);

            }
            catch (Exception exc)
            {
                //_log.Error(exc, "Exception creating token for user {@user}", model.Username);
                return BadRequest("Παρουσιάστηκε κάποιο σφάλμα. " + exc.Message);
            }
        }

        [HttpPut("")]
        public async Task<IActionResult> Update([FromBody] User user)
        {
            try
            {
                var original = await _ctx.Users.GetById(user.Id);
                original.Role = user.Role;
                original.IsActive = user.IsActive;
                original.Fullname = user.Fullname;
                original.Username = user.Username;
                var result = await _ctx.Users.Update(original);
                result.PasswordHash = null;
                return Ok(result);

            }
            catch (Exception exc)
            {
                //_log.Error(exc, "Exception creating token for user {@user}", model.Username);
                return BadRequest("Παρουσιάστηκε κάποιο σφάλμα. " + exc.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            try
            {
                var original = await _ctx.Users.GetById(id);

                var result = await _ctx.Users.Delete(original);

                return Ok(result);

            }
            catch (Exception exc)
            {
                //_log.Error(exc, "Exception creating token for user {@user}", model.Username);
                return BadRequest("Παρουσιάστηκε κάποιο σφάλμα. " + exc.Message);
            }
        }

        [HttpPost("{userId}")]
        public async Task<IActionResult> ResetPassword(string id)
        {
            try
            {
                var original = await _ctx.Users.GetById(id);
                original.PasswordHash = AuthManager.HashPassword("123456");
                var result = await _ctx.Users.Update(original);

                return Ok(true);

            }
            catch (Exception exc)
            {
                //_log.Error(exc, "Exception creating token for user {@user}", model.Username);
                return BadRequest("Παρουσιάστηκε κάποιο σφάλμα. " + exc.Message);
            }
        }

        [HttpPost("{oldpassword}/{newpassword}")]
        public async Task<IActionResult> ChangePassword(string oldpassword, string newpassword)
        {
            try
            {
                var userId = User.Claims.First(x => x.Type == "Id").Value;
                var original = await _ctx.Users.GetById(userId);
                original.PasswordHash = AuthManager.HashPassword("123456");
                var result = await _ctx.Users.Update(original);

                return Ok(true);

            }
            catch (Exception exc)
            {
                //_log.Error(exc, "Exception creating token for user {@user}", model.Username);
                return BadRequest("Παρουσιάστηκε κάποιο σφάλμα. " + exc.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(string id)
        {
            try
            {
                var result = await _ctx.Users.GetById(id);
                result.PasswordHash = null;
                return Ok(result);

            }
            catch (Exception exc)
            {
                //_log.Error(exc, "Exception creating token for user {@user}", model.Username);
                return BadRequest("Παρουσιάστηκε κάποιο σφάλμα. " + exc.Message);
            }
        }

       


    }
}