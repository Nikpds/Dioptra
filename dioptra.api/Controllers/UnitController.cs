using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dioptra.Api.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Dioptra.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UnitController : ControllerBase
    {
        private IUnitService _srv;
        public UnitController(IUnitService srv)
        {
            _srv = srv;
        }

        [HttpGet("{page}/{pageSize}")]
        public IActionResult GetPagedAll(int page, int pageSize)
        {
            try
            {
                var result = _srv.PagedUnits(page, pageSize);

                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}