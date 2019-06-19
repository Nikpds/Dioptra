using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dioptra.Admin.Api.Models;
using Dioptra.Admin.Api.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

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

        [HttpGet("logs/{id}")]
        public async Task<IActionResult> GetLogs(string id)
        {
            try
            {
                var server = await _ctx.Servers.GetById(id);

                if(server == null)
                {
                    //TODO RETURN
                    return BadRequest();
                }
                List<LogEntry> result = new List<LogEntry>();
                string auth = "";
                if (!string.IsNullOrEmpty(server.DbUsername))
                {
                    auth = string.Join("", server.DbUsername, ":", server.DbPassword, "@");
                }
                var db = new MongoClient("mongodb://" + auth + server.Ip + ":27017");
                var data = db.GetDatabase("ThalesDb");
                var collection = data.GetCollection<LogEntry>("LogEntry");
                var r = collection.Find(x => true).SortByDescending(x => x.EntryTime).Limit(50);
                result = r.ToListAsync().Result;
                return Ok(result);

            }
            catch (Exception exc)
            {
                return BadRequest("Παρουσιάστηκε κάποιο σφάλμα. " + exc.Message);
            }
        }
    }
}