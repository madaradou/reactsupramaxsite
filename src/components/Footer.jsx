import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import './Footer.css'

export default function Footer() {
  const { t } = useLanguage()
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
                <span className="footer__tagline">{t('tagline')}</span>
              </div>
            </div>
            <p className="footer__desc">
              {t('footer_desc')}
            </p>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__heading">{t('footer_nav')}</h4>
            <nav aria-label="Footer navigation">
              <Link to="/" className="footer__link">{t('nav_home')}</Link>
              <Link to="/services" className="footer__link">{t('nav_services')}</Link>
              <Link to="/a-propos" className="footer__link">{t('nav_about')}</Link>
              <Link to="/realisations" className="footer__link">{t('nav_realizations')}</Link>
              <Link to="/contact" className="footer__link">{t('nav_contact')}</Link>
            </nav>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__heading">{t('footer_services')}</h4>
            <nav>
              <Link to="/services" className="footer__link">{t('footer_service_audit')}</Link>
              <Link to="/services" className="footer__link">{t('footer_service_install')}</Link>
              <Link to="/services" className="footer__link">{t('footer_service_storage')}</Link>
              <Link to="/services" className="footer__link">{t('footer_service_monitoring')}</Link>
            </nav>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__heading">{t('footer_contact')}</h4>
            <div className="footer__contact-items">
              <div className="footer__contact-item">
                <span className="material-symbols-outlined">location_on</span>
                <span>{t('contact_address_value')}</span>
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
            &copy; {year} SupraMax Energy. {t('footer_rights')}
          </p>
          <div className="footer__bottom-links">
            <a href="#" className="footer__link--sm">{t('footer_legal')}</a>
            <a href="#" className="footer__link--sm">{t('footer_privacy')}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
