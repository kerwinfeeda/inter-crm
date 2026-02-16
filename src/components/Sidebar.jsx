import { NavLink, useLocation } from 'react-router-dom'
import { LayoutDashboard, Users, Inbox, Globe, Activity, Shield, FileText, Search, Settings, Sparkles } from 'lucide-react'
import './Sidebar.css'

const navItems = [
  { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { path: '/players', icon: Users, label: 'Players' },
  { path: '/requests', icon: Inbox, label: 'Requests' },
  { path: '/network', icon: Globe, label: 'Network' },
  { path: '/activities', icon: Activity, label: 'Activities' },
  { path: '/shadow-squads', icon: Shield, label: 'Shadow Squads' },
  { path: '/legal', icon: FileText, label: 'Legal' },
]

export default function Sidebar() {
  const location = useLocation()

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <div className="logo-icon">I</div>
          <span className="logo-text">Inter</span>
        </div>
      </div>

      <div className="sidebar-search">
        <Search size={14} />
        <span>Search...</span>
        <kbd>⌘K</kbd>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section">
          {navItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            >
              <item.icon size={16} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-ai">
          <Sparkles size={14} />
          <span>Ask Inter AI</span>
        </div>
        <div className="sidebar-user">
          <div className="user-avatar">K</div>
          <div className="user-info">
            <span className="user-name">Kerwin Alabi</span>
            <span className="user-role">Agent</span>
          </div>
          <Settings size={14} className="user-settings" />
        </div>
      </div>
    </aside>
  )
}
