'use client';

import { useTranslations } from 'next-intl';
import { Coffee, Wifi, ShieldCheck, Heart, ChevronDown } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section id="home" className={styles.hero}>
      <span className={`${styles.heroTopTag} animate-fade-up`}>
        ✦ Pousada da Vovó Maria ✦
      </span>

      <h1 className={`${styles.heroTitle} animate-fade-up`} style={{ animationDelay: '0.2s' }}>
        POUSADA
      </h1>

      <div className={`${styles.medallion} animate-fade-up`} style={{ animationDelay: '0.4s' }}>
        <div className={styles.medallionRing}></div>
        <div className={styles.medallionRingInner}></div>
        <svg className={styles.medallionSvg} viewBox="0 0 380 380" xmlns="http://www.w3.org/2000/svg">
          <circle cx="190" cy="190" r="178" stroke="#C9A227" strokeWidth="1" fill="none" strokeDasharray="6 4" opacity="0.35"/>
          <g opacity="0.4">
            {[...Array(12)].map((_, i) => (
              <ellipse key={i} cx="190" cy="15" rx="6" ry="10" fill="#C9A227" transform={`rotate(${i * 30} 190 190)`}/>
            ))}
          </g>
        </svg>
        <div className={styles.medallionContent}>
          <div className={styles.grandmaIllustration}>👵</div>
          <div className={styles.medallionDa}>DA VOVÓ</div>
          <div className={styles.medallionMaria}>Maria</div>
        </div>
      </div>

      <div className={styles.heroIcons}>
        <div className={`${styles.iconBadge} animate-fade-up`} style={{ top: '20%', left: '10%', animationDelay: '0.6s' }}>
          <Coffee color="var(--gold)" />
          <span>Café Colonial</span>
        </div>
        <div className={`${styles.iconBadge} animate-fade-up`} style={{ top: '15%', right: '15%', animationDelay: '0.8s' }}>
          <Wifi color="var(--gold)" />
          <span>Wi-Fi Fibra</span>
        </div>
        <div className={`${styles.iconBadge} animate-fade-up`} style={{ bottom: '25%', left: '15%', animationDelay: '1s' }}>
          <ShieldCheck color="var(--gold)" />
          <span>Segurança</span>
        </div>
        <div className={`${styles.iconBadge} animate-fade-up`} style={{ bottom: '20%', right: '10%', animationDelay: '1.2s' }}>
          <Heart color="var(--gold)" />
          <span>Acolhimento</span>
        </div>
      </div>

      <a href="#sobre" className={styles.scrollCue}>
        <span>Descobrir</span>
        <ChevronDown size={20} />
      </a>
    </section>
  );
}
