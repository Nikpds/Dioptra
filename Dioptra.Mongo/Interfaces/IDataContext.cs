using Dioptra.Models.Entities;
using Dioptra.Models.Entities.Lookups;

namespace Dioptra.Mongo.Interfaces
{
    public interface IDataContext
    {
        IMongoDbRepository<User> Users { get; }
        IMongoDbRepository<JRFLType> JRFLTypes { get; }
        IMongoDbRepository<Nationality> Nationalities { get; }
        IMongoDbRepository<UnitType> UnitTypes { get; }
        IMongoDbRepository<WaveformType> WaveformTypes { get; }
        IMongoDbRepository<UnitMission> UnitMissions { get; }
        IMongoDbRepository<TransmitterFn> TransmitterFns { get; }
        IMongoDbRepository<ScanFn> ScanFns { get; }
        IMongoDbRepository<RadarAntennaType> RadarAntennaTypes { get; }
    }
}
