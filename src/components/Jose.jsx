import { useState, useRef, useEffect } from 'react'
import { Sparkles, X, Send, Minimize2, Maximize2, Users, Inbox, Globe, Shield, FileText, Activity, Zap, BarChart3, Search, ArrowRight, Bot, Lightbulb, ChevronRight } from 'lucide-react'
import './Jose.css'

const SUGGESTIONS = [
  { icon: Search, text: 'Find CBs under 23 with expiring contracts', category: 'search' },
  { icon: Users, text: 'Match players to AC Milan request', category: 'match' },
  { icon: BarChart3, text: 'Show my deal pipeline summary', category: 'report' },
  { icon: Lightbulb, text: 'Draft a proposal for Tottenham', category: 'action' },
  { icon: Zap, text: 'What tasks need my attention today?', category: 'tasks' },
  { icon: Globe, text: 'Who in my network specializes in Serie A?', category: 'network' },
]

const simulateResponse = (input) => {
  const lower = input.toLowerCase()

  if (lower.includes('cb') || lower.includes('defender') || lower.includes('centre-back')) {
    return {
      text: "I found **3 centre-backs** matching your criteria:",
      cards: [
        { title: 'Joško Gvardiol', subtitle: 'CB · Man City · Age 22', detail: 'Contract: 2029 · €75M', status: 'managed', color: 'green' },
        { title: 'Leny Yoro', subtitle: 'CB · Man United · Age 19', detail: 'Contract: 2030 · €55M', status: 'mandate', color: 'orange' },
        { title: 'Castello Lukeba', subtitle: 'CB · RB Leipzig · Age 21', detail: 'Contract: 2028 · €45M', status: 'potential', color: 'blue' },
      ],
      followUp: 'Want me to compare their stats or draft a proposal for any of them?'
    }
  }

  if (lower.includes('match') || lower.includes('ac milan') || lower.includes('request')) {
    return {
      text: "Based on **AC Milan's ST request** (young, min 10 goals, U23, €30-40M budget):",
      cards: [
        { title: 'Marcus Thuram', subtitle: '13 goals · ST · Inter Milan', detail: '€65M — above budget, but loan-to-buy possible', status: '92% match', color: 'green' },
        { title: 'Alejandro Garnacho', subtitle: '8 goals · LW/ST · Napoli', detail: '€45M — close to budget, versatile', status: '78% match', color: 'orange' },
      ],
      followUp: 'I can draft proposals for both or suggest a negotiation strategy for the Thuram deal.',
      actions: [
        { label: 'Draft proposal', action: 'draft_proposal' },
        { label: 'Compare stats', action: 'compare' },
      ]
    }
  }

  if (lower.includes('pipeline') || lower.includes('deal') || lower.includes('summary')) {
    return {
      text: "Here's your **deal pipeline summary** as of today:",
      stats: [
        { label: 'Active Deals', value: '4', trend: '+2 this week' },
        { label: 'Pending Proposals', value: '6', trend: '3 awaiting response' },
        { label: 'Closing This Month', value: '2', trend: '€1.2M commission' },
        { label: 'At Risk', value: '1', trend: 'Yoro deal — contract dispute' },
      ],
      followUp: 'The Mathys Tel loan deal is closest to completion. Want me to prepare final term sheets?'
    }
  }

  if (lower.includes('proposal') || lower.includes('draft') || lower.includes('tottenham')) {
    return {
      text: "I'll draft a **proposal for Tottenham's CB request** (€50-70M, ball-playing, left-footed):",
      document: {
        title: 'Player Proposal — Tottenham Hotspur',
        sections: [
          { heading: 'Recommended Player', content: 'Joško Gvardiol — CB, 22, Croatia' },
          { heading: 'Fit Assessment', content: 'Left-footed, elite ball progression (93rd percentile), Premier League proven' },
          { heading: 'Valuation', content: '€75M market value — within upper budget range' },
          { heading: 'Proposed Structure', content: '€65M + €10M performance bonuses, 5-year contract' },
        ]
      },
      followUp: 'Want me to refine this, add comparison players, or send it directly to your Tottenham contact?',
      actions: [
        { label: 'Send to contact', action: 'send' },
        { label: 'Refine proposal', action: 'refine' },
        { label: 'Add comparisons', action: 'compare' },
      ]
    }
  }

  if (lower.includes('task') || lower.includes('attention') || lower.includes('today')) {
    return {
      text: "Here's what needs your attention **today**:",
      tasks: [
        { title: 'Video call with Juventus SD', time: 'In 2 hours', priority: 'high', type: 'meeting' },
        { title: 'Mathys Tel loan — final terms due', time: 'End of day', priority: 'high', type: 'deal' },
        { title: 'Respond to AC Milan proposal feedback', time: 'Pending since yesterday', priority: 'medium', type: 'proposal' },
        { title: 'Gvardiol commission invoice #47', time: 'Payment due in 3 days', priority: 'medium', type: 'legal' },
        { title: 'Lunch with Fali Ramadani', time: 'Tomorrow 12:30', priority: 'low', type: 'meeting' },
      ],
      followUp: 'Want me to prepare briefing notes for the Juventus call?'
    }
  }

  if (lower.includes('network') || lower.includes('serie a') || lower.includes('agent')) {
    return {
      text: "Agents in your network with **Serie A expertise**:",
      cards: [
        { title: 'Jorge Mendes', subtitle: 'Gestifute · Lisbon', detail: '47 players · Last contact: 2 days ago', status: 'elite', color: 'orange' },
        { title: 'Fali Ramadani', subtitle: 'ACTA Sports · Munich', detail: '31 players · Last contact: 6 days ago', status: 'elite', color: 'orange' },
      ],
      followUp: 'Fali has strong connections at Juventus and AC Milan. Want me to set up an introduction or share player profiles with him?'
    }
  }

  return {
    text: `I understand you're asking about **"${input}"**. Let me help with that.`,
    followUp: 'Could you be more specific? I can help with player searches, deal analysis, proposal drafting, task management, or network queries.',
    suggestions: true
  }
}

