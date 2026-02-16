import { useState } from 'react'
import { FileText, Upload } from 'lucide-react'
import { documents } from '../data/mock'
import './Pages.css'

export default function Legal() {
  const [filter, setFilter] = useState('all')

  const filtered = documents.filter(d => filter === 'all' || d.type === filter)

  return (
    <div className="page fade-in">
      <div className="page-header">
        <div>
          <h2 className="page-heading">Legal</h2>
          <p className="page-subtitle">Store, upload and track all your player documents</p>
        </div>
        <button className="btn-primary"><Upload size={14} /> Upload Document</button>
      </div>

      <div className="toolbar">
        <div className="filter-group">
          {['all', 'contract', 'mandate', 'invoice', 'legal'].map(f => (
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
              <th>Document</th>
              <th>Type</th>
              <th>Player</th>
              <th>Date</th>
              <th>Status</th>
              <th>Expiry</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(d => (
              <tr key={d.id}>
                <td>
                  <div className="doc-cell">
                    <FileText size={14} className="text-tertiary" />
                    <span className="cell-primary">{d.name}</span>
                  </div>
                </td>
                <td><span className="type-badge">{d.type}</span></td>
                <td>{d.player}</td>
                <td className="cell-secondary">{d.date}</td>
                <td><span className={`status-badge ${d.status}`}>{d.status}</span></td>
                <td className="cell-secondary">{d.expiry || '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
