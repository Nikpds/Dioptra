using System.ComponentModel.DataAnnotations;

namespace Dioptra.Models.Views
{
    public class LoginView
    {
        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
