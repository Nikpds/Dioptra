using Dioptra.Models.Common;

namespace Dioptra.Models.Entities.Chat
{
    public class Conversation : Entity
    {
        /// <summary>
        /// If true all users can access this Conversation
        /// </summary>
        public bool IsPublic { get; set; }
        /// <summary>
        /// The title of the Conversation. By Default it will be 
        /// the names of the participants.
        /// </summary>
        public string Title { get; set; }
        /// <summary>
        /// The user that initially created the conversation
        /// </summary>
        public Lookup Owner { get; set; }
    }
}
