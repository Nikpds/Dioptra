using Dioptra.Models.Entities;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Dioptra.Api.Authorization
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
            claims.Add(new Claim("fullname", user.FullName));
            claims.Add(new Claim("username", user.UserName));

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["Jwt:Key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
                     
            var token = new JwtSecurityToken(
              config["Jwt:Issuer"],
              config["Jwt:Issuer"],
              claims,
              expires: DateTime.UtcNow.AddHours(8),
              signingCredentials: creds);

            return token;
        }



    }
}
