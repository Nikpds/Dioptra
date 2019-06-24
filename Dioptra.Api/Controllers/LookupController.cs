﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dioptra.Api.Services.Interfaces;
using Dioptra.Models.Entities.Lookups;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Dioptra.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LookupController : ControllerBase
    {
        private IBaseService<Nationality> _srv;
        public LookupController()
        {

        }

        #region Nationality
        [HttpGet("nationality")]
        public async Task<IActionResult> GetNationalities()
        {
            IEnumerable<Nationality> types = await _srv.GetAll();

            return Ok(types);
        }

        [HttpGet("nationality/{id}")]
        public async Task<IActionResult> GetNationalityById(string id)
        {
            Nationality type = await _srv.GetById(id);

            return Ok(type);
        }

        [HttpPost("nationality")]
        public async Task<IActionResult> CreateNationality([FromBody] Nationality grfltype)
        {

            Nationality type = await _srv.Insert(grfltype);

            return Ok(type);
        }

        [HttpPut("nationality/{id}")]
        public async Task<IActionResult> UpdateNationality([FromBody] Nationality grfltype, string id)
        {
            Nationality original = await _srv.GetById(id);
            // To do change vales befor update
            // example original.name = grfltype.name;
            Nationality type = await _srv.Update(id, grfltype);

            return Ok(type);
        }

        [HttpDelete("nationality/{id}")]
        public async Task<IActionResult> DeleteNationality(string id)
        {
            Nationality original = await _srv.GetById(id);
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