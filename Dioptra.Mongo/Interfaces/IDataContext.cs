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
        IMongoDbRepository<Unit> Units { get; }
        IMongoDbRepository<WaveformType> WaveformTypes { get; }
        IMongoDbRepository<UnitMission> UnitMissions { get; }
        IMongoDbRepository<TransmitterFn> TransmitterFns { get; }
        IMongoDbRepository<ScanFn> ScanFns { get; }
        IMongoDbRepository<AgilityPRI> AgilityPRI { get; }
        IMongoDbRepository<AgilityPW> AgilityPW { get; }
        IMongoDbRepository<AgilityRF> AgilityRF { get; }
        IMongoDbRepository<RadarAntennaType> RadarAntennaTypes { get; }
    }
}
