using System.ComponentModel.DataAnnotations;

namespace Domain.Models.Views
{
    public class LoginView
    {
        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
