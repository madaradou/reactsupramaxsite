import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__gradient" />
        </div>
        <div className="hero__content container" data-reveal>
          <span className="eyebrow">Excellence énergétique</span>
          <h1 className="hero__title">
            Solutions photovoltaïques premium pour le futur
          </h1>
          <p className="hero__subtitle">
            SupraMax Energy conçoit et déploie des installations solaires d'exception 
            pour le résidentiel, le tertiaire et l'industriel en Tunisie.
          </p>
          <div className="hero__actions">
            <Link to="/contact" className="btn btn--secondary btn--lg">
              Demander un devis
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <Link to="/services" className="btn btn--ghost btn--lg">
              Découvrir nos services
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────── */}
      <section className="stats-bar">
        <div className="container--wide" data-stagger>
          <div className="stats-bar__item">
            <span className="stats-bar__number">10 MW</span>
            <span className="stats-bar__label">Installés</span>
          </div>
          <div className="stats-bar__item">
            <span className="stats-bar__number">150+</span>
            <span className="stats-bar__label">Projets réalisés</span>
          </div>
          <div className="stats-bar__item">
            <span className="stats-bar__number">24h</span>
            <span className="stats-bar__label">Temps de réponse</span>
          </div>
          <div className="stats-bar__item">
            <span className="stats-bar__number">25 ans</span>
            <span className="stats-bar__label">Vision long terme</span>
          </div>
        </div>
      </section>

      {/* ── Precision Engineering ────────────────────── */}
      <section className="section section--lg">
        <div className="container">
          <div className="section-header" data-reveal>
            <span className="eyebrow">Ingénierie de précision</span>
            <h2>L'élégance au service de la performance</h2>
            <p>
              Chaque projet est conçu avec une rigueur d'ingénieur et une élégance d'architecte. 
              Nous croyons que la qualité se voit et se ressent.
            </p>
          </div>

          <div className="benefits-grid" data-stagger>
            <div className="benefit-card">
              <div className="benefit-card__icon">
                <span className="material-symbols-outlined">auto_awesome</span>
              </div>
              <h3>Élégance technique</h3>
              <p>
                Des installations pensées pour s'intégrer harmonieusement à votre architecture, 
                avec une attention minutieuse aux détails.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-card__icon">
                <span className="material-symbols-outlined">monitoring</span>
              </div>
              <h3>Monitoring intelligent</h3>
              <p>
                Supervision en temps réel de votre production avec des alertes prédictives 
                et un tableau de bord intuitif.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-card__icon">
                <span className="material-symbols-outlined">verified</span>
              </div>
              <h3>Qualité assurée</h3>
              <p>
                Composants premium certifiés, garantie étendue et maintenance préventive 
                pour une tranquillité totale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Overview ────────────────────────── */}
      <section className="section services-overview">
        <div className="container">
          <div className="section-header" data-reveal>
            <span className="eyebrow">Nos expertises</span>
            <h2>Trois segments, un standard premium</h2>
          </div>

          <div className="services-grid" data-stagger>
            <div className="service-card">
              <div className="service-card__number">01</div>
              <div className="service-card__icon">
                <span className="material-symbols-outlined">home</span>
              </div>
              <h3>Résidentiel premium</h3>
              <p>
                Solutions solaires sur mesure pour villas et résidences. 
                Esthétique irréprochable, performance maximale.
              </p>
              <Link to="/services" className="service-card__link">
                En savoir plus
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>

            <div className="service-card service-card--featured">
              <div className="service-card__number">02</div>
              <div className="service-card__icon">
                <span className="material-symbols-outlined">apartment</span>
              </div>
              <h3>Tertiaire & Entreprises</h3>
              <p>
                Installations pour bureaux, commerces et institutions. 
                Réduction des coûts et valorisation de votre image.
              </p>
              <Link to="/services" className="service-card__link">
                En savoir plus
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>

            <div className="service-card">
              <div className="service-card__number">03</div>
              <div className="service-card__icon">
                <span className="material-symbols-outlined">factory</span>
              </div>
              <h3>Sites industriels</h3>
              <p>
                Projets à grande échelle pour sites industriels et logistiques. 
                Robustesse, continuité et supervision 24/7.
              </p>
              <Link to="/services" className="service-card__link">
                En savoir plus
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
              <span className="eyebrow">Ce qui change avec nous</span>
              <h2>
                Vous ne recevez pas juste des panneaux. 
                Vous recevez une solution complète.
              </h2>
              <p>
                De l'audit initial à la maintenance continue, chaque étape est pensée 
                pour vous apporter sérénité et performance. Nous ne installons pas 
                du solaire — nous concevons votre autonomie énergétique.
              </p>
            </div>

            <div className="quote-card card--glass" data-reveal="right">
              <span className="material-symbols-outlined quote-card__icon">format_quote</span>
              <blockquote>
                « Un projet réussi est celui où le client ne pense plus à son installation — 
                elle fonctionne, elle performe, elle dure. »
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
            <h2>Passez au niveau supérieur</h2>
            <p>
              Upgradez votre site avec une installation photovoltaïque premium. 
              Contactez-nous pour une étude personnalisée.
            </p>
            <Link to="/contact" className="btn btn--secondary btn--lg">
              Upgradez votre site
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
