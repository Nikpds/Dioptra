using System.Collections.Generic;
using System.Threading.Tasks;
using Dioptra.Api.Services;
using Dioptra.Models.Entities.Lookups;
using Dioptra.Models.Views;
using Dioptra.Mongo;
using Microsoft.AspNetCore.Mvc;

namespace Dioptra.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LookupController : ControllerBase
    {
        private DataContext _ctx;
        public LookupController(DataContext ctx)
        {
            _ctx = ctx;
        }

        #region Nationality
        [HttpGet("nationality/{page}/{pageSize}")]
        public IActionResult GetPagedNationalities(int page, int pageSize)
        {
            PagedData<Nationality> result = BaseService.GetPagedData(page, pageSize, _ctx.Nationalities);

            return Ok(result);
        }

        [HttpGet("nationality/{id}")]
        public async Task<IActionResult> GetNationalityById(string id)
        {
            Nationality result = await BaseService.GetById(id, _ctx.Nationalities);

            return Ok(result);
        }

        [HttpPost("nationality")]
        public async Task<IActionResult> CreateNationality([FromBody] Nationality entity)
        {

            Nationality result = await BaseService.Insert(entity, _ctx.Nationalities);

            return Ok(result);
        }

        [HttpPut("nationality/{id}")]
        public async Task<IActionResult> UpdateNationality([FromBody] Nationality entity, string id)
        {
            Nationality original = await BaseService.GetById(id, _ctx.Nationalities);
            // To do change vales befor update
            // example original.name = grfltype.name;
            Nationality result = await BaseService.Update(entity, _ctx.Nationalities);

            return Ok(result);
        }

        [HttpDelete("nationality/{id}")]
        public async Task<IActionResult> DeleteNationality(string id)
        {
            Nationality original = await BaseService.GetById(id, _ctx.Nationalities);
            if (original == null)
            {
                return BadRequest();
            }
            bool success = await BaseService.Delete(original, _ctx.Nationalities);

            return Ok(success);
        }

        #endregion

        #region WaveformType

        [HttpGet("waveformtype")]
        public async Task<IActionResult> GetWaveFormTypes()
        {
            IEnumerable<WaveformType> result = await BaseService.GetAll(_ctx.WaveformTypes);

            return Ok(result);
        }

        [HttpGet("waveformtype/{id}")]
        public async Task<IActionResult> GetWaveFormTypeById(string id)
        {
            WaveformType result = await BaseService.GetById(id, _ctx.WaveformTypes);

            return Ok(result);
        }

        [HttpPost("waveformtype")]
        public async Task<IActionResult> CreateWaveFormType([FromBody] WaveformType entity)
        {

            WaveformType result = await BaseService.Insert(entity, _ctx.WaveformTypes);

            return Ok(result);
        }

        [HttpPut("waveformtype/{id}")]
        public async Task<IActionResult> UpdateWaveFormType([FromBody] WaveformType entity, string id)
        {
            WaveformType original = await BaseService.GetById(id, _ctx.WaveformTypes);
            // To do change vales befor update
            // example original.name = grfltype.name;
            WaveformType result = await BaseService.Update(entity, _ctx.WaveformTypes);

            return Ok(result);
        }

        [HttpDelete("waveformtype/{id}")]
        public async Task<IActionResult> DeleteWaveFormType(string id)
        {
            WaveformType original = await BaseService.GetById(id, _ctx.WaveformTypes);
            if (original == null)
            {
                return BadRequest();
            }
            bool success = await BaseService.Delete(original, _ctx.WaveformTypes);

            return Ok(success);
        }
        #endregion

        #region UnitMissions
        [HttpGet("unitmission")]
        public async Task<IActionResult> GetUnitMissions()
        {
            IEnumerable<UnitMission> result = await BaseService.GetAll(_ctx.UnitMissions);

            return Ok(result);
        }

        [HttpGet("unitmission/{id}")]
        public async Task<IActionResult> GetUnitMission(string id)
        {
            UnitMission result = await BaseService.GetById(id, _ctx.UnitMissions);

            return Ok(result);
        }

        [HttpPost("unitmission")]
        public async Task<IActionResult> CreateUnitMission([FromBody] UnitMission entity)
        {

            UnitMission result = await BaseService.Insert(entity, _ctx.UnitMissions);

            return Ok(result);
        }

        [HttpPut("unitmission/{id}")]
        public async Task<IActionResult> UpdateUnitMission([FromBody] UnitMission entity, string id)
        {
            UnitMission original = await BaseService.GetById(id, _ctx.UnitMissions);
            // To do change vales befor update
            // example original.name = grfltype.name;
            UnitMission result = await BaseService.Update(entity, _ctx.UnitMissions);

            return Ok(result);
        }

        [HttpDelete("unitmission/{id}")]
        public async Task<IActionResult> DeleteUnitMission(string id)
        {
            UnitMission original = await BaseService.GetById(id, _ctx.UnitMissions);
            if (original == null)
            {
                return BadRequest();
            }
            bool success = await BaseService.Delete(original, _ctx.UnitMissions);

            return Ok(success);
        }

        #endregion

        #region JrflType
        [HttpGet("jrfltype")]
        public async Task<IActionResult> GetJrflType()
        {
            IEnumerable<JRFLType> result = await BaseService.GetAll(_ctx.JRFLTypes);

            return Ok(result);
        }

        [HttpGet("jrfltype/{id}")]
        public async Task<IActionResult> GetJrflType(string id)
        {
            JRFLType result = await BaseService.GetById(id, _ctx.JRFLTypes);

            return Ok(result);
        }

        [HttpPost("jrfltype")]
        public async Task<IActionResult> CreateJrflType([FromBody] JRFLType entity)
        {

            JRFLType result = await BaseService.Insert(entity, _ctx.JRFLTypes);

            return Ok(result);
        }

        [HttpPut("jrfltype/{id}")]
        public async Task<IActionResult> UpdateJrflType([FromBody] JRFLType entity, string id)
        {
            JRFLType original = await BaseService.GetById(id, _ctx.JRFLTypes);
            // To do change vales befor update
            // example original.name = grfltype.name;
            JRFLType result = await BaseService.Update(entity, _ctx.JRFLTypes);

            return Ok(result);
        }

        [HttpDelete("jrfltype/{id}")]
        public async Task<IActionResult> DeleteJrflType(string id)
        {
            JRFLType original = await BaseService.GetById(id, _ctx.JRFLTypes);
            if (original == null)
            {
                return BadRequest();
            }
            bool success = await BaseService.Delete(original, _ctx.JRFLTypes);

            return Ok(success);
        }

        #endregion

        #region UnitType
        [HttpGet("unittype")]
        public async Task<IActionResult> GetUnitTypes()
        {
            IEnumerable<UnitType> result = await BaseService.GetAll(_ctx.UnitTypes);

            return Ok(result);
        }

        [HttpGet("unittype/{id}")]
        public async Task<IActionResult> GetUnitType(string id)
        {
            UnitType result = await BaseService.GetById(id, _ctx.UnitTypes);

            return Ok(result);
        }

        [HttpPost("unittype")]
        public async Task<IActionResult> CreateUnitType([FromBody] UnitType entity)
        {

            UnitType result = await BaseService.Insert(entity, _ctx.UnitTypes);

            return Ok(result);
        }

        [HttpPut("unittype/{id}")]
        public async Task<IActionResult> UpdateUnitType([FromBody] UnitType entity, string id)
        {
            UnitType original = await BaseService.GetById(id, _ctx.UnitTypes);
            // To do change vales befor update
            // example original.name = grfltype.name;
            UnitType result = await BaseService.Update(entity, _ctx.UnitTypes);

            return Ok(result);
        }

        [HttpDelete("unittype/{id}")]
        public async Task<IActionResult> DeleteUnitType(string id)
        {
            UnitType original = await BaseService.GetById(id, _ctx.UnitTypes);
            if (original == null)
            {
                return BadRequest();
            }
            bool success = await BaseService.Delete(original, _ctx.UnitTypes);

            return Ok(success);
        }

        #endregion

        #region TransmitterFn
        [HttpGet("transmitter/function")]
        public async Task<IActionResult> GetTransmitterFns()
        {
            IEnumerable<TransmitterFn> result = await BaseService.GetAll(_ctx.TransmitterFns);

            return Ok(result);
        }

        [HttpGet("transmitter/function/{id}")]
        public async Task<IActionResult> GetTransmitterFn(string id)
        {
            TransmitterFn result = await BaseService.GetById(id, _ctx.TransmitterFns);

            return Ok(result);
        }

        [HttpPost("transmitter/function")]
        public async Task<IActionResult> CreateTransmitterFns([FromBody] TransmitterFn entity)
        {

            TransmitterFn result = await BaseService.Insert(entity, _ctx.TransmitterFns);

            return Ok(result);
        }

        [HttpPut("transmitter/function/{id}")]
        public async Task<IActionResult> UpdateTransmitterFns([FromBody] TransmitterFn entity, string id)
        {
            //TransmitterFn original = await BaseService.GetById(id, _ctx.TransmitterFns);
           
            TransmitterFn result = await BaseService.Update(entity, _ctx.TransmitterFns);

            return Ok(result);
        }

        [HttpDelete("transmitter/function/{id}")]
        public async Task<IActionResult> DeleteTransmitterFns(string id)
        {
            TransmitterFn original = await BaseService.GetById(id, _ctx.TransmitterFns);
            if (original == null)
            {
                return BadRequest();
            }
            bool success = await BaseService.Delete(original, _ctx.TransmitterFns);

            return Ok(success);
        }

        #endregion

        #region ScanFunctions
        [HttpGet("scan/function")]
        public async Task<IActionResult> GetScanFns()
        {
            IEnumerable<ScanFn> result = await BaseService.GetAll(_ctx.ScanFns);

            return Ok(result);
        }

        [HttpGet("scan/function/{id}")]
        public async Task<IActionResult> GetScanFns(string id)
        {
            ScanFn result = await BaseService.GetById(id, _ctx.ScanFns);

            return Ok(result);
        }

        [HttpPost("scan/function")]
        public async Task<IActionResult> CreateScanFn([FromBody] ScanFn entity)
        {

            ScanFn result = await BaseService.Insert(entity, _ctx.ScanFns);

            return Ok(result);
        }

        [HttpPut("scan/function/{id}")]
        public async Task<IActionResult> UpdateScanFn([FromBody] ScanFn entity, string id)
        {
            //ScanFn original = await BaseService.GetById(id, _ctx.TransmitterFns);

            ScanFn result = await BaseService.Update(entity, _ctx.ScanFns);

            return Ok(result);
        }

        [HttpDelete("scan/function/{id}")]
        public async Task<IActionResult> DeleteScanFn(string id)
        {
            ScanFn original = await BaseService.GetById(id, _ctx.ScanFns);
            if (original == null)
            {
                return BadRequest();
            }
            bool success = await BaseService.Delete(original, _ctx.ScanFns);

            return Ok(success);
        }

        #endregion

    }
}