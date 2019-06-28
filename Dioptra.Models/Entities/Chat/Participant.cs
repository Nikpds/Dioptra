using System;
using System.Collections.Generic;
using System.Text;

namespace Dioptra.Models.Entities.Chat
{
    /// <summary>
    /// Here UpdateInformation  that arrives from Entity class
    /// shows the person who added the Participant
    /// </summary>
    public class Participant : Entity
    {
        /// <summary>
        /// The userId that has access to read/write to the conversation
        /// </summary>
        public string UserId { get; set; }
        /// <summary>
        /// The ID of the conversation that this user can use.
        /// </summary>
        public string ConversationId { get; set; }

    }
}
