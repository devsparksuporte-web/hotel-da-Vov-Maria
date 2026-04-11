import { useTranslations } from 'next-intl';
import { siteConfig } from '@/lib/config';
import styles from './Footer.module.css';

export default function Footer() {
  const t = useTranslations('Footer');
  const nt = useTranslations('Navbar');

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerBrand}>
          <span className={styles.logo}>{siteConfig.name}</span>
          <p>{t('description')}</p>
        </div>
        <div className={styles.footerCol}>
          <h4>{nt('about')}</h4>
          <ul>
            <li><a href="#sobre">{nt('about')}</a></li>
            <li><a href="#acomodacoes">{nt('rooms')}</a></li>
            <li><a href="#depoimentos">{nt('reviews')}</a></li>
            <li><a href="#reserva">{nt('book')}</a></li>
          </ul>
        </div>
        <div className={styles.footerCol}>
          <h4>{nt('contact')}</h4>
          <ul>
            <li>📍 {siteConfig.contact.address}</li>
            <li>
              <a href={`https://wa.me/${siteConfig.contact.whatsapp}`} target="_blank" className={styles.whatsappLink}>
                📞 {siteConfig.contact.phone}
              </a>
            </li>
            <li>🕗 {t('checkin')} • {t('checkout')}</li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        © {new Date().getFullYear()} {siteConfig.name} — Feito com ❤️ e muito carinho
      </div>
    </footer>
  );
}
