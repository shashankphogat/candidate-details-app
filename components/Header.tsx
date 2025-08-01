import { Search, Plus, Grid3X3, Mail, Bell } from "lucide-react"

export default function Header() {
  return (
    <div className="header">
      <div className="search-section">
        <div className="search-bar">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Search Pipedrive" />
        </div>
      </div>

      <div className="header-center">
        <div className="logo">
          <span className="logo-icon">R</span>
          <span className="logo-text">recruit crm</span>
        </div>
      </div>

      <div className="header-actions">
        <button className="action-btn">
          <Plus size={18} />
        </button>
        <button className="action-btn">
          <Grid3X3 size={18} />
        </button>
        <button className="action-btn">
          <Mail size={18} />
        </button>
        <button className="action-btn">
          <Bell size={18} />
        </button>
        <div className="user-profile">
          <img src="/placeholder.svg?height=32&width=32" alt="User" />
          <div className="user-info">
            <span className="user-name">Phyllis Yang</span>
            <span className="user-company">Silicon Links Inc</span>
          </div>
        </div>
      </div>
    </div>
  )
}
