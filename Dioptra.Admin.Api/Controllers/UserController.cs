using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;
using Dioptra.Admin.Api.Authorization;
using Dioptra.Admin.Api.Models;
using Dioptra.Admin.Api.Models.Views;
using Dioptra.Admin.Api.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Dioptra.Admin.Api.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]
    public class UserController : ControllerBase
    {
        private DataContext _ctx;
        private readonly IAuthenticationProvider _auth;
        public UserController(DataContext ctx, IAuthenticationProvider auth)
        {
            _ctx = ctx;
            _auth = auth;
        }

        [AllowAnonymous]
        [HttpPost("token")]
        public async Task<IActionResult> Token([FromBody] LoginView model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var user = (await _ctx.Users.Get(x => x.UserName == model.Username)).SingleOrDefault();
                    if (user != null)
                    {
                        if (AuthManager.VerifyHashedPassword(user.PasswordHash, model.Password))
                        {
                            var userToken = _auth.CreateToken(user);
                            return Ok(new { token = new JwtSecurityTokenHandler().WriteToken(userToken) });
                        }
                        else
                        {
                            return BadRequest(new { error = "Λάθος όνομα χρήστη ή κωδικός" });
                        }
                    }
                    else
                    {
                        return BadRequest("Λάθος όνομα χρήστη ή κωδικός");
                    }
                }
                else
                {
                    return BadRequest("Λάθος όνομα χρήστη ή κωδικός");
                }

            }
            catch (Exception exc)
            {
                //_log.Error(exc, "Exception creating token for user {@user}", model.Username);
                return BadRequest("Παρουσιάστηκε κάποιο σφάλμα");
            }
        }

        [HttpPost("")]
        public async Task<IActionResult> Insert([FromBody] User user)
        {
            try
            {
                user.PasswordHash = AuthManager.HashPassword(user.PasswordHash);
                var result = await _ctx.Users.Insert(user);
                return Ok(result);

            }
            catch (Exception exc)
            {
                //_log.Error(exc, "Exception creating token for user {@user}", model.Username);
                return BadRequest("Παρουσιάστηκε κάποιο σφάλμα");
            }
        }

        [HttpPut("")]
        public async Task<IActionResult> Update([FromBody] User user)
        {
            try
            {
                var original = await _ctx.Users.GetById(user.Id);
                original.Name = user.Name;
                original.LastName = user.LastName;
                original.UserName = user.UserName;
                var result = await _ctx.Users.Update(original);

                return Ok(result);

            }
            catch (Exception exc)
            {
                //_log.Error(exc, "Exception creating token for user {@user}", model.Username);
                return BadRequest("Παρουσιάστηκε κάποιο σφάλμα");
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
                return BadRequest("Παρουσιάστηκε κάποιο σφάλμα");
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
                return BadRequest("Παρουσιάστηκε κάποιο σφάλμα");
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
                return BadRequest("Παρουσιάστηκε κάποιο σφάλμα");
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(string id)
        {
            try
            {
                var result = await _ctx.Users.GetById(id);
                return Ok(result);

            }
            catch (Exception exc)
            {
                //_log.Error(exc, "Exception creating token for user {@user}", model.Username);
                return BadRequest("Παρουσιάστηκε κάποιο σφάλμα");
            }
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
                //_log.Error(exc, "Exception creating token for user {@user}", model.Username);
                return BadRequest("Παρουσιάστηκε κάποιο σφάλμα");
            }
        }


    }
}