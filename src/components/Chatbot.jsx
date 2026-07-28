import { useState, useRef, useEffect, useCallback } from 'react'
import './Chatbot.css'

const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY || ''
const API_URL = 'https://openrouter.ai/api/v1/chat/completions'

const SYSTEM_PROMPT = `Tu es Chamouss, l'assistant virtuel de SupraMax Energy, une entreprise tunisienne spécialisée en ingénierie photovoltaïque premium.

## À propos de SupraMax Energy
- Basée en Tunisie
- Spécialiste en installations solaires photovoltaïques
- S'adresse au résidentiel, commercial et industriel
- Contact : +216 50 910 808 (WhatsApp) | contact@supramax.energy
- Site : supramax.energy

## Services proposés
1. **Étude & Conception** — Audit initial, étude de faisabilité, dimensionnement optimal
2. **Installation photovoltaïque** — Pose de panneaux sur toitures, ombrières et sol, clé en main
3. **Stockage & Continuité** — Batteries lithium, systèmes autonomes, backup intelligent
4. **Monitoring & Maintenance** — Supervision 24/7, alertes prédictives, maintenance préventive

## Domaines d'intervention
- Résidentiel premium (villas, résidences)
- Commercial & entreprises (bureaux, commerces)
- Sites industriels (grande échelle, logistique)

## Compétences
- 150+ projets réalisés
- 100% disponibilité garantie
- 1000 KWC installés
- Garantie 25 ans
- Équipe technique qualifiée

## Panneaux solaires photovoltaïques — Informations
- Les panneaux photovoltaïques convertissent la lumière du soleil en électricité
- Durée de vie moyenne : 25-30 ans
- Économie possible : jusqu'à 90% sur la facture d'électricité
- Installation possible sur toiture, façade, ombrière ou au sol
- Autonomie énergétique et réduction de l'empreinte carbone
- Le solaire fonctionne même les jours nuageux (production réduite)
- Retour sur investissement généralement entre 5 et 8 ans en Tunisie

## Ton et style
- Sois chaleureux, professionnel et accessible
- Utilise un langage simple et clair
- Réponds en français par défaut, mais adapte-toi à la langue de l'utilisateur
- Sois concis mais complet
- Guide l'utilisateur vers les services ou le contact si nécessaire
- N'invente jamais de prix — redirige vers le formulaire de contact pour un devis personnalisé

## Règles
- Ne partage jamais de fausses informations
- Si tu ne sais pas, dis-le honnêtement
- Toujours orienter vers SupraMax Energy pour les besoins concrets
- Le numéro WhatsApp pour contact direct est : +216 50 910 808`

