'use client';

import { useTranslations } from 'next-intl';
import styles from './About.module.css';

export default function About() {
  const t = useTranslations('About');

  return (
    <section id="sobre" className={styles.about}>
      <div className={`${styles.aboutGrid} container`}>
        <div className={styles.aboutVisual}>
          <div className={styles.aboutCard}>
            <div className={styles.cardIcon}>🏡</div>
            <h3>{t('title')}</h3>
            <p>{t('p1')}</p>
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <span className={styles.statNum}>12</span>
                <span className={styles.statLabel}>{t('stats.rooms')}</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNum}>5★</span>
                <span className={styles.statLabel}>{t('stats.rating')}</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNum}>+500</span>
                <span className={styles.statLabel}>{t('stats.guests')}</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNum}>15</span>
                <span className={styles.statLabel}>{t('stats.years')}</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.aboutText}>
          <p className="section-label">{t('subtitle')}</p>
          <h2 className="section-title">{t('title')}</h2>
          <div className="divider"></div>
          <p>{t('p1')}</p>
          <p>{t('p2')}</p>
        </div>
      </div>
    </section>
  );
}
