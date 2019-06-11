using System.ComponentModel.DataAnnotations;

namespace Dioptra.Admin.Api.Models.Views
{
    public class LoginView
    {
        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
