using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;
using Dioptra.Admin.Api.Authorization;
using Dioptra.Admin.Api.Models.Views;
using Dioptra.Admin.Api.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Dioptra.Admin.Api.Controllers
{
    [Route("api/token")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private DataContext _ctx;
        private readonly IAuthenticationProvider _auth;
        public AuthController(DataContext ctx, IAuthenticationProvider auth)
        {
            _ctx = ctx;
            _auth = auth;
        }

        [HttpPost]
        public async Task<IActionResult> Token([FromBody] LoginView model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var user = (await _ctx.Users.Get(x => x.Username == model.Username)).SingleOrDefault();
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
                return BadRequest("Παρουσιάστηκε κάποιο σφάλμα. " + exc.Message);
            }
        }
    }
}