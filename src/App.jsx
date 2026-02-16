import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Players from './pages/Players'
import PlayerDetail from './pages/PlayerDetail'
import Requests from './pages/Requests'
import Network from './pages/Network'
import Activities from './pages/Activities'
import ShadowSquads from './pages/ShadowSquads'
import Legal from './pages/Legal'
import './App.css'

function CRMLayout() {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="app-main">
        <Header />
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/players" element={<Players />} />
            <Route path="/players/:id" element={<PlayerDetail />} />
            <Route path="/requests" element={<Requests />} />
            <Route path="/network" element={<Network />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/shadow-squads" element={<ShadowSquads />} />
            <Route path="/legal" element={<Legal />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const location = useLocation()
  const isApp = location.pathname.startsWith('/app')

  if (isApp) {
    return (
      <Routes>
        <Route path="/app/*" element={<CRMLayout />} />
      </Routes>
    )
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
