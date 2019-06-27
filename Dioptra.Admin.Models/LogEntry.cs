﻿using System;

namespace Dioptra.Admin.Models
{
    public class LogEntry
    {
        public string Id { get; set; }
        public DateTime EntryTime { get; set; }
        public LogEntryLevel Level { get; set; }
        public LogEntryType Type { get; set; }
        public string MethodName { get; set; }
        public string Message { get; set; }
        public object Payload { get; set; }
    }

    public enum LogEntryLevel
    {
        Debug, Info, Warning, Error, CriticalError, SevereError
    }
    public enum LogEntryType
    {
        JSON, Exception, Empty
    }
}