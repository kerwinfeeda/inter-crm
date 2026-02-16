import { shadowSquads } from '../data/mock'
import './Pages.css'

export default function ShadowSquads() {
  return (
    <div className="page fade-in">
      <div className="page-header">
        <div>
          <h2 className="page-heading">Shadow Squads</h2>
          <p className="page-subtitle">Build shadow squads and showcase your players at their best</p>
        </div>
      </div>

      <div className="squad-grid">
        {shadowSquads.map(sq => (
          <div key={sq.id} className="squad-card">
            <div className="squad-card-header">
              <div>
                <h3 className="squad-name">{sq.name}</h3>
                <p className="squad-meta">{sq.club} · {sq.formation}</p>
              </div>
              <span className="cell-secondary">Updated {sq.updatedAt}</span>
            </div>
            <div className="squad-slots">
              {sq.slots.map((slot, i) => (
                <div key={i} className="squad-slot">
                  <span className="position-badge">{slot.position}</span>
                  <span className="slot-player">{slot.player}</span>
                  <span className={`status-badge ${slot.status}`}>{slot.status}</span>
                </div>
              ))}
            </div>
            <div className="squad-actions">
              <button className="btn-secondary">Edit Squad</button>
              <button className="btn-secondary">Share</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
