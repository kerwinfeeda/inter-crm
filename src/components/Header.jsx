import { useLocation } from 'react-router-dom'
import { Bell, Plus } from 'lucide-react'
import './Header.css'

const titles = {
  '/': 'Dashboard',
  '/players': 'Players',
  '/requests': 'Requests',
  '/network': 'Network',
  '/activities': 'Activities',
  '/shadow-squads': 'Shadow Squads',
  '/legal': 'Legal',
}

export default function Header() {
  const location = useLocation()
  const title = titles[location.pathname] || 'Ensk'

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="header-title">{title}</h1>
      </div>
      <div className="header-right">
        <button className="header-btn">
          <Bell size={16} />
        </button>
        <button className="header-btn primary">
          <Plus size={16} />
          <span>New</span>
        </button>
      </div>
    </header>
  )
}
