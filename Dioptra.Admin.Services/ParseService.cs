using System;
using System.Collections.Generic;
using System.Text;

namespace Dioptra.Admin.Services
{
    public static class ParseService
    {
        public static string[] ParseString(string value)
        {
            return value.Split(';');
        }
    }
}
