namespace Dioptra.Models.Entities.Chat
{
    /// <summary>
    /// Here UpdateInformation  that arrives from Entity class
    /// works as Sender of message. There will be no updates in messages
    /// </summary>
    public class ChatMessage : Entity
    {
        /// <summary>
        /// The ID of the conversation that this message
        /// belongs to.
        /// </summary>
        public string ConversationId { get; set; }

        public string Message { get; set; }


    }
}
