using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dioptra.Api.Services.Interfaces;
using Dioptra.Models.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Dioptra.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private IUserService _srv;
        public UserController(IUserService srv)
        {
            _srv = srv;
        }

        [HttpGet("")]
        public async Task<IActionResult> GetAll()
        {
            IEnumerable<User> users = await _srv.GetAll();

            return Ok(users);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(string id)
        {
            User result = await _srv.GetById(id);

            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] User user)
        {

            User result = await _srv.Insert(user);

            return Ok(result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update([FromBody] User user, string id)
        {
            User original = await _srv.GetById(id);
            // TODO change values before update
            // example original.name = user.name;
            User result = await _srv.Update(id, user);

            return Ok(result);
        }

        [HttpDelete("type/{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            User original = await _srv.GetById(id);
            if (original == null)
            {
                return BadRequest();
            }
            bool success = await _srv.Delete(original);

            return Ok(success);
        }
    }
}