export default function Jose() {
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: {
        text: "Hey! I'm **José**, your AI copilot. I can help you search players, match requests, draft proposals, analyze deals, and manage your daily workflow. What do you need?",
        suggestions: true
      }
    }
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const messagesEnd = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    messagesEnd.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  const handleSend = (text) => {
    const msg = text || input.trim()
    if (!msg) return

    setMessages(prev => [...prev, { role: 'user', content: { text: msg } }])
    setInput('')
    setTyping(true)

    setTimeout(() => {
      const response = simulateResponse(msg)
      setMessages(prev => [...prev, { role: 'assistant', content: response }])
      setTyping(false)
    }, 800 + Math.random() * 1200)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  if (!open) {
    return (
      <button className="jose-fab" onClick={() => setOpen(true)}>
        <Sparkles size={20} />
        <span className="jose-fab-label">José</span>
      </button>
    )
  }

  return (
    <div className={`jose-panel ${expanded ? 'expanded' : ''}`}>
      <div className="jose-header">
        <div className="jose-header-left">
          <div className="jose-avatar"><Sparkles size={14} /></div>
          <div>
            <span className="jose-name">José</span>
            <span className="jose-status">AI Copilot · Online</span>
          </div>
        </div>
        <div className="jose-header-actions">
          <button onClick={() => setExpanded(!expanded)}>
            {expanded ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
          </button>
          <button onClick={() => setOpen(false)}><X size={14} /></button>
        </div>
      </div>

      <div className="jose-messages">
        {messages.map((msg, i) => (
          <div key={i} className={`jose-msg ${msg.role}`}>
            {msg.role === 'assistant' && (
              <div className="jose-msg-avatar"><Bot size={12} /></div>
            )}
            <div className="jose-msg-content">
              <div className="jose-msg-text" dangerouslySetInnerHTML={{
                __html: msg.content.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              }} />

              {/* Cards */}
              {msg.content.cards && (
                <div className="jose-cards">
                  {msg.content.cards.map((c, j) => (
                    <div key={j} className="jose-card">
                      <div className="jose-card-top">
                        <span className="jose-card-title">{c.title}</span>
                        <span className={`jose-card-status ${c.color}`}>{c.status}</span>
                      </div>
                      <span className="jose-card-subtitle">{c.subtitle}</span>
                      <span className="jose-card-detail">{c.detail}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Stats */}
              {msg.content.stats && (
                <div className="jose-stats">
                  {msg.content.stats.map((s, j) => (
                    <div key={j} className="jose-stat">
                      <span className="jose-stat-value">{s.value}</span>
                      <span className="jose-stat-label">{s.label}</span>
                      <span className="jose-stat-trend">{s.trend}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Document */}
              {msg.content.document && (
                <div className="jose-document">
                  <div className="jose-doc-title">
                    <FileText size={12} />
                    {msg.content.document.title}
                  </div>
                  {msg.content.document.sections.map((s, j) => (
                    <div key={j} className="jose-doc-section">
                      <span className="jose-doc-heading">{s.heading}</span>
                      <span className="jose-doc-content">{s.content}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tasks */}
              {msg.content.tasks && (
                <div className="jose-tasks">
                  {msg.content.tasks.map((t, j) => (
                    <div key={j} className="jose-task">
                      <div className={`jose-task-priority ${t.priority}`} />
                      <div className="jose-task-info">
                        <span className="jose-task-title">{t.title}</span>
                        <span className="jose-task-time">{t.time}</span>
                      </div>
                      <span className="jose-task-type">{t.type}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Follow up */}
              {msg.content.followUp && (
                <p className="jose-followup">{msg.content.followUp}</p>
              )}

              {/* Actions */}
              {msg.content.actions && (
                <div className="jose-actions">
                  {msg.content.actions.map((a, j) => (
                    <button key={j} className="jose-action-btn" onClick={() => handleSend(a.label)}>
                      {a.label}
                    </button>
                  ))}
                </div>
              )}

              {/* Suggestions */}
              {msg.content.suggestions && (
                <div className="jose-suggestions">
                  {SUGGESTIONS.map((s, j) => (
                    <button key={j} className="jose-suggestion" onClick={() => handleSend(s.text)}>
                      <s.icon size={13} />
                      <span>{s.text}</span>
                      <ChevronRight size={12} />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {typing && (
          <div className="jose-msg assistant">
            <div className="jose-msg-avatar"><Bot size={12} /></div>
            <div className="jose-typing">
              <span /><span /><span />
            </div>
          </div>
        )}
        <div ref={messagesEnd} />
      </div>

      <div className="jose-input-area">
        <div className="jose-input-wrap">
          <input
            ref={inputRef}
            type="text"
            placeholder="Ask José anything..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="jose-send" onClick={() => handleSend()} disabled={!input.trim()}>
            <Send size={14} />
          </button>
        </div>
        <span className="jose-input-hint">José can search players, match requests, draft proposals & more</span>
      </div>
    </div>
  )
}
