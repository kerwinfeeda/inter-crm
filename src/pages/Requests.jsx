import { useState } from 'react'
import { Search } from 'lucide-react'
import { requests } from '../data/mock'
import './Pages.css'

export default function Requests() {
  const [filter, setFilter] = useState('all')

  const filtered = requests.filter(r => filter === 'all' || r.status === filter)

  return (
    <div className="page fade-in">
      <div className="page-header">
        <div>
          <h2 className="page-heading">Requests</h2>
          <p className="page-subtitle">Club requests and transfer inquiries</p>
        </div>
      </div>

      <div className="toolbar">
        <div className="filter-group">
          {['all', 'active', 'pending', 'closed'].map(f => (
            <button key={f} className={`filter-btn ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>Club</th>
              <th>Position</th>
              <th>Budget</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Matched</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(r => (
              <tr key={r.id}>
                <td className="cell-primary">{r.club}</td>
                <td><span className="position-badge">{r.position}</span></td>
                <td className="cell-mono">{r.budget}</td>
                <td><span className={`badge ${r.priority}`}>{r.priority}</span></td>
                <td><span className={`status-badge ${r.status}`}>{r.status}</span></td>
                <td>{r.matchedPlayers} players</td>
                <td className="cell-secondary">{r.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filtered.length > 0 && (
        <div className="request-details-panel">
          <h3>Requirements</h3>
          {filtered.map(r => (
            <div key={r.id} className="request-detail-card">
              <div className="request-detail-header">
                <span className="cell-primary">{r.club}</span>
                <span className={`badge ${r.priority}`}>{r.priority}</span>
              </div>
              <p className="request-requirements">{r.requirements}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
