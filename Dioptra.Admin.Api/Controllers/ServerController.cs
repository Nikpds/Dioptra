using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dioptra.Admin.Api.Models;
using Dioptra.Admin.Api.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Dioptra.Admin.Api.Controllers
{
    [Route("api/[controller]")]
    
    [ApiController]
    public class ServerController : ControllerBase
    {
        private DataContext _ctx;
        public ServerController(DataContext ctx)
        {
            _ctx = ctx;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(string id)
        {
            try
            {
                var result = await _ctx.Servers.GetById(id);
                return Ok(result);

            }
            catch (Exception exc)
            {
                return BadRequest("Παρουσιάστηκε κάποιο σφάλμα. " + exc.Message);
            }
        }

        [HttpGet("")]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var result = await _ctx.Servers.GetAll();
                return Ok(result);

            }
            catch (Exception exc)
            {
                return BadRequest("Παρουσιάστηκε κάποιο σφάλμα. " + exc.Message);
            }
        }

        [HttpPost("")]
        public async Task<IActionResult> Insert([FromBody] Server server)
        {
            try
            {
                var result = await _ctx.Servers.Insert(server);
                return Ok(result);
            }
            catch (Exception exc)
            {
                return BadRequest("Παρουσιάστηκε κάποιο σφάλμα. " + exc.Message);
            }
        }

        [HttpPut("")]
        public async Task<IActionResult> Update([FromBody] Server server)
        {
            try
            {
                var original = await _ctx.Servers.GetById(server.Id);
                original = server;
                var result = await _ctx.Servers.Update(original);

                return Ok(result);

            }
            catch (Exception exc)
            {

                return BadRequest("Παρουσιάστηκε κάποιο σφάλμα. " + exc.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            try
            {
                var result = await _ctx.Servers.Delete(id);

                return Ok(result);

            }
            catch (Exception exc)
            {
                return BadRequest("Παρουσιάστηκε κάποιο σφάλμα. " + exc.Message);
            }
        }
    }
}