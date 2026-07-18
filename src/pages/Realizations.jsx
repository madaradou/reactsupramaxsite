import { Link } from 'react-router-dom'
import './Realizations.css'

const PROJECTS = [
  {
    title: 'Domaine des Cèdres',
    location: 'La Marsa',
    capacity: '25 kWp',
    type: 'Résidentiel',
    kpi1: { label: 'Économie', value: '68%' },
    kpi2: { label: 'Interruptions', value: '0' },
    desc: 'Installation premium pour villa résidentielle. Intégration architecturale soignée avec monitoring intelligent.',
    color: '#1a4b84',
  },
  {
    title: 'Business Hub Berges du Lac',
    location: 'Tunis',
    capacity: '120 kWp',
    type: 'Commercial',
    kpi1: { label: 'ROI', value: 'Court' },
    kpi2: { label: 'Image', value: 'Renforcée' },
    desc: 'Installations pour bureaux modernes. Réduction significative des coûts et valorisation de l\'image entreprise.',
    color: '#003466',
  },
  {
    title: 'Usine Textile Sahel',
    location: 'Monastir',
    capacity: '850 kWp',
    type: 'Industriel',
    kpi1: { label: 'Supervision', value: '24/7' },
    kpi2: { label: 'Résilience', value: 'Élevée' },
    desc: 'Projet à grande échelle pour site industriel. Robustesse, continuité et maintenance préventive.',
    color: '#183c00',
  },
  {
    title: 'Campus Technologique Sfax',
    location: 'Sfax',
    capacity: '340 kWp',
    type: 'Institutionnel',
    kpi1: { label: 'Design', value: 'Intégré' },
    kpi2: { label: 'Données', value: 'Visibles' },
    desc: 'Projet démonstratif pour campus technologique. Design intégré et données de performance accessibles.',
    color: '#2a5e0a',
  },
]

export default function Realizations() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="page-hero__content container" data-reveal>
          <span className="eyebrow">Portfolio premium</span>
          <h1 className="page-hero__title">Nos réalisations</h1>
          <p className="page-hero__subtitle">
            Chaque projet est une vitrine de notre engagement envers l'excellence. 
            Découvrez des installations qui allient performance et esthétique.
          </p>
          <div className="page-hero__strengths" data-stagger>
            <div className="page-hero__strength">
              <span className="material-symbols-outlined">home</span>
              <span>Résidentiel</span>
            </div>
            <div className="page-hero__strength">
              <span className="material-symbols-outlined">apartment</span>
              <span>Commercial</span>
            </div>
            <div className="page-hero__strength">
              <span className="material-symbols-outlined">factory</span>
              <span>Industriel</span>
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
                <div className="project-card__visual" style={{ backgroundColor: project.color }}>
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
              <span className="stats-inline__label">Projets réalisés</span>
            </div>
            <div className="stats-inline__divider" />
            <div className="stats-inline__item">
              <span className="stats-inline__number">99.9%</span>
              <span className="stats-inline__label">Disponibilité</span>
            </div>
            <div className="stats-inline__divider" />
            <div className="stats-inline__item">
              <span className="stats-inline__number">3</span>
              <span className="stats-inline__label">Segments d'expertise</span>
            </div>
            <div className="stats-inline__divider" />
            <div className="stats-inline__item">
              <span className="stats-inline__number">1</span>
              <span className="stats-inline__label">Standard premium</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── What Projects Show ───────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="what-changes__grid">
            <div className="what-changes__content" data-reveal>
              <span className="eyebrow">Ce que nos projets démontrent</span>
              <h2>
                La preuve par l'exécution
              </h2>
              <p>
                Nos réalisations ne sont pas de simples installations — elles sont 
                la preuve que l'ingénierie photovoltaïque peut être à la fois performante 
                et esthétique. Chaque projet raconte une histoire de rigueur, 
                d'innovation et de partnership.
              </p>
            </div>

            <div className="quote-card card--glass" data-reveal="right">
              <span className="material-symbols-outlined quote-card__icon">format_quote</span>
              <blockquote>
                « Un bon projet solaire est celui qui performe silencieusement, 
                s'intègre harmonieusement et dure dans le temps. »
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
            <h2>Votre projet, notre prochaine réalisation</h2>
            <p>
              Contactez-nous pour discuter de votre projet et découvrir 
              comment nous pouvons transformer votre site.
            </p>
            <Link to="/contact" className="btn btn--secondary btn--lg">
              Démarrer votre projet
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
