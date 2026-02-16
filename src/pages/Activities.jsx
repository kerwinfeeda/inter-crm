import { useState } from 'react'
import { activities } from '../data/mock'
import './Pages.css'

const typeIcons = { proposal: '📨', meeting: '🤝', contract: '📝', scout: '🔍', deal: '💰' }

export default function Activities() {
  const [filter, setFilter] = useState('all')

  const filtered = activities.filter(a => filter === 'all' || a.type === filter)

  return (
    <div className="page fade-in">
      <div className="page-header">
        <div>
          <h2 className="page-heading">Activities</h2>
          <p className="page-subtitle">Track all your current, pending, and upcoming tasks and deals</p>
        </div>
      </div>

      <div className="toolbar">
        <div className="filter-group">
          {['all', 'proposal', 'meeting', 'contract', 'deal', 'scout'].map(f => (
            <button key={f} className={`filter-btn ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>
              {f === 'all' ? 'All' : `${typeIcons[f] || ''} ${f.charAt(0).toUpperCase() + f.slice(1)}`}
            </button>
          ))}
        </div>
      </div>

      <div className="activity-timeline">
        {filtered.map(a => (
          <div key={a.id} className="timeline-item">
            <div className="timeline-icon">{typeIcons[a.type] || '📋'}</div>
            <div className="timeline-content">
              <div className="timeline-header">
                <span className="timeline-title">{a.title}</span>
                <span className={`badge ${a.priority}`}>{a.priority}</span>
              </div>
              <div className="timeline-meta">
                <span className={`status-badge ${a.status}`}>{a.status}</span>
                <span className="cell-secondary">{a.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
