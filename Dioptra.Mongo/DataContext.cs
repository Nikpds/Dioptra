using Dioptra.Models.Entities;
using MongoDB.Driver;
using System;

namespace Dioptra.Mongo
{
    public class DataContext
    {
        public IMongoDatabase Database { get; private set; }
        public IMongoClient MongoClient { get; private set; }

        public MongoDbRepository<User> Users { get; private set; }
        public MongoDbRepository<JRFLType> JRFLTypes { get; private set; }


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
            JRFLTypes = new MongoDbRepository<JRFLType>(Database, "JRFLType");
        }
    }
}
