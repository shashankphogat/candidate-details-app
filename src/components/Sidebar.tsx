import { Grid3X3, User, Building, Briefcase, Mail, Calendar, Settings, MoreHorizontal } from "lucide-react"

export default function Sidebar() {
  const menuItems = [
    { icon: Grid3X3, active: true },
    { icon: User },
    { icon: Building },
    { icon: Briefcase },
    { icon: Mail },
    { icon: Calendar },
    { icon: Settings },
    { icon: MoreHorizontal },
  ]

  return (
    <div className="sidebar">
      <div className="sidebar-menu">
        {menuItems.map((item, index) => {
          const IconComponent = item.icon
          return (
            <div key={index} className={`menu-item ${item.active ? "active" : ""}`}>
              <IconComponent size={20} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
