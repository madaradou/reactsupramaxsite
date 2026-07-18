import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import './Home.css'

export default function Home() {
  const { t } = useLanguage()

  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="hero">
        <div className="hero__bg">
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=80"
            alt=""
            className="hero__bg-img"
            loading="eager"
          />
          <div className="hero__bg-overlay" />
        </div>
        <div className="hero__content container" data-reveal>
          <span className="eyebrow">{t('home_eyebrow')}</span>
          <h1 className="hero__title">
            {t('home_hero_title')}
          </h1>
          <p className="hero__subtitle">
            {t('home_hero_subtitle')}
          </p>
          <div className="hero__actions">
            <Link to="/contact" className="btn btn--secondary btn--lg">
              {t('home_hero_cta')}
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <Link to="/services" className="btn btn--ghost btn--lg">
              {t('home_hero_cta2')}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────── */}
      <section className="stats-bar">
        <div className="container--wide" data-stagger>
          <div className="stats-bar__item">
            <span className="stats-bar__number">10 MW</span>
            <span className="stats-bar__label">{t('stat_installed')}</span>
          </div>
          <div className="stats-bar__item">
            <span className="stats-bar__number">150+</span>
            <span className="stats-bar__label">{t('stat_projects')}</span>
          </div>
          <div className="stats-bar__item">
            <span className="stats-bar__number">24h</span>
            <span className="stats-bar__label">{t('stat_response')}</span>
          </div>
          <div className="stats-bar__item">
            <span className="stats-bar__number">25 ans</span>
            <span className="stats-bar__label">{t('stat_vision')}</span>
          </div>
        </div>
      </section>

      {/* ── Precision Engineering ────────────────────── */}
      <section className="section section--lg">
        <div className="container">
          <div className="section-header" data-reveal>
            <span className="eyebrow">{t('home_benefits_eyebrow')}</span>
            <h2>{t('home_benefits_title')}</h2>
            <p>
              {t('home_benefits_desc')}
            </p>
          </div>

          <div className="benefits-grid" data-stagger>
            <div className="benefit-card">
              <div className="benefit-card__icon">
                <span className="material-symbols-outlined">auto_awesome</span>
              </div>
              <h3>{t('benefit1_title')}</h3>
              <p>
                {t('benefit1_desc')}
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-card__icon">
                <span className="material-symbols-outlined">monitoring</span>
              </div>
              <h3>{t('benefit2_title')}</h3>
              <p>
                {t('benefit2_desc')}
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-card__icon">
                <span className="material-symbols-outlined">verified</span>
              </div>
              <h3>{t('benefit3_title')}</h3>
              <p>
                {t('benefit3_desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Overview ────────────────────────── */}
      <section className="section services-overview">
        <div className="container">
          <div className="section-header" data-reveal>
            <span className="eyebrow">{t('home_services_eyebrow')}</span>
            <h2>{t('home_services_title')}</h2>
          </div>

          <div className="services-grid" data-stagger>
            <div className="service-card">
              <div className="service-card__img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=80"
                  alt="Panneaux solaires sur toiture résidentielle"
                  className="service-card__img"
                  loading="lazy"
                />
              </div>
              <div className="service-card__number">01</div>
              <h3>{t('service_residential')}</h3>
              <p>
                {t('service_residential_desc')}
              </p>
              <Link to="/services" className="service-card__link">
                {t('learn_more')}
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>

            <div className="service-card service-card--featured">
              <div className="service-card__img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80"
                  alt="Bureau moderne avec installation solaire"
                  className="service-card__img"
                  loading="lazy"
                />
              </div>
              <div className="service-card__number">02</div>
              <h3>{t('service_tertiary')}</h3>
              <p>
                {t('service_tertiary_desc')}
              </p>
              <Link to="/services" className="service-card__link">
                {t('learn_more')}
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>

            <div className="service-card">
              <div className="service-card__img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&q=80"
                  alt="Site industriel avec panneaux solaires"
                  className="service-card__img"
                  loading="lazy"
                />
              </div>
              <div className="service-card__number">03</div>
              <h3>{t('service_industrial')}</h3>
              <p>
                {t('service_industrial_desc')}
              </p>
              <Link to="/services" className="service-card__link">
                {t('learn_more')}
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── What Changes With Us ─────────────────────── */}
      <section className="section what-changes">
        <div className="container">
          <div className="what-changes__grid">
            <div className="what-changes__content" data-reveal>
              <span className="eyebrow">{t('home_what_title')}</span>
              <h2>
                {t('home_what_heading')}
              </h2>
              <p>
                {t('home_what_desc')}
              </p>
            </div>

            <div className="quote-card card--glass" data-reveal="right">
              <span className="material-symbols-outlined quote-card__icon">format_quote</span>
              <blockquote>
                {t('home_quote')}
              </blockquote>
              <cite>— SupraMax Energy</cite>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Section ──────────────────────────────── */}
      <section className="cta-section">
        <div className="container" data-reveal>
          <div className="cta-section__inner">
            <h2>{t('home_cta_title')}</h2>
            <p>
              {t('home_cta_desc')}
            </p>
            <Link to="/contact" className="btn btn--secondary btn--lg">
              {t('home_cta_btn')}
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
