import { Link } from 'react-router-dom'
import { 
  Users, Inbox, Globe, Activity, Shield, FileText, Sparkles, 
  ArrowRight, Check, ChevronRight, Zap, BarChart3, Lock, 
  MessageSquare, Search, Workflow, Bot, Database, LineChart,
  Star, Play, ExternalLink, Menu, X
} from 'lucide-react'
import { useState } from 'react'
import './HomePage.css'

const features = [
  {
    icon: Users,
    title: 'Player Management',
    desc: 'Efficiently organize managed, mandate and potential players. Track contracts, market values, stats and career trajectories — all in one intelligent database.',
    link: '/app/players',
    color: 'accent'
  },
  {
    icon: Inbox,
    title: 'Club Requests',
    desc: 'Centralized storage for all club requests. Share with partners without hundreds of calls. Automated tracking ensures you never miss an opportunity.',
    link: '/app/requests',
    color: 'blue'
  },
  {
    icon: Globe,
    title: 'Agent Network',
    desc: 'Expand your network through direct contact with our trusted community of hundreds of agents across the global football market.',
    link: '/app/network',
    color: 'green'
  },
  {
    icon: Activity,
    title: 'Activity Tracker',
    desc: 'Stay on top of all your current, pending, and upcoming tasks and deals. Track player proposals, meetings, and contract negotiations in real-time.',
    link: '/app/activities',
    color: 'orange'
  },
  {
    icon: Shield,
    title: 'Shadow Squads',
    desc: 'A smart player management tool to build shadow squads and showcase your players at their best. Present ready-made solutions to clubs.',
    link: '/app/shadow-squads',
    color: 'purple'
  },
  {
    icon: FileText,
    title: 'Legal & Documents',
    desc: 'Store, upload and track all your player documents effortlessly. Representation agreements, mandates, invoices — never miss a paycheck.',
    link: '/app/legal',
    color: 'red'
  }
]

const platformFeatures = [
  {
    icon: Workflow,
    title: 'Automate Everything',
    desc: 'Automate even the most complex transfer processes with our powerful, intelligent automation engine. From proposal tracking to contract reminders.',
    details: [
      'Automated deal pipeline workflows',
      'Contract expiry alerts & renewal reminders',
      'Auto-match players to club requests',
      'Commission tracking & payment scheduling'
    ]
  },
  {
    icon: Bot,
    title: 'Deploy AI',
    desc: 'Ask Inter AI to surface insights, match players to requests, analyze market trends, and automate complex tasks like scouting and player valuation.',
    details: [
      'Natural language search across your data',
      'AI-powered player-to-request matching',
      'Market value trend analysis',
      'Automated scouting report summaries'
    ]
  },
  {
    icon: Database,
    title: 'Connect Any Data',
    desc: 'Sync scouting data, performance stats, transfer history, and everything in between — a real-time single source of truth for your agency.',
    details: [
      'Integration with major data providers',
      'Real-time performance stats sync',
      'Transfer market data feeds',
      'Custom data model for your workflow'
    ]
  },
  {
    icon: LineChart,
    title: 'Powerful Reporting',
    desc: 'Create real-time, detailed reports on deals, commissions, player portfolios, and market trends. Visualize and get deep insights in seconds.',
    details: [
      'Deal pipeline analytics',
      'Commission & revenue dashboards',
      'Player portfolio performance',
      'Market trend visualizations'
    ]
  }
]

const stats = [
  { value: '2,400+', label: 'Agents worldwide' },
  { value: '€12B+', label: 'Deals tracked' },
  { value: '85K+', label: 'Players in database' },
  { value: '140+', label: 'Countries covered' },
]

