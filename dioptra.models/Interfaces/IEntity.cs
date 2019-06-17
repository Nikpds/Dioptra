using Dioptra.Models.Views;

namespace Dioptra.Models.Interfaces
{
    public interface IEntity
    {
        string Id { get; set; }
        UpdateInformation UpdateInfo { get; set; }
    }
}
