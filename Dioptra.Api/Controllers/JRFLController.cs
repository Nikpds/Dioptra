using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dioptra.Api.Services.Interfaces;
using Dioptra.Api.Shared.Domain;
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

        [HttpGet("")]
        public IActionResult GetJRFLTypes()
        {
            IEnumerable<JRFLType> types = _srv.GetAll();

            return Ok(types);
        }

        [HttpGet("{id}")]
        public IActionResult GetJRFLType(string id)
        {
            JRFLType type = _srv.GetById(id);

            return Ok(type);
        }

        [HttpPost("{id}")]
        public IActionResult CreateJRFLType([FromBody] JRFLType grfltype)
        {

            JRFLType type = _srv.Insert(grfltype);

            return Ok(type);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateJRFLType([FromBody] JRFLType grfltype, string id)
        {
            JRFLType original = _srv.GetById(id);
            // To do change vales befor update
            // example original.name = grfltype.name;
            JRFLType type = _srv.Update(grfltype);

            return Ok(type);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteJRFLType(string id)
        {
            JRFLType original = _srv.GetById(id);
            if (original == null)
            {
                return BadRequest();
            }
            bool success = _srv.Delete(original);

            return Ok(success);
        }
        #endregion
    }
}