const testimonials = [
  {
    quote: "Inter CRM transformed how we manage our player portfolio. What used to take hours of spreadsheet work now happens automatically.",
    name: "Ricardo Mendes",
    role: "Licensed Agent · Lisbon",
    avatar: "R"
  },
  {
    quote: "The shadow squad feature alone has helped us close 3 deals this window. Clubs love seeing ready-made solutions presented professionally.",
    name: "Sophie Laurent",
    role: "Agent · Paris",
    avatar: "S"
  },
  {
    quote: "Before Inter, we were managing requests across WhatsApp, email and spreadsheets. Now everything is in one place with automated tracking.",
    name: "Marco Bianchi",
    role: "Agency Director · Milan",
    avatar: "M"
  }
]

const pricingPlans = [
  {
    name: 'Free',
    price: '€0',
    period: '',
    desc: 'For individual agents getting started',
    features: ['Up to 25 players', 'Basic request tracking', 'Network directory access', 'Up to 2 seats'],
    cta: 'Get Started',
    popular: false
  },
  {
    name: 'Pro',
    price: '€49',
    period: '/user/month',
    desc: 'For growing agencies scaling up',
    features: ['Unlimited players', 'Shadow squad builder', 'AI-powered matching', 'Advanced automations', 'Priority support', 'Legal document vault'],
    cta: 'Start Free Trial',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'For top agencies needing full control',
    features: ['Everything in Pro', 'Dedicated account manager', 'Custom integrations', 'Advanced security & SSO', 'API access', 'White-label options'],
    cta: 'Contact Sales',
    popular: false
  }
]

const logos = ['Premier League', 'La Liga', 'Serie A', 'Bundesliga', 'Ligue 1', 'Champions League']

