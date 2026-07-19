import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import './About.css'

export default function About() {
  const { t } = useLanguage()

  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="page-hero__content container" data-reveal>
          <span className="eyebrow">{t('about_eyebrow')}</span>
          <h1 className="page-hero__title">
            {t('about_hero_title')}
          </h1>
          <p className="page-hero__subtitle">
            {t('about_hero_subtitle')}
          </p>
        </div>
      </section>

      {/* ── Vision Card ──────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="vision-card" data-reveal>
            <div className="vision-card__items" data-stagger>
              <div className="vision-card__item">
                <span className="vision-card__number">15+</span>
                <span className="vision-card__label">{t('about_exp')}</span>
              </div>
              <div className="vision-card__item">
                <span className="vision-card__number">3</span>
                <span className="vision-card__label">{t('about_segments')}</span>
              </div>
              <div className="vision-card__item">
                <span className="vision-card__number">1</span>
                <span className="vision-card__label">{t('about_premium')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Positioning ──────────────────────────────── */}
      <section className="section positioning">
        <div className="container">
          <div className="section-header" data-reveal>
            <span className="eyebrow">{t('about_position_eyebrow')}</span>
            <h2>{t('about_position_title')}</h2>
            <p>
              {t('about_position_desc')}
            </p>
          </div>

          <div className="principles-grid" data-stagger>
            <div className="principle-card">
              <div className="principle-card__icon">
                <span className="material-symbols-outlined">psychology</span>
              </div>
              <h3>{t('principle1_title')}</h3>
              <p>
                {t('principle1_desc')}
              </p>
            </div>

            <div className="principle-card">
              <div className="principle-card__icon">
                <span className="material-symbols-outlined">handshake</span>
              </div>
              <h3>{t('principle2_title')}</h3>
              <p>
                {t('principle2_desc')}
              </p>
            </div>

            <div className="principle-card">
              <div className="principle-card__icon">
                <span className="material-symbols-outlined">diamond</span>
              </div>
              <h3>{t('principle3_title')}</h3>
              <p>
                {t('principle3_desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────── */}
      <section className="section values-section">
        <div className="container">
          <div className="section-header" data-reveal>
            <span className="eyebrow">{t('about_values_eyebrow')}</span>
            <h2>{t('about_values_title')}</h2>
          </div>

          <div className="values-grid" data-stagger>
            <div className="value-card">
              <div className="value-card__icon">
                <span className="material-symbols-outlined">lightbulb</span>
              </div>
              <h3>{t('value1_title')}</h3>
              <p>
                {t('value1_desc')}
              </p>
            </div>

            <div className="value-card">
              <div className="value-card__icon">
                <span className="material-symbols-outlined">fact_check</span>
              </div>
              <h3>{t('value2_title')}</h3>
              <p>
                {t('value2_desc')}
              </p>
            </div>

            <div className="value-card">
              <div className="value-card__icon">
                <span className="material-symbols-outlined">groups</span>
              </div>
              <h3>{t('value3_title')}</h3>
              <p>
                {t('value3_desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Promise ──────────────────────────────────── */}
      <section className="section promise-section">
        <div className="container">
          <div className="promise-grid" data-reveal>
            <div className="promise-content">
              <span className="eyebrow">{t('about_promise_eyebrow')}</span>
              <h2>
                {t('about_promise_title')}
              </h2>
              <p>
                {t('about_promise_desc')}
              </p>
              <Link to="/contact" className="btn btn--primary btn--lg" style={{ marginTop: 'var(--space-xl)' }}>
                {t('about_promise_btn')}
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>

<div className="quote-card card--glass">
  <blockquote>
    {t('about_quote')}
  </blockquote>
  <cite>— SupraMax Energy</cite>
</div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="cta-section">
        <div className="container" data-reveal>
          <div className="cta-section__inner">
            <h2>{t('about_cta_title')}</h2>
            <p>
              {t('about_cta_desc')}
            </p>
            <Link to="/contact" className="btn btn--secondary btn--lg">
              {t('about_cta_btn')}
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
