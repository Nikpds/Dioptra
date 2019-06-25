using Dioptra.Admin.Models;
using Dioptra.Admin.Models.Views;
using Renci.SshNet;
using System;
using System.Collections.Generic;

namespace Dioptra.Admin.Services
{
    public static class SShService
    {
        public static Object RunCommands(Server server, string[] commands)
        {           
            List<string> results = new List<string>();
            using (var client = new SshClient(server.Ip, server.Username, server.Password))
            {
                client.Connect();
                foreach (var cmd in commands)
                {
                    var response = client.RunCommand(cmd);
                    results.Add(response.Result);
                }

                client.Disconnect();
            }
            return results;
        }
    }
}
