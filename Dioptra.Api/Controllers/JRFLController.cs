using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dioptra.Api.Services.Interfaces;
using Domain.Models.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Dioptra.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JRFLController : ControllerBase
    {
        private IBaseService<JRFLType> _srv;
        public JRFLController(IBaseService<JRFLType> srv)
        {
            _srv = srv;
        }
        #region JRFLType 

        [HttpGet("type")]
        public async Task<IActionResult> GetJRFLTypes()
        {
            IEnumerable<JRFLType> types = await _srv.GetAll();

            return Ok(types);
        }

        [HttpGet("type/{id}")]
        public async Task<IActionResult> GetJRFLType(string id)
        {
            JRFLType type = await _srv.GetById(id);

            return Ok(type);
        }

        [HttpPost("type")]
        public async Task<IActionResult> CreateJRFLType([FromBody] JRFLType grfltype)
        {

            JRFLType type = await _srv.Insert(grfltype);

            return Ok(type);
        }

        [HttpPut("type/{id}")]
        public async Task<IActionResult> UpdateJRFLType([FromBody] JRFLType grfltype, string id)
        {
            JRFLType original = await _srv.GetById(id);
            // To do change vales befor update
            // example original.name = grfltype.name;
            JRFLType type = await _srv.Update(id, grfltype);

            return Ok(type);
        }

        [HttpDelete("type/{id}")]
        public async Task<IActionResult> DeleteJRFLType(string id)
        {
            JRFLType original = await _srv.GetById(id);
            if (original == null)
            {
                return BadRequest();
            }
            bool success = await _srv.Delete(original);

            return Ok(success);
        }
        #endregion
    }
}