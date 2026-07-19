import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import './SettingsPopup.css'

const LANGUAGES = [
  { code: 'fr', label: 'FR', full: 'Français' },
  { code: 'en', label: 'EN', full: 'English' },
  { code: 'ar', label: 'AR', full: 'العربية' },
]

export default function SettingsPopup() {
  const [open, setOpen] = useState(false)
  const popupRef = useRef(null)
  const { lang, setLang } = useLanguage()

  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      if (saved) return saved === 'dark'
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [])

  return (
    <div className="settings" ref={popupRef}>
      <button
        className="settings__gear"
        onClick={() => setOpen(!open)}
        aria-label="Paramètres"
        aria-expanded={open}
      >
        <span className="material-symbols-outlined">settings</span>
      </button>

      {open && (
        <div className="settings__popup">
          <div className="settings__header">
            <span className="material-symbols-outlined">tune</span>
            <h3>Paramètres</h3>
          </div>

          <div className="settings__section">
            <span className="settings__label">Thème</span>
            <div className="settings__theme-row">
              <button
                className={`settings__theme-btn ${!dark ? 'settings__theme-btn--active' : ''}`}
                onClick={() => setDark(false)}
              >
                <span className="material-symbols-outlined">light_mode</span>
                Clair
              </button>
              <button
                className={`settings__theme-btn ${dark ? 'settings__theme-btn--active' : ''}`}
                onClick={() => setDark(true)}
              >
                <span className="material-symbols-outlined">dark_mode</span>
                Sombre
              </button>
            </div>
          </div>

          <div className="settings__divider" />

          <div className="settings__section">
            <span className="settings__label">Langue</span>
            <div className="settings__lang-row">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  className={`settings__lang-btn ${lang === l.code ? 'settings__lang-btn--active' : ''}`}
                  onClick={() => setLang(l.code)}
                  aria-label={l.full}
                  title={l.full}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
