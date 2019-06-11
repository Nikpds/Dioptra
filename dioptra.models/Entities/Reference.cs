namespace Dioptra.Models.Entities
{
    public class Reference
    {
        public string Id { get; set; }
        public string Name { get; set; }

        public Reference(string id, string name)
        {
            Id = id;
            Name = name;
        }

    }
}
