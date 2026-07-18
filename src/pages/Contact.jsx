import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'

const SERVICE_OPTIONS = [
  'Audit & conception',
  'Installation photovoltaïque',
  'Stockage & continuité',
  'Monitoring & maintenance',
  'Mobilité & recharge',
  'Optimisation énergétique',
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    service: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Veuillez entrer votre nom'
    if (!form.email.trim()) errs.email = 'Veuillez entrer votre email'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Email invalide'
    if (!form.phone.trim()) errs.phone = 'Veuillez entrer votre téléphone'
    if (!form.service) errs.service = 'Veuillez sélectionner un service'
    if (!form.message.trim()) errs.message = 'Veuillez décrire votre projet'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length === 0) {
      setSubmitted(true)
    }
  }

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[field]
        return next
      })
    }
  }

  if (submitted) {
    return (
      <section className="section contact-success">
        <div className="container" data-reveal>
          <div className="contact-success__inner">
            <span className="material-symbols-outlined contact-success__icon">check_circle</span>
            <h2>Merci pour votre message</h2>
            <p>
              Nous avons bien reçu votre demande. Notre équipe vous recontactera 
              dans les plus brefs délais.
            </p>
            <Link to="/" className="btn btn--primary" style={{ marginTop: 'var(--space-xl)' }}>
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="page-hero__content container" data-reveal>
          <span className="eyebrow">Contact</span>
          <h1 className="page-hero__title">
            Parlons de votre projet
          </h1>
          <p className="page-hero__subtitle">
            Chaque grande installation commence par une conversation. 
            Partagez-nous votre vision, nous vous aiderons à la concrétiser.
          </p>
          <div className="page-hero__strengths" data-stagger>
            <div className="page-hero__strength">
              <span className="material-symbols-outlined">schedule</span>
              <span>Réponse sous 24h</span>
            </div>
            <div className="page-hero__strength">
              <span className="material-symbols-outlined">forum</span>
              <span>Échange structuré</span>
            </div>
            <div className="page-hero__strength">
              <span className="material-symbols-outlined">lock</span>
              <span>Confidentialité garantie</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Form + Info ──────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Form */}
            <div className="contact-form-wrap" data-reveal>
              <h2>Demande de devis</h2>
              <p className="contact-form-wrap__desc">
                Remplissez le formulaire ci-dessous et nous vous recontacterons rapidement.
              </p>

              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Nom complet *</label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange('name')}
                      placeholder="Votre nom"
                      className={errors.name ? 'input--error' : ''}
                    />
                    {errors.name && <span className="form-error">{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Téléphone *</label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange('phone')}
                      placeholder="+216 XX XXX XXX"
                      className={errors.phone ? 'input--error' : ''}
                    />
                    {errors.phone && <span className="form-error">{errors.phone}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange('email')}
                      placeholder="votre@email.com"
                      className={errors.email ? 'input--error' : ''}
                    />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="city">Ville / Site</label>
                    <input
                      id="city"
                      type="text"
                      value={form.city}
                      onChange={handleChange('city')}
                      placeholder="Ville ou adresse du site"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service">Type de service *</label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={handleChange('service')}
                    className={errors.service ? 'input--error' : ''}
                  >
                    <option value="">Sélectionnez un service</option>
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.service && <span className="form-error">{errors.service}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Décrivez votre projet *</label>
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={handleChange('message')}
                    placeholder="Décrivez votre site, vos objectifs, vos contraintes..."
                    rows={5}
                    className={errors.message ? 'input--error' : ''}
                  />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn--primary btn--lg contact-form__submit">
                  Envoyer la demande
                  <span className="material-symbols-outlined">send</span>
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="contact-sidebar" data-reveal="right">
              <div className="contact-info-cards">
                <div className="contact-info-card">
                  <span className="material-symbols-outlined">location_on</span>
                  <div>
                    <h4>Adresse</h4>
                    <p>Tunis, Tunisie</p>
                  </div>
                </div>
                <div className="contact-info-card">
                  <span className="material-symbols-outlined">call</span>
                  <div>
                    <h4>Téléphone</h4>
                    <p>+216 71 000 000</p>
                  </div>
                </div>
                <div className="contact-info-card">
                  <span className="material-symbols-outlined">mail</span>
                  <div>
                    <h4>Email</h4>
                    <p>contact@supramax.energy</p>
                  </div>
                </div>
              </div>

              <div className="faq-cards">
                <div className="faq-card">
                  <h4>
                    <span className="material-symbols-outlined">help</span>
                    Ce que nous vous demanderons
                  </h4>
                  <ul>
                    <li>Localisation et orientation du toit</li>
                    <li>Consommation électrique actuelle</li>
                    <li>Objectifs (réduction, autonomie, etc.)</li>
                    <li>Contraintes techniques ou architecturales</li>
                  </ul>
                </div>
                <div className="faq-card">
                  <h4>
                    <span className="material-symbols-outlined"> Assignment</span>
                    Ce que vous recevrez
                  </h4>
                  <ul>
                    <li>Étude de faisabilité complète</li>
                    <li>Dimensionnement optimal</li>
                    <li>Prévision de rendement</li>
                    <li>Estimation financière détaillée</li>
                  </ul>
                </div>
              </div>

              <a href="tel:+21671000000" className="btn btn--secondary contact-sidebar__cta">
                <span className="material-symbols-outlined">call</span>
                Appelez-nous directement
              </a>
              <Link to="/services" className="btn btn--ghost contact-sidebar__link">
                Voir nos services
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
