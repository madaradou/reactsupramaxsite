import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import './Realizations.css'

export default function Realizations() {
  const { t } = useLanguage()

  const PROJECTS = [
    {
      title: 'Domaine des Cèdres',
      location: 'La Marsa',
      capacity: '25 kWp',
      type: t('real_residential'),
      kpi1: { label: 'Économie', value: '68%' },
      kpi2: { label: 'Interruptions', value: '0' },
      desc: t('real_project1_desc'),
      img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80',
      imgAlt: 'Panneaux solaires sur toiture de villa à La Marsa',
    },
    {
      title: 'Business Hub Berges du Lac',
      location: 'Tunis',
      capacity: '120 kWp',
      type: t('real_commercial'),
      kpi1: { label: 'ROI', value: 'Court' },
      kpi2: { label: 'Image', value: 'Renforcée' },
      desc: t('real_project2_desc'),
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      imgAlt: 'Bureau moderne Berges du Lac avec installation solaire',
    },
    {
      title: 'Usine Textile Sahel',
      location: 'Monastir',
      capacity: '850 kWp',
      type: t('real_industrial'),
      kpi1: { label: 'Supervision', value: '24/7' },
      kpi2: { label: 'Résilience', value: 'Élevée' },
      desc: t('real_project3_desc'),
      img: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80',
      imgAlt: 'Usine textile au Sahel avec installation solaire industrielle',
    },
    {
      title: 'Campus Technologique Sfax',
      location: 'Sfax',
      capacity: '340 kWp',
      type: 'Institutionnel',
      kpi1: { label: 'Design', value: 'Intégré' },
      kpi2: { label: 'Données', value: 'Visibles' },
      desc: t('real_project4_desc'),
      img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80',
      imgAlt: 'Campus technologique à Sfax avec panneaux solaires',
    },
  ]

  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="page-hero__content container" data-reveal>
          <span className="eyebrow">{t('realizations_eyebrow')}</span>
          <h1 className="page-hero__title">{t('realizations_hero_title')}</h1>
          <p className="page-hero__subtitle">
            {t('realizations_hero_subtitle')}
          </p>
          <div className="page-hero__strengths" data-stagger>
            <div className="page-hero__strength">
              <span className="material-symbols-outlined">home</span>
              <span>{t('real_residential')}</span>
            </div>
            <div className="page-hero__strength">
              <span className="material-symbols-outlined">apartment</span>
              <span>{t('real_commercial')}</span>
            </div>
            <div className="page-hero__strength">
              <span className="material-symbols-outlined">factory</span>
              <span>{t('real_industrial')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Portfolio Grid ───────────────────────────── */}
      <section className="section section--lg">
        <div className="container">
          <div className="portfolio-grid" data-stagger>
            {PROJECTS.map((project, i) => (
              <div className="project-card" key={i}>
                <div className="project-card__visual">
                  <img
                    src={project.img}
                    alt={project.imgAlt}
                    className="project-card__img"
                    loading="lazy"
                  />
                  <div className="project-card__overlay" />
                  <span className="project-card__capacity">{project.capacity}</span>
                  <span className="project-card__type">{project.type}</span>
                </div>
                <div className="project-card__body">
                  <div className="project-card__header">
                    <h3>{project.title}</h3>
                    <span className="project-card__location">
                      <span className="material-symbols-outlined">location_on</span>
                      {project.location}
                    </span>
                  </div>
                  <p className="project-card__desc">{project.desc}</p>
                  <div className="project-card__kpis">
                    <div className="project-card__kpi">
                      <span className="project-card__kpi-value">{project.kpi1.value}</span>
                      <span className="project-card__kpi-label">{project.kpi1.label}</span>
                    </div>
                    <div className="project-card__kpi">
                      <span className="project-card__kpi-value">{project.kpi2.value}</span>
                      <span className="project-card__kpi-label">{project.kpi2.label}</span>
                    </div>
                  </div>
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
              <span className="stats-inline__number">350+</span>
              <span className="stats-inline__label">{t('real_stat_projects')}</span>
            </div>
            <div className="stats-inline__divider" />
            <div className="stats-inline__item">
              <span className="stats-inline__number">99.9%</span>
              <span className="stats-inline__label">{t('real_stat_uptime')}</span>
            </div>
            <div className="stats-inline__divider" />
            <div className="stats-inline__item">
              <span className="stats-inline__number">3</span>
              <span className="stats-inline__label">{t('real_stat_segments')}</span>
            </div>
            <div className="stats-inline__divider" />
            <div className="stats-inline__item">
              <span className="stats-inline__number">1</span>
              <span className="stats-inline__label">{t('real_stat_standard')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── What Projects Show ───────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="what-changes__grid">
            <div className="what-changes__content" data-reveal>
              <span className="eyebrow">{t('real_what_eyebrow')}</span>
              <h2>
                {t('real_what_title')}
              </h2>
              <p>
                {t('real_what_desc')}
              </p>
            </div>

            <div className="quote-card card--glass" data-reveal="right">
              <span className="material-symbols-outlined quote-card__icon">format_quote</span>
              <blockquote>
                {t('real_quote')}
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
            <h2>{t('real_cta_title')}</h2>
            <p>
              {t('real_cta_desc')}
            </p>
            <Link to="/contact" className="btn btn--secondary btn--lg">
              {t('real_cta_btn')}
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
