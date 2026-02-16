import { network } from '../data/mock'
import { MessageSquare } from 'lucide-react'
import './Pages.css'

export default function Network() {
  return (
    <div className="page fade-in">
      <div className="page-header">
        <div>
          <h2 className="page-heading">Network</h2>
          <p className="page-subtitle">Your trusted community of agents across the global football market</p>
        </div>
      </div>

      <div className="card-grid network-grid">
        {network.map(n => (
          <div key={n.id} className="network-card">
            <div className="network-card-header">
              <div className="network-avatar">{n.name.charAt(0)}</div>
              <span className={`tier-badge ${n.tier}`}>{n.tier}</span>
            </div>
            <h4>{n.name}</h4>
            <p className="network-agency">{n.agency}</p>
            <div className="network-meta">
              <span>{n.location}</span>
              <span>{n.players} players</span>
            </div>
            <p className="network-speciality">{n.speciality}</p>
            <div className="network-footer">
              <span className="cell-secondary">Last contact: {n.lastContact}</span>
              <button className="icon-btn"><MessageSquare size={14} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
