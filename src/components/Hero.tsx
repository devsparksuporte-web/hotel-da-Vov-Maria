'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Coffee, Key, HeartHandshake, Utensils, ChevronDown } from 'lucide-react';
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
          <circle cx="190" cy="190" r="178" stroke="#C9A227" strokeWidth="1" fill="none" opacity="0.2"/>
          <g className={styles.leafCrown}>
            {[...Array(36)].map((_, i) => (
              <path 
                key={i} 
                d="M190 15 C195 25 205 25 200 15 C195 5 185 5 190 15" 
                fill="#C9A227" 
                opacity="0.6"
                transform={`rotate(${i * 10} 190 190)`}
              />
            ))}
          </g>
        </svg>
        <div className={styles.medallionContent}>
          <div className={styles.grandmaIllustration}>
            <Image 
              src="/vovo_maria_illustration.png" 
              alt="Vovó Maria" 
              width={160} 
              height={160} 
              className={styles.illustrationImg}
            />
          </div>
          <div className={styles.medallionDa}>DA VOVÓ</div>
          <div className={styles.medallionMaria}>Maria</div>
        </div>
      </div>

      <div className={`${styles.heroIcons} animate-fade-up`} style={{ animationDelay: '0.6s' }}>
        <div className={styles.iconBadge}>
          <Coffee color="var(--gold)" />
          <span>Café Fresquinho</span>
        </div>
        <div className={styles.iconBadge}>
          <Key color="var(--gold)" />
          <span>Sua Chave</span>
        </div>
        <div className={styles.iconBadge}>
          <Utensils color="var(--gold)" />
          <span>Cozinha Afetiva</span>
        </div>
        <div className={styles.iconBadge}>
          <HeartHandshake color="var(--gold)" />
          <span>Puro Acolhimento</span>
        </div>
      </div>

      <a href="#sobre" className={styles.scrollCue}>
        <span>Descobrir</span>
        <ChevronDown size={20} />
      </a>
    </section>
  );
}
