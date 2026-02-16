import { Link } from 'react-router-dom'
import { Users, Inbox, Handshake, Activity, TrendingUp, Clock } from 'lucide-react'
import { dashboardStats, activities, requests } from '../data/mock'
import './Pages.css'

const statCards = [
  { label: 'Managed Players', value: dashboardStats.managedPlayers, icon: Users, color: 'accent' },
  { label: 'Active Requests', value: dashboardStats.activeRequests, icon: Inbox, color: 'blue' },
  { label: 'Pending Deals', value: dashboardStats.pendingDeals, icon: Handshake, color: 'orange' },
  { label: 'Network Contacts', value: dashboardStats.networkContacts, icon: Activity, color: 'green' },
  { label: 'Revenue (YTD)', value: dashboardStats.revenueThisYear, icon: TrendingUp, color: 'green' },
  { label: 'Pending Commissions', value: dashboardStats.pendingCommissions, icon: Clock, color: 'orange' },
]

export default function Dashboard() {
  const recentActivities = activities.slice(0, 5)
  const activeRequests = requests.filter(r => r.status === 'active').slice(0, 3)

  return (
    <div className="page fade-in">
      <div className="page-header">
        <h2 className="page-heading">Overview</h2>
        <p className="page-subtitle">Your football agency at a glance</p>
      </div>

      <div className="stats-grid">
        {statCards.map(s => (
          <div key={s.label} className="stat-card">
            <div className="stat-card-header">
              <span className={`stat-icon ${s.color}`}><s.icon size={16} /></span>
              <span className="stat-label">{s.label}</span>
            </div>
            <div className="stat-value">{s.value}</div>
          </div>
        ))}
      </div>

      <div className="dashboard-grid">
        <div className="dash-section">
          <div className="dash-section-header">
            <h3>Recent Activity</h3>
            <Link to="/activities" className="dash-link">View all →</Link>
          </div>
          <div className="dash-list">
            {recentActivities.map(a => (
              <div key={a.id} className="dash-list-item">
                <div className={`activity-dot ${a.status}`} />
                <div className="dash-item-content">
                  <span className="dash-item-title">{a.title}</span>
                  <span className="dash-item-meta">{a.date} · {a.type}</span>
                </div>
                <span className={`badge ${a.priority}`}>{a.priority}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="dash-section">
          <div className="dash-section-header">
            <h3>Active Requests</h3>
            <Link to="/requests" className="dash-link">View all →</Link>
          </div>
          <div className="dash-list">
            {activeRequests.map(r => (
              <div key={r.id} className="dash-list-item">
                <div className="dash-item-content">
                  <span className="dash-item-title">{r.club} — {r.position}</span>
                  <span className="dash-item-meta">{r.budget} · {r.matchedPlayers} matched</span>
                </div>
                <span className={`badge ${r.priority}`}>{r.priority}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
