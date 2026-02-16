import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink, FileText, TrendingUp } from 'lucide-react'
import { players, documents, activities } from '../data/mock'
import './Pages.css'

export default function PlayerDetail() {
  const { id } = useParams()
  const player = players.find(p => p.id === Number(id))

  if (!player) return <div className="page fade-in"><p>Player not found.</p></div>

  const playerDocs = documents.filter(d => d.player === player.name)
  const playerActivities = activities.filter(a => a.title.includes(player.name.split(' ').pop()))

  return (
    <div className="page fade-in">
      <Link to="/players" className="back-link"><ArrowLeft size={14} /> Back to Players</Link>

      <div className="detail-header">
        <div className="detail-avatar">{player.name.charAt(0)}</div>
        <div className="detail-info">
          <h2 className="detail-name">{player.name}</h2>
          <p className="detail-meta">{player.position} · {player.club} · {player.nationality}</p>
          <div className="detail-badges">
            <span className={`status-badge ${player.status}`}>{player.status}</span>
            <span className="detail-value">{player.marketValue}</span>
          </div>
        </div>
      </div>

      <div className="detail-grid">
        <div className="detail-section">
          <h3>Profile</h3>
          <div className="detail-fields">
            <div className="detail-field"><span className="field-label">Age</span><span>{player.age}</span></div>
            <div className="detail-field"><span className="field-label">Contract Until</span><span>{player.contractEnd}</span></div>
            <div className="detail-field"><span className="field-label">Agent</span><span>{player.agent}</span></div>
            <div className="detail-field"><span className="field-label">Market Value</span><span className="cell-mono">{player.marketValue}</span></div>
          </div>
        </div>

        <div className="detail-section">
          <h3>Season Stats</h3>
          <div className="stats-row">
            <div className="mini-stat">
              <span className="mini-stat-value">{player.stats.goals}</span>
              <span className="mini-stat-label">Goals</span>
            </div>
            <div className="mini-stat">
              <span className="mini-stat-value">{player.stats.assists}</span>
              <span className="mini-stat-label">Assists</span>
            </div>
            <div className="mini-stat">
              <span className="mini-stat-value">{player.stats.appearances}</span>
              <span className="mini-stat-label">Apps</span>
            </div>
          </div>
        </div>

        <div className="detail-section full-width">
          <h3>Documents</h3>
          {playerDocs.length > 0 ? (
            <div className="dash-list">
              {playerDocs.map(d => (
                <div key={d.id} className="dash-list-item">
                  <FileText size={14} className="text-tertiary" />
                  <div className="dash-item-content">
                    <span className="dash-item-title">{d.name}</span>
                    <span className="dash-item-meta">{d.date} · {d.type}</span>
                  </div>
                  <span className={`status-badge ${d.status}`}>{d.status}</span>
                </div>
              ))}
            </div>
          ) : <p className="empty-state-text">No documents linked to this player.</p>}
        </div>

        <div className="detail-section full-width">
          <h3>Activity</h3>
          {playerActivities.length > 0 ? (
            <div className="dash-list">
              {playerActivities.map(a => (
                <div key={a.id} className="dash-list-item">
                  <div className={`activity-dot ${a.status}`} />
                  <div className="dash-item-content">
                    <span className="dash-item-title">{a.title}</span>
                    <span className="dash-item-meta">{a.date}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : <p className="empty-state-text">No recent activity.</p>}
        </div>
      </div>
    </div>
  )
}
