import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Filter, LayoutGrid, List } from 'lucide-react'
import { players } from '../data/mock'
import './Pages.css'

export default function Players() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')
  const [view, setView] = useState('table')

  const filtered = players.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.club.toLowerCase().includes(search.toLowerCase()) ||
      p.position.toLowerCase().includes(search.toLowerCase())
    const matchFilter = filter === 'all' || p.status === filter
    return matchSearch && matchFilter
  })

  return (
    <div className="page fade-in">
      <div className="page-header">
        <div>
          <h2 className="page-heading">Players</h2>
          <p className="page-subtitle">{players.length} players in your database</p>
        </div>
      </div>

      <div className="toolbar">
        <div className="search-input">
          <Search size={14} />
          <input
            type="text"
            placeholder="Search players..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="filter-group">
          {['all', 'managed', 'mandate', 'potential'].map(f => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
        <div className="view-toggle">
          <button className={`view-btn ${view === 'table' ? 'active' : ''}`} onClick={() => setView('table')}><List size={14} /></button>
          <button className={`view-btn ${view === 'grid' ? 'active' : ''}`} onClick={() => setView('grid')}><LayoutGrid size={14} /></button>
        </div>
      </div>

      {view === 'table' ? (
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Player</th>
                <th>Position</th>
                <th>Club</th>
                <th>Age</th>
                <th>Market Value</th>
                <th>Status</th>
                <th>Contract</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(p => (
                <tr key={p.id}>
                  <td>
                    <Link to={`/players/${p.id}`} className="player-name-cell">
                      <div className="player-avatar">{p.name.charAt(0)}</div>
                      <div>
                        <div className="cell-primary">{p.name}</div>
                        <div className="cell-secondary">{p.nationality}</div>
                      </div>
                    </Link>
                  </td>
                  <td><span className="position-badge">{p.position}</span></td>
                  <td>{p.club}</td>
                  <td>{p.age}</td>
                  <td className="cell-mono">{p.marketValue}</td>
                  <td><span className={`status-badge ${p.status}`}>{p.status}</span></td>
                  <td className="cell-secondary">{p.contractEnd}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="card-grid">
          {filtered.map(p => (
            <Link to={`/players/${p.id}`} key={p.id} className="player-card">
              <div className="player-card-header">
                <div className="player-card-avatar">{p.name.charAt(0)}</div>
                <span className={`status-badge ${p.status}`}>{p.status}</span>
              </div>
              <h4>{p.name}</h4>
              <p className="player-card-meta">{p.position} · {p.club}</p>
              <p className="player-card-meta">{p.nationality} · Age {p.age}</p>
              <div className="player-card-footer">
                <span className="cell-mono">{p.marketValue}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
