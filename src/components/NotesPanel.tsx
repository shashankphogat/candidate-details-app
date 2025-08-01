"use client"

import { useState } from "react"
import { Phone, Video, MessageCircle, Calendar } from "lucide-react"

export default function NotesPanel() {
  const tabs = ["All", "Notes & Calls", "Tasks", "Meeting", "Files"]
  const [activeTab, setActiveTab] = useState("All")

  const notes = [
    {
      id: 1,
      type: "Note",
      status: "To Do",
      content:
        "Lorem dolore sit at aute cupidatat eu Lorem tempor proident consequat. In dolore mollit laborum ex cillum laboris occaecat ipsum Lorem cupidatat.",
      associations: 1,
      author: "John Doe",
      date: "Jul 12, 2023, 11:54 am",
    },
    {
      id: 2,
      type: "Note",
      status: "To Do",
      content:
        "Lorem dolore sit at aute cupidatat eu Lorem tempor proident consequat. In dolore mollit laborum ex cillum laboris occaecat ipsum Lorem cupidatat.",
      associations: 1,
      author: "John Doe",
      date: "Jul 12, 2023, 11:54 am",
    },
    {
      id: 3,
      type: "Note",
      status: "To Do",
      content:
        "Lorem dolore sit at aute cupidatat eu Lorem tempor proident consequat. In dolore mollit laborum ex cillum laboris occaecat ipsum Lorem cupidatat.",
      associations: 1,
      author: "John Doe",
      date: "Jul 12, 2023, 11:54 am",
    },
  ]

  return (
    <div className="notes-panel">
      <div className="panel-header">
        <div className="user-info">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
            alt="User"
          />
          <span>Phyllis Yang</span>
          <span className="timestamp">Jul 14, 2023, 4:04 pm</span>
        </div>
        <div className="header-actions">
          <button className="icon-btn">
            <Phone size={16} />
          </button>
          <button className="icon-btn">
            <Video size={16} />
          </button>
          <button className="icon-btn">
            <MessageCircle size={16} />
          </button>
          <button className="icon-btn">
            <Calendar size={16} />
          </button>
        </div>
      </div>

      <div className="panel-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`panel-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="notes-list">
        {notes.map((note) => (
          <div key={note.id} className="note-item">
            <div className="note-header">
              <span className="note-type">{note.type}</span>
              <span className="note-status">{note.status}</span>
            </div>
            <p className="note-content">{note.content}</p>
            <div className="note-footer">
              <span className="associations">{note.associations} Association(s)</span>
              <div className="note-meta">
                <span className="author">{note.author}</span>
                <span className="date">{note.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
