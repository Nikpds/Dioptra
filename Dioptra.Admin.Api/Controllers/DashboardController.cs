using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.NetworkInformation;
using System.Threading.Tasks;
using Dioptra.Admin.Api.Models;
using Dioptra.Admin.Api.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Dioptra.Admin.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DashboardController : ControllerBase
    {
        private DataContext _ctx;
        public DashboardController(DataContext ctx)
        {
            _ctx = ctx;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetServerInfo(string id)
        {
            try
            {
                var server = await _ctx.Servers.GetById(id);
                if (!server.PingTestActive)
                {
                    return Ok(new { map = false, server = false });
                }
                var ping = new Ping();
                var serverPingResponse = await ping.SendPingAsync(server.Ip);
                var mapPingResponse = await ping.SendPingAsync(server.MapIp);


                return Ok(new
                {
                    map = mapPingResponse.Status == IPStatus.Success,
                    server = serverPingResponse.Status == IPStatus.Success
                });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}