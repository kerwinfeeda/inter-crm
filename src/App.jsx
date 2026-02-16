import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useState } from 'react'
import HomePage from './pages/HomePage'
import Auth from './pages/Auth'
import Onboarding from './pages/Onboarding'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Jose from './components/Jose'
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
      <Jose />
    </div>
  )
}

export default function App() {
  const [user, setUser] = useState(null)
  const location = useLocation()

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Auth mode="login" onAuth={setUser} />} />
      <Route path="/signup" element={<Auth mode="signup" onAuth={setUser} />} />
      <Route path="/onboarding" element={<Onboarding onComplete={(data) => setUser({...user, ...data})} />} />
      <Route path="/app/*" element={<CRMLayout />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
