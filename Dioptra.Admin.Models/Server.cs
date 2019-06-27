﻿namespace Dioptra.Admin.Models
{
    public class Server : BaseEntity
    {
        public string Ip { get; set; }
        public string MapIp { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Comments { get; set; }
        public string DbUsername { get; set; }
        public string DbPassword { get; set; }
        public string ApiPort { get; set; }
        public bool IsActive { get; set; }
        public string ContactInfo { get; set; }
        public string Phone { get; set; }
        public string Title { get; set; }

        // Extra Properties
        public string Protocol { get; set; }
        public bool PingTestActive { get; set; }
        public Section Section { get; set; }

        public Server()
        {

        }
    }
}