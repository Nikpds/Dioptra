namespace Dioptra.Admin.Models
{
    public class User : BaseEntity
    {
        public string Fullname { get; set; }
        public bool IsActive { get; set; }
        public UserRole Role { get; set; }
        public string Username { get; set; }
        public string PasswordHash { get; set; }

    }

    public enum UserRole
    {
        Admin,
        HelpDesk
    }
}
