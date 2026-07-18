import { Link } from 'react-router-dom'
import './About.css'

export default function About() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="page-hero__content container" data-reveal>
          <span className="eyebrow">Notre signature</span>
          <h1 className="page-hero__title">
            L'ingénierie au service de votre avenir énergétique
          </h1>
          <p className="page-hero__subtitle">
            Nous combinons la rigueur de l'ingénierie avec l'élégance de l'exécution 
            pour des installations qui transcendent l'standard.
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
                <span className="vision-card__label">Années d'expérience</span>
              </div>
              <div className="vision-card__item">
                <span className="vision-card__number">3</span>
                <span className="vision-card__label">Segments d'expertise</span>
              </div>
              <div className="vision-card__item">
                <span className="vision-card__number">1</span>
                <span className="vision-card__label">Standard premium</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Positioning ──────────────────────────────── */}
      <section className="section positioning">
        <div className="container">
          <div className="section-header" data-reveal>
            <span className="eyebrow">Notre positionnement</span>
            <h2>Entre rigueur d'ingénierie et élégance d'exécution</h2>
            <p>
              Nous occupons un espace unique : la intersection de la précision technique 
              et du souci du détail esthétique. Trois principes guident chacune de nos décisions.
            </p>
          </div>

          <div className="principles-grid" data-stagger>
            <div className="principle-card">
              <div className="principle-card__icon">
                <span className="material-symbols-outlined">psychology</span>
              </div>
              <h3>Décisions fondées</h3>
              <p>
                Chaque recommandation est appuyée par des données techniques, 
                des simulations de rendement et une analyse rigoureuse de votre site.
              </p>
            </div>

            <div className="principle-card">
              <div className="principle-card__icon">
                <span className="material-symbols-outlined">handshake</span>
              </div>
              <h3>Relation de confiance</h3>
              <p>
                Nous construisons des partenariats durables, pas des transactions. 
                Transparence totale sur les choix techniques et financiers.
              </p>
            </div>

            <div className="principle-card">
              <div className="principle-card__icon">
                <span className="material-symbols-outlined">diamond</span>
              </div>
              <h3>Finition premium</h3>
              <p>
                La qualité se voit dans les détails : câblage impeccable, intégration 
                architecturale soignée, documentation complète.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────── */}
      <section className="section values-section">
        <div className="container">
          <div className="section-header" data-reveal>
            <span className="eyebrow">Nos valeurs</span>
            <h2>Ce qui nous définit</h2>
          </div>

          <div className="values-grid" data-stagger>
            <div className="value-card">
              <div className="value-card__icon">
                <span className="material-symbols-outlined">lightbulb</span>
              </div>
              <h3>Innovation utile</h3>
              <p>
                Nous adoptons les technologies les plus avancées quand elles apportent 
                une valeur réelle. Pas d'innovation pour l'innovation.
              </p>
            </div>

            <div className="value-card">
              <div className="value-card__icon">
                <span className="material-symbols-outlined">fact_check</span>
              </div>
              <h3>Qualité vérifiable</h3>
              <p>
                Nos engagements sont mesurables. Performance garantie, 
                disponibilité documentée, résultats transparents.
              </p>
            </div>

            <div className="value-card">
              <div className="value-card__icon">
                <span className="material-symbols-outlined">groups</span>
              </div>
              <h3>Sprit de partenariat</h3>
              <p>
                Votre succès est notre succès. Nous investissons dans la relation 
                long terme et l'accompagnement continu.
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
              <span className="eyebrow">Notre promesse</span>
              <h2>
                Vous aider à décider avec sérénité
              </h2>
              <p>
                Un projet photovoltaïque est un investissement à long terme. 
                Notre rôle est de vous éclairer, pas de vous vendre. Nous posons 
                les questions que d'autres ne posent pas, pour que votre décision 
                soit éclairée et durable.
              </p>
              <Link to="/contact" className="btn btn--primary btn--lg" style={{ marginTop: 'var(--space-xl)' }}>
                Parlons de votre projet
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>

            <div className="promise-quote card--glass">
              <span className="material-symbols-outlined promise-quote__icon">format_quote</span>
              <blockquote>
                « Les projets qui réussissent sont ceux où chaque partie prenante 
                a compris, adhéré et contribué. La technique est notre métier, 
                la confiance est notre fondation. »
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
            <h2>Rencontrons-nous</h2>
            <p>
              Échangeons sur votre projet et explorez ensemble les possibilités 
              que l'énergie solaire peut offrir à votre site.
            </p>
            <Link to="/contact" className="btn btn--secondary btn--lg">
              Prendre rendez-vous
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
