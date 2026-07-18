import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import './Services.css'

export default function Services() {
  const { t } = useLanguage()

  const SERVICES = [
    {
      icon: 'science',
      title: t('service1_title'),
      desc: t('service1_desc'),
      details: [t('service1_d1'), t('service1_d2'), t('service1_d3')],
      img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
      imgAlt: 'Ingénieur analysant des données de performance solaire',
    },
    {
      icon: 'solar_power',
      title: t('service2_title'),
      desc: t('service2_desc'),
      details: [t('service2_d1'), t('service2_d2'), t('service2_d3')],
      img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80',
      imgAlt: 'Champ de panneaux solaires photovoltaïques',
    },
    {
      icon: 'battery_charging_full',
      title: t('service3_title'),
      desc: t('service3_desc'),
      details: [t('service3_d1'), t('service3_d2'), t('service3_d3')],
      img: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=600&q=80',
      imgAlt: 'Système de stockage batterie pour énergie solaire',
    },
    {
      icon: 'dashboard',
      title: t('service4_title'),
      desc: t('service4_desc'),
      details: [t('service4_d1'), t('service4_d2'), t('service4_d3')],
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
      imgAlt: 'Tableau de bord de supervision énergétique',
    },
    {
      icon: 'ev_station',
      title: t('service5_title'),
      desc: t('service5_desc'),
      details: [t('service5_d1'), t('service5_d2'), t('service5_d3')],
      img: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&q=80',
      imgAlt: 'Borne de recharge électrique pour véhicule',
    },
    {
      icon: 'tune',
      title: t('service6_title'),
      desc: t('service6_desc'),
      details: [t('service6_d1'), t('service6_d2'), t('service6_d3')],
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
      imgAlt: 'Analyse de données énergétiques sur écran',
    },
  ]

  const STEPS = [
    { num: '01', title: t('step1_title'), desc: t('step1_desc') },
    { num: '02', title: t('step2_title'), desc: t('step2_desc') },
    { num: '03', title: t('step3_title'), desc: t('step3_desc') },
    { num: '04', title: t('step4_title'), desc: t('step4_desc') },
  ]

  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="page-hero__content container" data-reveal>
          <span className="eyebrow">{t('services_eyebrow')}</span>
          <h1 className="page-hero__title">{t('services_hero_title')}</h1>
          <p className="page-hero__subtitle">
            {t('services_hero_subtitle')}
          </p>
          <div className="page-hero__strengths" data-stagger>
            <div className="page-hero__strength">
              <span className="material-symbols-outlined">precision_manufacturing</span>
              <span>{t('services_strength1')}</span>
            </div>
            <div className="page-hero__strength">
              <span className="material-symbols-outlined">workspace_premium</span>
              <span>{t('services_strength2')}</span>
            </div>
            <div className="page-hero__strength">
              <span className="material-symbols-outlined">support_agent</span>
              <span>{t('services_strength3')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6 Service Cards ──────────────────────────── */}
      <section className="section section--lg">
        <div className="container">
          <div className="section-header" data-reveal>
            <span className="eyebrow">{t('services_section_eyebrow')}</span>
            <h2>{t('services_section_title')}</h2>
            <p>
              {t('services_section_desc')}
            </p>
          </div>

          <div className="services-detail-grid" data-stagger>
            {SERVICES.map((s, i) => (
              <div className="service-detail-card" key={i}>
                <div className="service-detail-card__img-wrap">
                  <img
                    src={s.img}
                    alt={s.imgAlt}
                    className="service-detail-card__img"
                    loading="lazy"
                  />
                  <div className="service-detail-card__img-overlay" />
                  <div className="service-detail-card__icon">
                    <span className="material-symbols-outlined">{s.icon}</span>
                  </div>
                </div>
                <div className="service-detail-card__body">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <ul className="service-detail-card__list">
                    {s.details.map((d, j) => (
                      <li key={j}>
                        <span className="material-symbols-outlined">check_circle</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline Method ──────────────────────────── */}
      <section className="section timeline-section">
        <div className="container">
          <div className="section-header" data-reveal>
            <span className="eyebrow">{t('timeline_eyebrow')}</span>
            <h2>{t('timeline_title')}</h2>
          </div>

          <div className="timeline" data-stagger>
            {STEPS.map((step, i) => (
              <div className="timeline__step" key={i}>
                <div className="timeline__marker">
                  <span className="timeline__num">{step.num}</span>
                  {i < STEPS.length - 1 && <div className="timeline__line" />}
                </div>
                <div className="timeline__content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────── */}
      <section className="section stats-inline">
        <div className="container" data-reveal>
          <div className="stats-inline__inner">
            <div className="stats-inline__item">
              <span className="stats-inline__number">99.8%</span>
              <span className="stats-inline__label">{t('stat_availability')}</span>
            </div>
            <div className="stats-inline__divider" />
            <div className="stats-inline__item">
              <span className="stats-inline__number">24/7</span>
              <span className="stats-inline__label">{t('stat_supervision')}</span>
            </div>
            <div className="stats-inline__divider" />
            <div className="stats-inline__item">
              <span className="stats-inline__number">25 ans</span>
              <span className="stats-inline__label">{t('stat_warranty')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="cta-section">
        <div className="container" data-reveal>
          <div className="cta-section__inner">
            <h2>{t('services_cta_title')}</h2>
            <p>
              {t('services_cta_desc')}
            </p>
            <Link to="/contact" className="btn btn--secondary btn--lg">
              {t('services_cta_btn')}
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
