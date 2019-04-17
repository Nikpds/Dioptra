using Domain.Models.Entities;
using MongoDB.Driver;
using System;

namespace MongoContext
{
    public class DataContext
    {
        public IMongoDatabase Database { get; private set; }
        public MongoDbRepository<User> Users { get; private set; }
        public MongoDbRepository<JRFLType> JRFLTypes { get; private set; }

        public DataContext(string connectionString)
        {
            var url = new MongoUrl(connectionString);

            MongoClientSettings settings = MongoClientSettings.FromUrl(new MongoUrl(connectionString));
            var client = new MongoClient(settings);
            if (url.DatabaseName == null)
            {
                throw new ArgumentException("Your connection string must contain a database name", connectionString);
            }
            Database = client.GetDatabase(url.DatabaseName);

            Users = new MongoDbRepository<User>(Database, "Users");
            JRFLTypes = new MongoDbRepository<JRFLType>(Database, "JRFLTypes");
        }
    }
}
