using Dioptra.Admin.Api.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Dioptra.Admin.Api.Authorization
{
    public interface IAuthenticationProvider
    {
        JwtSecurityToken CreateToken(User user);
    }

    public class AuthenticationProvider : IAuthenticationProvider
    {
        public readonly IConfiguration config;

        public AuthenticationProvider(IConfiguration _config)
        {
            config = _config;
        }

        public JwtSecurityToken CreateToken(User user)
        {
            var claims = new List<Claim>();

            claims.Add(new Claim("id", user.Id));
            claims.Add(new Claim("name", user.Name));
            claims.Add(new Claim("username", user.UserName));

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["Tokens:Key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            int duration = 60;
            Int32.TryParse(config["Tokens:Duration"], out duration);
            var token = new JwtSecurityToken(
              config["Tokens:Issuer"],
              config["Tokens:Issuer"],
              claims,
              expires: DateTime.UtcNow.AddMinutes(duration),
              signingCredentials: creds);

            return token;
        }



    }
}
