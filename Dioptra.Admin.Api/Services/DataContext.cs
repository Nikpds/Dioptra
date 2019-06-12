﻿using Dioptra.Admin.Api.Models;
using MongoDB.Driver;
using System;


namespace Dioptra.Admin.Api.Services
{
    public class DataContext
    {
        public IMongoDatabase Database { get; private set; }
        public MongoDbRepository<User> Users { get; private set; }
        public MongoDbRepository<Server> Servers { get; private set; }

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
            Servers = new MongoDbRepository<Server>(Database, "Servers");
        }
    }
}