const QUICK_REPLIES = [
  { label: 'Vos services', text: 'Quels sont vos services ?' },
  { label: 'Devis', text: 'Je voudrais un devis pour une installation solaire' },
  { label: 'Panneaux', text: 'Comment fonctionnent les panneaux solaires ?' },
  { label: 'Contact', text: 'Comment vous contacter ?' },
]

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [showAnnouncement, setShowAnnouncement] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Bonjour ! Je suis **Chamouss**, votre assistant SupraMax Energy. ☀️\n\nComment puis-je vous aider aujourd\'hui ?',
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => { scrollToBottom() }, [messages, loading, scrollToBottom])
  useEffect(() => { if (isOpen) inputRef.current?.focus() }, [isOpen])

  useEffect(() => {
    const timer = setTimeout(() => setShowAnnouncement(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (showAnnouncement) {
      const timer = setTimeout(() => setShowAnnouncement(false), 6000)
      return () => clearTimeout(timer)
    }
  }, [showAnnouncement])

  const sendMessage = async (text) => {
    const msg = (text || input).trim()
    if (!msg || loading) return

    if (!API_KEY) {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: "L'assistant n'est pas configuré côté API. Ajoutez VITE_OPENROUTER_API_KEY dans votre fichier d'environnement, puis réessayez." },
      ])
      return
    }

    const userMsg = { role: 'user', content: msg }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setLoading(true)
    setShowAnnouncement(false)

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
          'HTTP-Referer': window.location.origin,
          'X-Title': 'SupraMax Energy',
        },
        body: JSON.stringify({
          model: 'google/gemma-4-26b-a4b-it:free',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...messages.slice(-10),
            userMsg,
          ],
          temperature: 0.7,
          max_tokens: 800,
        }),
      })

      const data = await res.json()
      const reply = data.choices?.[0]?.message?.content || 'Désolé, je n\'ai pas pu traiter votre demande. Réessayez plus tard.'
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }])
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Erreur de connexion. Vérifiez votre connexion internet et réessayez.' },
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const renderMessage = (content) => {
    return content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .split('\n')
      .map((line, i) => {
        if (line.startsWith('- ')) return `<li>${line.slice(2)}</li>`
        if (line.match(/^\d+\.\s/)) return `<li>${line.replace(/^\d+\.\s/, '')}</li>`
        return line
      })
      .join('\n')
  }

  return (
    <>
      {/* ── Welcome Announcement ──────────────── */}
      {showAnnouncement && !isOpen && (
        <div className="chatbot-announce" onClick={() => { setIsOpen(true); setShowAnnouncement(false) }}>
          <div className="chatbot-announce__avatar">
            <span className="material-symbols-outlined">solar_power</span>
          </div>
          <div className="chatbot-announce__content">
            <strong>Chamouss</strong>
            <span>Besoin d'aide ? Je suis là pour vous guider ! ☀️</span>
          </div>
          <button className="chatbot-announce__close" onClick={(e) => { e.stopPropagation(); setShowAnnouncement(false) }}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
      )}

      {/* ── Floating Button ──────────────────── */}
      <button
        className={`chatbot-fab ${isOpen ? 'chatbot-fab--open' : ''} ${showAnnouncement ? 'chatbot-fab--pulse' : ''}`}
        onClick={() => { setIsOpen(!isOpen); setShowAnnouncement(false) }}
        aria-label="Chat avec Chamouss"
      >
        <div className="chatbot-fab__inner">
          {isOpen ? (
            <span className="material-symbols-outlined">close</span>
          ) : (
            <span className="material-symbols-outlined">chat</span>
          )}
        </div>
      </button>

      {/* ── Chat Window ─────────────────────── */}
      {isOpen && (
        <div className="chatbot">
          {/* Header */}
          <div className="chatbot__header">
            <div className="chatbot__header-bg" />
            <div className="chatbot__avatar">
              <span className="material-symbols-outlined">solar_power</span>
              <span className="chatbot__avatar-ring" />
            </div>
            <div className="chatbot__header-info">
              <h4>Chamouss</h4>
              <span className="chatbot__status">
                <span className="chatbot__status-dot" />
                Assistant IA — SupraMax Energy
              </span>
            </div>
            <button className="chatbot__close" onClick={() => setIsOpen(false)}>
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Messages */}
          <div className="chatbot__messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chatbot__msg chatbot__msg--${msg.role}`}>
                {msg.role === 'assistant' && (
                  <div className="chatbot__msg-avatar">
                    <span className="material-symbols-outlined">solar_power</span>
                  </div>
                )}
                <div className="chatbot__bubble">
                  <div dangerouslySetInnerHTML={{ __html: renderMessage(msg.content) }} />
                </div>
              </div>
            ))}
            {loading && (
              <div className="chatbot__msg chatbot__msg--assistant">
                <div className="chatbot__msg-avatar">
                  <span className="material-symbols-outlined">solar_power</span>
                </div>
                <div className="chatbot__bubble chatbot__bubble--typing">
                  <span className="chatbot__dot" />
                  <span className="chatbot__dot" />
                  <span className="chatbot__dot" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length <= 1 && (
            <div className="chatbot__quick">
              {QUICK_REPLIES.map((qr, i) => (
                <button key={i} className="chatbot__quick-btn" onClick={() => sendMessage(qr.text)}>
                  {qr.label}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="chatbot__input-wrap">
            <input
              ref={inputRef}
              type="text"
              className="chatbot__input"
              placeholder="Posez votre question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading}
            />
            <button
              className="chatbot__send"
              onClick={() => sendMessage()}
              disabled={!input.trim() || loading}
              aria-label="Envoyer"
            >
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
