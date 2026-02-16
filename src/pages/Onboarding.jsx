import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  ArrowRight, ArrowLeft, Check, Users, Building2, GraduationCap, 
  Shield, Globe, Upload, Sparkles, UserPlus, Database, Zap
} from 'lucide-react'
import './Onboarding.css'

const ORG_TYPES = [
  { id: 'agent', icon: Users, title: 'Football Agent', desc: 'Independent licensed agent managing players', features: ['Player management', 'Deal pipeline', 'Network access', 'Commission tracking'] },
  { id: 'agency', icon: Building2, title: 'Agency', desc: 'Multi-agent agency with a team of representatives', features: ['Team workspaces', 'Shared player database', 'Role permissions', 'Agency analytics'] },
  { id: 'academy', icon: GraduationCap, title: 'Academy', desc: 'Youth academy tracking player development', features: ['Youth player profiles', 'Development tracking', 'Showcase portfolios', 'Agent connections'] },
  { id: 'club', icon: Shield, title: 'Club', desc: 'Football club managing recruitment & scouting', features: ['Transfer requests', 'Shadow squad builder', 'Agent network', 'Scouting integration'] },
]

const MARKETS = [
  { id: 'england', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', name: 'England', league: 'Premier League' },
  { id: 'spain', flag: '🇪🇸', name: 'Spain', league: 'La Liga' },
  { id: 'italy', flag: '🇮🇹', name: 'Italy', league: 'Serie A' },
  { id: 'germany', flag: '🇩🇪', name: 'Germany', league: 'Bundesliga' },
  { id: 'france', flag: '🇫🇷', name: 'France', league: 'Ligue 1' },
  { id: 'portugal', flag: '🇵🇹', name: 'Portugal', league: 'Liga Portugal' },
  { id: 'netherlands', flag: '🇳🇱', name: 'Netherlands', league: 'Eredivisie' },
  { id: 'brazil', flag: '🇧🇷', name: 'Brazil', league: 'Brasileirão' },
  { id: 'argentina', flag: '🇦🇷', name: 'Argentina', league: 'Liga Profesional' },
  { id: 'turkey', flag: '🇹🇷', name: 'Turkey', league: 'Süper Lig' },
  { id: 'usa', flag: '🇺🇸', name: 'USA', league: 'MLS' },
  { id: 'saudi', flag: '🇸🇦', name: 'Saudi Arabia', league: 'SPL' },
]

const TEAM_SIZE = [
  { id: 'solo', label: 'Just me', desc: 'Solo agent' },
  { id: 'small', label: '2-5', desc: 'Small team' },
  { id: 'medium', label: '6-20', desc: 'Growing agency' },
  { id: 'large', label: '20+', desc: 'Large operation' },
]

const STEPS = [
  { id: 'type', title: 'Organization type', subtitle: 'How will you use Inter?' },
  { id: 'details', title: 'Your details', subtitle: 'Tell us about your organization' },
  { id: 'markets', title: 'Markets', subtitle: 'Select your primary markets' },
  { id: 'setup', title: 'Quick setup', subtitle: 'Get your workspace ready' },
  { id: 'ready', title: 'You\'re all set', subtitle: 'Welcome to Inter' },
]

export default function Onboarding({ onComplete }) {
  const [step, setStep] = useState(0)
  const [data, setData] = useState({
    orgType: '',
    orgName: '',
    teamSize: '',
    license: '',
    markets: [],
    importData: false,
    inviteEmails: '',
  })
  const navigate = useNavigate()

  const canNext = () => {
    if (step === 0) return !!data.orgType
    if (step === 1) return !!data.orgName && !!data.teamSize
    if (step === 2) return data.markets.length > 0
    return true
  }

  const next = () => {
    if (step < STEPS.length - 1) setStep(step + 1)
    else {
      onComplete?.(data)
      navigate('/app')
    }
  }

  const prev = () => {
    if (step > 0) setStep(step - 1)
  }

  const toggleMarket = (id) => {
    setData(d => ({
      ...d,
      markets: d.markets.includes(id) ? d.markets.filter(m => m !== id) : [...d.markets, id]
    }))
  }

  return (
    <div className="onboarding-page">
      <div className="onboarding-sidebar">
        <div className="onboarding-logo">
          <div className="onboarding-logo-icon">I</div>
          <span>Inter</span>
        </div>
        <div className="onboarding-steps">
          {STEPS.map((s, i) => (
            <div key={s.id} className={`onboarding-step ${i === step ? 'active' : ''} ${i < step ? 'done' : ''}`}>
              <div className="step-indicator">
                {i < step ? <Check size={12} /> : <span>{i + 1}</span>}
              </div>
              <div className="step-text">
                <span className="step-title">{s.title}</span>
                <span className="step-subtitle">{s.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="onboarding-sidebar-footer">
          <p>Need help? <a href="#">Contact support</a></p>
        </div>
      </div>

      <div className="onboarding-main">
        <div className="onboarding-content">

          {/* STEP 0: Org Type */}
          {step === 0 && (
            <div className="ob-step fade-in">
              <h2>How will you use Inter?</h2>
              <p className="ob-desc">Select your organization type. This helps us customize your experience.</p>
              <div className="org-type-grid">
                {ORG_TYPES.map(o => (
                  <button
                    key={o.id}
                    className={`org-type-card ${data.orgType === o.id ? 'selected' : ''}`}
                    onClick={() => setData({...data, orgType: o.id})}
                  >
                    <div className="org-type-header">
                      <div className="org-type-icon"><o.icon size={20} /></div>
                      {data.orgType === o.id && <div className="org-type-check"><Check size={12} /></div>}
                    </div>
                    <h3>{o.title}</h3>
                    <p>{o.desc}</p>
                    <ul className="org-type-features">
                      {o.features.map((f, i) => (
                        <li key={i}><Check size={11} /> {f}</li>
                      ))}
                    </ul>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 1: Details */}
          {step === 1 && (
            <div className="ob-step fade-in">
              <h2>Tell us about {data.orgType === 'agent' ? 'yourself' : 'your organization'}</h2>
              <p className="ob-desc">We'll use this to set up your workspace.</p>
              <div className="ob-form">
                <div className="ob-field">
                  <label>{data.orgType === 'agent' ? 'Display name' : 'Organization name'}</label>
                  <input
                    type="text"
                    placeholder={data.orgType === 'agent' ? 'e.g. Kerwin Alabi' : 'e.g. Elite Sports Management'}
                    value={data.orgName}
                    onChange={e => setData({...data, orgName: e.target.value})}
                  />
                </div>
                
                {(data.orgType === 'agent' || data.orgType === 'agency') && (
                  <div className="ob-field">
                    <label>FIFA Agent License (optional)</label>
                    <input
                      type="text"
                      placeholder="e.g. FIFA-2025-XXXX"
                      value={data.license}
                      onChange={e => setData({...data, license: e.target.value})}
                    />
                    <span className="ob-field-hint">Adding your license verifies your profile in the network</span>
                  </div>
                )}

                <div className="ob-field">
                  <label>Team size</label>
                  <div className="team-size-grid">
                    {TEAM_SIZE.map(t => (
                      <button
                        key={t.id}
                        className={`team-size-btn ${data.teamSize === t.id ? 'selected' : ''}`}
                        onClick={() => setData({...data, teamSize: t.id})}
                      >
                        <span className="team-size-label">{t.label}</span>
                        <span className="team-size-desc">{t.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Markets */}
          {step === 2 && (
            <div className="ob-step fade-in">
              <h2>Select your markets</h2>
              <p className="ob-desc">Choose the leagues and regions you operate in. You can change this later.</p>
              <div className="markets-grid">
                {MARKETS.map(m => (
                  <button
                    key={m.id}
                    className={`market-btn ${data.markets.includes(m.id) ? 'selected' : ''}`}
                    onClick={() => toggleMarket(m.id)}
                  >
                    <span className="market-flag">{m.flag}</span>
                    <div className="market-info">
                      <span className="market-name">{m.name}</span>
                      <span className="market-league">{m.league}</span>
                    </div>
                    {data.markets.includes(m.id) && <Check size={14} className="market-check" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Quick Setup */}
          {step === 3 && (
            <div className="ob-step fade-in">
              <h2>Quick setup</h2>
              <p className="ob-desc">Optional steps to get you started faster.</p>
              <div className="setup-cards">
                <div className="setup-card">
                  <div className="setup-card-icon"><Upload size={20} /></div>
                  <div className="setup-card-content">
                    <h3>Import existing data</h3>
                    <p>Import players, contacts, and deals from a spreadsheet or another CRM.</p>
                    <div className="setup-import-options">
                      <button className="setup-import-btn">
                        <Database size={14} /> Import from CSV
                      </button>
                      <button className="setup-import-btn">
                        <Database size={14} /> Import from Excel
                      </button>
                    </div>
                  </div>
                </div>

                <div className="setup-card">
                  <div className="setup-card-icon"><UserPlus size={20} /></div>
                  <div className="setup-card-content">
                    <h3>Invite your team</h3>
                    <p>Add colleagues to your workspace. They'll receive an email invite.</p>
                    <textarea
                      className="setup-invite-input"
                      placeholder="Enter email addresses, separated by commas..."
                      value={data.inviteEmails}
                      onChange={e => setData({...data, inviteEmails: e.target.value})}
                      rows={3}
                    />
                  </div>
                </div>

                <div className="setup-card">
                  <div className="setup-card-icon"><Globe size={20} /></div>
                  <div className="setup-card-content">
                    <h3>Connect integrations</h3>
                    <p>Connect your email, calendar, and data sources for a seamless workflow.</p>
                    <div className="setup-integrations">
                      <button className="setup-integration">📧 Gmail</button>
                      <button className="setup-integration">📅 Google Calendar</button>
                      <button className="setup-integration">💬 Slack</button>
                      <button className="setup-integration">📊 TransferMarkt</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Ready */}
          {step === 4 && (
            <div className="ob-step ob-ready fade-in">
              <div className="ready-icon">
                <Sparkles size={32} />
              </div>
              <h2>Welcome to Inter!</h2>
              <p className="ob-desc">Your workspace is ready. Here's what you can do next:</p>
              <div className="ready-actions">
                <div className="ready-action">
                  <Users size={18} />
                  <div>
                    <h4>Add your first players</h4>
                    <p>Start building your player database — managed, mandate, and potential.</p>
                  </div>
                </div>
                <div className="ready-action">
                  <Shield size={18} />
                  <div>
                    <h4>Build a shadow squad</h4>
                    <p>Create your first shadow squad to present to clubs.</p>
                  </div>
                </div>
                <div className="ready-action">
                  <Zap size={18} />
                  <div>
                    <h4>Meet José, your AI copilot</h4>
                    <p>Ask José to find players, match requests, or draft proposals — all from one chat.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="onboarding-nav">
          {step > 0 && step < 4 ? (
            <button className="ob-nav-back" onClick={prev}>
              <ArrowLeft size={14} /> Back
            </button>
          ) : <div />}
          <button className="ob-nav-next" onClick={next} disabled={!canNext()}>
            {step === 4 ? 'Enter Inter' : step === 3 ? 'Finish setup' : 'Continue'}
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  )
}
