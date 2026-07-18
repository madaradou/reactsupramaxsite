import { useLanguage } from '../i18n/LanguageContext'
import './LanguageSelector.css'

const LANGUAGES = [
  { code: 'fr', label: 'FR', full: 'Français' },
  { code: 'en', label: 'EN', full: 'English' },
  { code: 'ar', label: 'AR', full: 'العربية' },
]

export default function LanguageSelector() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="lang-selector" role="group" aria-label="Language selector">
      {LANGUAGES.map((l) => (
        <button
          key={l.code}
          className={`lang-selector__btn ${lang === l.code ? 'lang-selector__btn--active' : ''}`}
          onClick={() => setLang(l.code)}
          aria-label={l.full}
          title={l.full}
        >
          {l.label}
        </button>
      ))}
    </div>
  )
}
