using System;
using System.IdentityModel.Tokens.Jwt;
using System.Threading.Tasks;
using Dioptra.Api.Authorization;
using Dioptra.Api.Services.Interfaces;
using Dioptra.Models.Views;
using Microsoft.AspNetCore.Mvc;

namespace Dioptra.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IUserService _srv;
        private readonly IAuthenticationProvider _auth;
        public AuthController(IUserService srv, IAuthenticationProvider auth)
        {
            _srv = srv;
            _auth = auth;
        }
        [HttpPost("token")]
        public async Task<IActionResult> Token([FromBody] LoginView model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var user = await _srv.GetByUsername(model.Username);
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
                return BadRequest("Σφάλμα στην επιβεβαίωση στοιχείων");
            }
        }

        [HttpGet("token")]
        public async Task<IActionResult> Test()
        {
            return Ok("asdasdasdasds");
        }

    }
}