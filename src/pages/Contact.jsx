import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import './Contact.css'

export default function Contact() {
  const { t } = useLanguage()

  const SERVICE_OPTIONS = [
    { value: 'audit', label: t('opt_audit') },
    { value: 'install', label: t('opt_install') },
    { value: 'storage', label: t('opt_storage') },
    { value: 'monitoring', label: t('opt_monitoring') },
    { value: 'mobility', label: t('opt_mobility') },
    { value: 'optimization', label: t('opt_optimization') },
  ]

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
    if (!form.name.trim()) errs.name = t('err_name')
    if (!form.email.trim()) errs.email = t('err_email')
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = t('err_email_invalid')
    if (!form.phone.trim()) errs.phone = t('err_phone')
    if (!form.service) errs.service = t('err_service')
    if (!form.message.trim()) errs.message = t('err_message')
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
            <h2>{t('contact_success_title')}</h2>
            <p>
              {t('contact_success_desc')}
            </p>
            <Link to="/" className="btn btn--primary" style={{ marginTop: 'var(--space-xl)' }}>
              {t('contact_success_btn')}
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
          <span className="eyebrow">{t('contact_eyebrow')}</span>
          <h1 className="page-hero__title">
            {t('contact_hero_title')}
          </h1>
          <p className="page-hero__subtitle">
            {t('contact_hero_subtitle')}
          </p>
          <div className="page-hero__strengths" data-stagger>
            <div className="page-hero__strength">
              <span className="material-symbols-outlined">schedule</span>
              <span>{t('contact_strength1')}</span>
            </div>
            <div className="page-hero__strength">
              <span className="material-symbols-outlined">forum</span>
              <span>{t('contact_strength2')}</span>
            </div>
            <div className="page-hero__strength">
              <span className="material-symbols-outlined">lock</span>
              <span>{t('contact_strength3')}</span>
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
              <h2>{t('contact_form_title')}</h2>
              <p className="contact-form-wrap__desc">
                {t('contact_form_desc')}
              </p>

              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">{t('contact_name')}</label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange('name')}
                      placeholder={t('contact_name_placeholder')}
                      className={errors.name ? 'input--error' : ''}
                    />
                    {errors.name && <span className="form-error">{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">{t('contact_phone')}</label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange('phone')}
                      placeholder={t('contact_phone_placeholder')}
                      className={errors.phone ? 'input--error' : ''}
                    />
                    {errors.phone && <span className="form-error">{errors.phone}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">{t('contact_email')}</label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange('email')}
                      placeholder={t('contact_email_placeholder')}
                      className={errors.email ? 'input--error' : ''}
                    />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="city">{t('contact_city')}</label>
                    <input
                      id="city"
                      type="text"
                      value={form.city}
                      onChange={handleChange('city')}
                      placeholder={t('contact_city_placeholder')}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service">{t('contact_service')}</label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={handleChange('service')}
                    className={errors.service ? 'input--error' : ''}
                  >
                    <option value="">{t('contact_service_select')}</option>
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s.value} value={s.value}>{s.label}</option>
                    ))}
                  </select>
                  {errors.service && <span className="form-error">{errors.service}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">{t('contact_message')}</label>
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={handleChange('message')}
                    placeholder={t('contact_message_placeholder')}
                    rows={5}
                    className={errors.message ? 'input--error' : ''}
                  />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn--primary btn--lg contact-form__submit">
                  {t('contact_submit')}
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
                    <h4>{t('contact_address')}</h4>
                    <p>{t('contact_address_value')}</p>
                  </div>
                </div>
                <div className="contact-info-card">
                  <span className="material-symbols-outlined">call</span>
                  <div>
                    <h4>{t('contact_phone_label')}</h4>
                    <p>+216 71 000 000</p>
                  </div>
                </div>
                <div className="contact-info-card">
                  <span className="material-symbols-outlined">mail</span>
                  <div>
                    <h4>{t('contact_email_label')}</h4>
                    <p>contact@supramax.energy</p>
                  </div>
                </div>
              </div>

              <div className="faq-cards">
                <div className="faq-card">
                  <h4>
                    <span className="material-symbols-outlined">help</span>
                    {t('contact_faq1_title')}
                  </h4>
                  <ul>
                    <li>{t('contact_faq1_1')}</li>
                    <li>{t('contact_faq1_2')}</li>
                    <li>{t('contact_faq1_3')}</li>
                    <li>{t('contact_faq1_4')}</li>
                  </ul>
                </div>
                <div className="faq-card">
                  <h4>
                    <span className="material-symbols-outlined"> Assignment</span>
                    {t('contact_faq2_title')}
                  </h4>
                  <ul>
                    <li>{t('contact_faq2_1')}</li>
                    <li>{t('contact_faq2_2')}</li>
                    <li>{t('contact_faq2_3')}</li>
                    <li>{t('contact_faq2_4')}</li>
                  </ul>
                </div>
              </div>

              <a href="tel:+21671000000" className="btn btn--secondary contact-sidebar__cta">
                <span className="material-symbols-outlined">call</span>
                {t('contact_call_btn')}
              </a>
              <Link to="/services" className="btn btn--ghost contact-sidebar__link">
                {t('contact_services_link')}
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
