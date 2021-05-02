using System;

namespace Chat.Infrastructure.Entities
{
    public class Message : Base
    {
        //public User User { get; set; }
        public string User { get; set; }
        public string Text { get; set; }
        //public DateTime Date { get; set; }
    }
}