import { Link } from 'react-router-dom'
import './Services.css'

const SERVICES = [
  {
    icon: 'science',
    title: 'Audit & Conception',
    desc: 'Étude technique complète, prévision de rendement et dimensionnement optimal de votre installation.',
    details: ['Étude de faisabilité', 'Prévision de rendement', 'Dimensionnement optimal'],
  },
  {
    icon: 'solar_power',
    title: 'Installation photovoltaïque',
    desc: 'Installation résidentielle, ombrières et ground-mounted avec une exécution premium.',
    details: ['Résidentiel premium', 'Ombrières photovoltaïques', 'Ground-mounted'],
  },
  {
    icon: 'battery_charging_full',
    title: 'Stockage & Continuité',
    desc: "Systèmes de batterie pour l'autonomie et la résilience énergétique de vos sites.",
    details: ['Batteries lithium', 'Autonomie renforcée', 'Gestion intelligente'],
  },
  {
    icon: 'dashboard',
    title: 'Monitoring & Maintenance',
    desc: 'Supervision en temps réel et support premium pour garantir la performance continue.',
    details: ['Supervision 24/7', 'Maintenance préventive', 'Support premium'],
  },
  {
    icon: 'ev_station',
    title: 'Mobilité & Recharge',
    desc: 'Bornes AC et DC pilotées pour anticiper la mobilité électrique.',
    details: ['Bornes AC/DC', 'Pilotage intelligent', 'Infrastructures'],
  },
  {
    icon: 'tune',
    title: 'Optimisation Énergétique',
    desc: 'Utilisation intelligente des données pour maximiser chaque kilowatt-heure.',
    details: ['Gestion intelligente', 'Analyse de données', 'Optimisation continue'],
  },
]

const STEPS = [
  { num: '01', title: 'Analyse', desc: 'Compréhension complète de vos besoins et de votre site.' },
  { num: '02', title: 'Conception', desc: 'Dimensionnement optimal et choix des composants premium.' },
  { num: '03', title: 'Déploiement', desc: 'Installation soignée avec respect des normes les plus strictes.' },
  { num: '04', title: 'Suivi', desc: 'Monitoring continu et maintenance pour une performance durable.' },
]

export default function Services() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="page-hero__content container" data-reveal>
          <span className="eyebrow">Services signature</span>
          <h1 className="page-hero__title">L'excellence à chaque étape</h1>
          <p className="page-hero__subtitle">
            De l'audit initial au suivi continu, nous orchestrons chaque dimension 
            de votre projet photovoltaïque avec rigueur et élégance.
          </p>
          <div className="page-hero__strengths" data-stagger>
            <div className="page-hero__strength">
              <span className="material-symbols-outlined">precision_manufacturing</span>
              <span>Ingénierie de précision</span>
            </div>
            <div className="page-hero__strength">
              <span className="material-symbols-outlined">workspace_premium</span>
              <span>Composants premium</span>
            </div>
            <div className="page-hero__strength">
              <span className="material-symbols-outlined">support_agent</span>
              <span>Support dédié</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6 Service Cards ──────────────────────────── */}
      <section className="section section--lg">
        <div className="container">
          <div className="section-header" data-reveal>
            <span className="eyebrow">Nos services</span>
            <h2>Une offre complète et intégrée</h2>
            <p>
              Chaque service est conçu pour s'intégrer dans un écosystème cohérent, 
              maximisant la valeur de votre investissement.
            </p>
          </div>

          <div className="services-detail-grid" data-stagger>
            {SERVICES.map((s, i) => (
              <div className="service-detail-card" key={i}>
                <div className="service-detail-card__icon">
                  <span className="material-symbols-outlined">{s.icon}</span>
                </div>
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
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline Method ──────────────────────────── */}
      <section className="section timeline-section">
        <div className="container">
          <div className="section-header" data-reveal>
            <span className="eyebrow">Notre méthode</span>
            <h2>4 étapes vers votre autonomie</h2>
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
              <span className="stats-inline__label">Disponibilité garantie</span>
            </div>
            <div className="stats-inline__divider" />
            <div className="stats-inline__item">
              <span className="stats-inline__number">24/7</span>
              <span className="stats-inline__label">Supervision continue</span>
            </div>
            <div className="stats-inline__divider" />
            <div className="stats-inline__item">
              <span className="stats-inline__number">25 ans</span>
              <span className="stats-inline__label">Garantie performance</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="cta-section">
        <div className="container" data-reveal>
          <div className="cta-section__inner">
            <h2>Prêt à démarrer votre projet ?</h2>
            <p>
              Contactez-nous pour une étude personnalisée et découvrez 
              ce que l'ingénierie photovoltaïque premium peut apporter à votre site.
            </p>
            <Link to="/contact" className="btn btn--secondary btn--lg">
              Demander un devis
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
