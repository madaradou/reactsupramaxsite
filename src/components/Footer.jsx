import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner container--wide">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-mark">SM</span>
              <div>
                <span className="footer__company-name">SupraMax Energy</span>
                <span className="footer__tagline">Ingénierie photovoltaïque premium</span>
              </div>
            </div>
            <p className="footer__desc">
              Solutions photovoltaïques premium pour le résidentiel, le tertiaire et l'industriel. 
              Excellence énergétique au service de la Tunisie.
            </p>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__heading">Navigation</h4>
            <nav aria-label="Footer navigation">
              <Link to="/" className="footer__link">Accueil</Link>
              <Link to="/services" className="footer__link">Services</Link>
              <Link to="/a-propos" className="footer__link">À propos</Link>
              <Link to="/realisations" className="footer__link">Réalisations</Link>
              <Link to="/contact" className="footer__link">Contact</Link>
            </nav>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__heading">Services</h4>
            <nav>
              <Link to="/services" className="footer__link">Audit & conception</Link>
              <Link to="/services" className="footer__link">Installation</Link>
              <Link to="/services" className="footer__link">Stockage & continuité</Link>
              <Link to="/services" className="footer__link">Monitoring & maintenance</Link>
            </nav>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__heading">Contact</h4>
            <div className="footer__contact-items">
              <div className="footer__contact-item">
                <span className="material-symbols-outlined">location_on</span>
                <span>Tunis, Tunisie</span>
              </div>
              <div className="footer__contact-item">
                <span className="material-symbols-outlined">call</span>
                <span>+216 71 000 000</span>
              </div>
              <div className="footer__contact-item">
                <span className="material-symbols-outlined">mail</span>
                <span>contact@supramax.energy</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {year} SupraMax Energy. Tous droits réservés.
          </p>
          <div className="footer__bottom-links">
            <a href="#" className="footer__link--sm">Mentions légales</a>
            <a href="#" className="footer__link--sm">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
