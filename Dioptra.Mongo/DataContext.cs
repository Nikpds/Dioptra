using Dioptra.Models.Entities;
using Dioptra.Models.Entities.Lookups;
using Dioptra.Mongo.Interfaces;
using MongoDB.Driver;
using System;

namespace Dioptra.Mongo
{
    public class DataContext : IDataContext
    {
        public IMongoDatabase Database { get; private set; }
        public IMongoClient MongoClient { get; private set; }

        public IMongoDbRepository<User> Users { get; private set; }
        public IMongoDbRepository<JRFLType> JRFLTypes { get; private set; }
        public IMongoDbRepository<Nationality> Nationalities { get; private set; }
        public IMongoDbRepository<UnitType> UnitTypes { get; private set; }
        public IMongoDbRepository<WaveformType> WaveformTypes { get; private set; }
        public IMongoDbRepository<UnitMission> UnitMissions { get; private set; }
        public IMongoDbRepository<TransmitterFn> TransmitterFns { get; private set; }
        public IMongoDbRepository<ScanFn> ScanFns { get; private set; }

        public IMongoDbRepository<RadarAntennaType> RadarAntennaTypes { get; private set; }

        public DataContext(string connectionString)
        {
            var url = new MongoUrl(connectionString);

            MongoClientSettings settings = MongoClientSettings.FromUrl(new MongoUrl(connectionString));
            MongoClient = new MongoClient(settings);
            if (url.DatabaseName == null)
            {
                throw new ArgumentException("Your connection string must contain a database name", connectionString);
            }
            Database = MongoClient.GetDatabase(url.DatabaseName);

            Users = new MongoDbRepository<User>(Database, "Users");
            JRFLTypes = new MongoDbRepository<JRFLType>(Database, "JRFLTypes");
            Nationalities = new MongoDbRepository<Nationality>(Database, "Nationalities");
            UnitTypes = new MongoDbRepository<UnitType>(Database, "UnitTypes");
            WaveformTypes = new MongoDbRepository<WaveformType>(Database, "WaveformTypes");
            UnitMissions = new MongoDbRepository<UnitMission>(Database, "UnitMissions");
            TransmitterFns = new MongoDbRepository<TransmitterFn>(Database, "TransmitterFunctions");
            ScanFns = new MongoDbRepository<ScanFn>(Database, "ScanFunctions");
            RadarAntennaTypes = new MongoDbRepository<RadarAntennaType>(Database, "RadarAntennaTypes");
        }

        public IMongoCollection<T> GetCollection<T>(string collectionName)
        {
            return Database.GetCollection<T>(collectionName);
        }
    }
}