export default function HomePage() {
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <div className="home">
      {/* ===== NAVBAR ===== */}
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-left">
            <Link to="/" className="nav-logo">
              <div className="nav-logo-icon">I</div>
              <span className="nav-logo-text">Inter</span>
            </Link>
            <div className="nav-links">
              <a href="#platform">Platform</a>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#testimonials">Customers</a>
            </div>
          </div>
          <div className="nav-right">
            <Link to="/app" className="nav-link-btn">Sign in</Link>
            <Link to="/app" className="nav-cta-btn">Start for free</Link>
          </div>
          <button className="mobile-menu-btn" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {mobileMenu && (
          <div className="mobile-nav">
            <a href="#platform">Platform</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#testimonials">Customers</a>
            <Link to="/app" className="nav-cta-btn mobile">Start for free</Link>
          </div>
        )}
      </nav>

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-badge">
            <Sparkles size={14} />
            <span>Now with AI-powered player matching</span>
          </div>
          <h1 className="hero-title">
            Football agency<br />
            <span className="hero-gradient">intelligence.</span>
          </h1>
          <p className="hero-subtitle">
            Inter is the AI-native CRM built for football agents. Manage players, track deals, 
            connect with agents worldwide, and close transfers faster — all in one platform.
          </p>
          <div className="hero-actions">
            <Link to="/app" className="btn-hero-primary">
              Start for free <ArrowRight size={16} />
            </Link>
            <a href="#platform" className="btn-hero-secondary">
              <Play size={14} /> See how it works
            </a>
          </div>

          {/* Hero Visual - Mock CRM Interface */}
          <div className="hero-visual">
            <div className="hero-browser">
              <div className="browser-dots">
                <span /><span /><span />
              </div>
              <div className="browser-content">
                <div className="mock-sidebar">
                  <div className="mock-logo"><div className="mock-logo-icon">I</div><span>Inter</span></div>
                  <div className="mock-nav-items">
                    <div className="mock-nav-item active"><BarChart3 size={13} /><span>Dashboard</span></div>
                    <div className="mock-nav-item"><Users size={13} /><span>Players</span></div>
                    <div className="mock-nav-item"><Inbox size={13} /><span>Requests</span></div>
                    <div className="mock-nav-item"><Globe size={13} /><span>Network</span></div>
                    <div className="mock-nav-item"><Activity size={13} /><span>Activities</span></div>
                    <div className="mock-nav-item"><Shield size={13} /><span>Shadow Squads</span></div>
                  </div>
                </div>
                <div className="mock-main">
                  <div className="mock-header">
                    <span className="mock-title">Dashboard</span>
                    <div className="mock-header-right">
                      <div className="mock-search"><Search size={11} /><span>Search...</span></div>
                    </div>
                  </div>
                  <div className="mock-stats">
                    <div className="mock-stat"><span className="mock-stat-value">12</span><span className="mock-stat-label">Managed Players</span></div>
                    <div className="mock-stat"><span className="mock-stat-value">8</span><span className="mock-stat-label">Active Requests</span></div>
                    <div className="mock-stat"><span className="mock-stat-value">€2.4M</span><span className="mock-stat-label">Revenue YTD</span></div>
                    <div className="mock-stat"><span className="mock-stat-value">47</span><span className="mock-stat-label">Network Contacts</span></div>
                  </div>
                  <div className="mock-cards">
                    <div className="mock-card">
                      <div className="mock-card-header">Recent Activity</div>
                      <div className="mock-card-row"><span className="mock-dot green" /><span>Proposed Thuram to AC Milan</span></div>
                      <div className="mock-card-row"><span className="mock-dot blue" /><span>Video call with Juventus SD</span></div>
                      <div className="mock-card-row"><span className="mock-dot purple" /><span>Contract renewal — Zaïre-Emery</span></div>
                    </div>
                    <div className="mock-card">
                      <div className="mock-card-header">Active Requests</div>
                      <div className="mock-card-row"><span className="mock-badge red">High</span><span>AC Milan — ST — €30-40M</span></div>
                      <div className="mock-card-row"><span className="mock-badge red">High</span><span>Tottenham — CB — €50-70M</span></div>
                      <div className="mock-card-row"><span className="mock-badge yellow">Med</span><span>Juventus — CM — €25-35M</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SOCIAL PROOF TICKER ===== */}
      <section className="social-proof">
        <p className="social-proof-label">Trusted by agents operating across the world's top leagues</p>
        <div className="logo-ticker">
          {logos.map((logo, i) => (
            <div key={i} className="logo-item">{logo}</div>
          ))}
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="stats-bar">
        <div className="stats-bar-inner">
          {stats.map((s, i) => (
            <div key={i} className="stat-block">
              <div className="stat-block-value">{s.value}</div>
              <div className="stat-block-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PLATFORM SECTION ===== */}
      <section className="section" id="platform">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Platform</span>
            <h2 className="section-title">The transfer market<br />at full throttle.</h2>
            <p className="section-subtitle">
              Execute your transfer strategy with precision. Design powerful workflows, deploy AI, 
              integrate your data and build detailed reports — all in one platform.
            </p>
          </div>

          <div className="platform-grid">
            {platformFeatures.map((f, i) => (
              <div key={i} className="platform-card">
                <div className={`platform-icon-wrap`}>
                  <f.icon size={20} />
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
                <ul className="platform-details">
                  {f.details.map((d, j) => (
                    <li key={j}><Check size={14} className="check-icon" />{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES SECTION (ENSK.AI CORE) ===== */}
      <section className="section section-dark" id="features">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Features</span>
            <h2 className="section-title">Everything a football<br />agent needs. Nothing they don't.</h2>
            <p className="section-subtitle">
              Purpose-built for the football industry. Every feature designed around how agents 
              actually work — from player management to deal closing.
            </p>
          </div>

          <div className="features-grid">
            {features.map((f, i) => (
              <Link to={f.link} key={i} className={`feature-card feature-${f.color}`}>
                <div className={`feature-icon ${f.color}`}>
                  <f.icon size={20} />
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
                <span className="feature-link">
                  Explore <ChevronRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DATA MODEL SECTION ===== */}
      <section className="section">
        <div className="section-inner">
          <div className="split-section">
            <div className="split-content">
              <span className="section-tag">Flexible Data Model</span>
              <h2 className="section-title left">A seismic shift in<br />football CRM flexibility.</h2>
              <p className="split-desc">
                Inter's powerful data model adapts to how your agency works, not the other way around. 
                Whether you manage 5 players or 500, represent one market or ten — your workflow, 
                perfectly reflected in your CRM.
              </p>
              <ul className="split-list">
                <li><Check size={16} className="check-icon" /> Custom player attributes & tags</li>
                <li><Check size={16} className="check-icon" /> Flexible deal pipeline stages</li>
                <li><Check size={16} className="check-icon" /> Multi-market & multi-currency support</li>
                <li><Check size={16} className="check-icon" /> Role-based views for agents & scouts</li>
              </ul>
              <Link to="/app" className="btn-section">
                Explore our data model <ArrowRight size={14} />
              </Link>
            </div>
            <div className="split-visual">
              <div className="data-model-visual">
                <div className="dm-node dm-player">
                  <Users size={14} /> Player
                  <div className="dm-fields">
                    <span>Name</span><span>Position</span><span>Value</span><span>Contract</span>
                  </div>
                </div>
                <div className="dm-connector" />
                <div className="dm-node dm-deal">
                  <Zap size={14} /> Deal
                  <div className="dm-fields">
                    <span>Club</span><span>Fee</span><span>Stage</span><span>Commission</span>
                  </div>
                </div>
                <div className="dm-connector" />
                <div className="dm-node dm-contact">
                  <MessageSquare size={14} /> Contact
                  <div className="dm-fields">
                    <span>Agent</span><span>Club SD</span><span>Scout</span><span>Lawyer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== AI SECTION ===== */}
      <section className="section section-dark">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">AI-Powered</span>
            <h2 className="section-title">Simply powerful<br />football intelligence.</h2>
            <p className="section-subtitle">
              Powered by Universal Context™ — every answer sourced from your actual CRM records, 
              transfer data, and player knowledge. Not AI invention.
            </p>
          </div>

          <div className="ai-showcase">
            <div className="ai-chat-mock">
              <div className="ai-message user">
                <span>Which of my players would be a good fit for AC Milan's striker request?</span>
              </div>
              <div className="ai-message assistant">
                <div className="ai-avatar"><Sparkles size={12} /></div>
                <div className="ai-response">
                  <p>Based on AC Milan's requirements (young striker, min 10 goals, U23, budget €30-40M), I'd recommend:</p>
                  <div className="ai-card">
                    <strong>Marcus Thuram</strong> — 13 goals this season, ST, valued at €65M (above budget but negotiable with loan structure)
                  </div>
                  <div className="ai-card">
                    <strong>Alejandro Garnacho</strong> — 8 goals, LW/ST capable, valued at €45M, strong 1v1 stats
                  </div>
                  <p className="ai-note">I've also flagged 2 players from your network partners that match. Want me to draft proposals?</p>
                </div>
              </div>
            </div>

            <div className="ai-features-list">
              <div className="ai-feature">
                <Search size={16} />
                <div>
                  <h4>Natural Language Search</h4>
                  <p>Search your entire database using plain language. "Show me all CBs under 23 with contracts expiring in 2026."</p>
                </div>
              </div>
              <div className="ai-feature">
                <Zap size={16} />
                <div>
                  <h4>Smart Matching</h4>
                  <p>AI automatically matches your players to incoming club requests based on requirements, budget, and fit.</p>
                </div>
              </div>
              <div className="ai-feature">
                <BarChart3 size={16} />
                <div>
                  <h4>Market Intelligence</h4>
                  <p>Get AI-powered insights on market trends, optimal transfer timing, and valuation benchmarks.</p>
                </div>
              </div>
              <div className="ai-feature">
                <Lock size={16} />
                <div>
                  <h4>Your Data, Protected</h4>
                  <p>AI follows your existing permissions. Everyone sees only what they're supposed to. Your competitive edge stays yours.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SCALE & SECURITY ===== */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <h2 className="section-title">The system of action for<br />the next generation of agents.</h2>
            <p className="section-subtitle">
              Inter is built for scale. Our agents sort through thousands of players and hundreds of deals 
              with sub-50ms latency.
            </p>
          </div>

          <div className="security-grid">
            <div className="security-card">
              <Lock size={24} />
              <h3>Scale with security</h3>
              <p>Inter is audited and certified by industry-leading third party standards.</p>
              <div className="cert-badges">
                <span className="cert">GDPR</span>
                <span className="cert">FIFA</span>
                <span className="cert">ISO 27001</span>
              </div>
            </div>
            <div className="security-card">
              <Zap size={24} />
              <h3>Built for performance</h3>
              <p>Sub-50ms search across your entire database. Real-time sync across all devices.</p>
              <div className="perf-bars">
                <div className="perf-bar"><span className="perf-label">Search</span><div className="perf-track"><div className="perf-fill" style={{width:'95%'}} /></div><span className="perf-val">&lt;50ms</span></div>
                <div className="perf-bar"><span className="perf-label">Sync</span><div className="perf-track"><div className="perf-fill" style={{width:'90%'}} /></div><span className="perf-val">Real-time</span></div>
                <div className="perf-bar"><span className="perf-label">Uptime</span><div className="perf-track"><div className="perf-fill" style={{width:'99%'}} /></div><span className="perf-val">99.99%</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section section-dark" id="testimonials">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Customers</span>
            <h2 className="section-title">The CRM behind<br />thousands of agents.</h2>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="var(--orange)" stroke="var(--orange)" />)}
                </div>
                <p className="testimonial-quote">"{t.quote}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.avatar}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className="section" id="pricing">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Pricing</span>
            <h2 className="section-title">From solo agent to<br />global agency.</h2>
            <p className="section-subtitle">
              Designed for every stage of your journey. Start today, no credit card required.
            </p>
          </div>

          <div className="pricing-grid">
            {pricingPlans.map((p, i) => (
              <div key={i} className={`pricing-card ${p.popular ? 'popular' : ''}`}>
                {p.popular && <div className="popular-badge">Most Popular</div>}
                <h3>{p.name}</h3>
                <div className="pricing-price">
                  <span className="price-value">{p.price}</span>
                  {p.period && <span className="price-period">{p.period}</span>}
                </div>
                <p className="pricing-desc">{p.desc}</p>
                <Link to="/app" className={`pricing-cta ${p.popular ? 'primary' : 'secondary'}`}>
                  {p.cta}
                </Link>
                <ul className="pricing-features">
                  {p.features.map((f, j) => (
                    <li key={j}><Check size={14} className="check-icon" />{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta-section">
        <div className="cta-inner">
          <h2>Start closing deals faster.</h2>
          <p>Join thousands of football agents who use Inter to manage their careers. Free to start, powerful to scale.</p>
          <div className="cta-actions">
            <Link to="/app" className="btn-hero-primary">
              Start for free <ArrowRight size={16} />
            </Link>
            <a href="#platform" className="btn-hero-secondary">
              Talk to sales <MessageSquare size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="nav-logo">
                <div className="nav-logo-icon">I</div>
                <span className="nav-logo-text">Inter</span>
              </div>
              <p className="footer-tagline">The AI-native CRM for football agents.</p>
            </div>
            <div className="footer-links-grid">
              <div className="footer-col">
                <h4>Platform</h4>
                <a href="#features">Players</a>
                <a href="#features">Requests</a>
                <a href="#features">Network</a>
                <a href="#features">Shadow Squads</a>
                <a href="#features">Legal</a>
              </div>
              <div className="footer-col">
                <h4>Resources</h4>
                <a href="#">Help Center</a>
                <a href="#">API Docs</a>
                <a href="#">Changelog</a>
                <a href="#">System Status</a>
              </div>
              <div className="footer-col">
                <h4>Company</h4>
                <a href="#">About</a>
                <a href="#">Careers</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
              </div>
              <div className="footer-col">
                <h4>Legal</h4>
                <a href="#">Terms</a>
                <a href="#">Privacy</a>
                <a href="#">Security</a>
                <a href="#">GDPR</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Inter CRM. All rights reserved.</span>
            <div className="footer-social">
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
              <a href="#">YouTube</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
