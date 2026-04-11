'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Coffee, Key, HeartHandshake, Utensils, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useTranslations } from 'next-intl';
import FloatingScene from './FloatingScene';
import styles from './Hero.module.css';

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const t = useTranslations('Hero');
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.from(`.${styles.hero}`, {
      opacity: 0,
      duration: 1.5,
      ease: 'power4.out'
    })
    .from(`.${styles.heroTopTag}`, {
      y: -20,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.7)'
    }, '-=1')
    .from(`.${styles.heroTitle}`, {
      scale: 0.8,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out'
    }, '-=0.6')
    .from(`.${styles.medallion}`, {
      rotationX: 45,
      scale: 0.5,
      opacity: 0,
      duration: 1.5,
      ease: 'elastic.out(1, 0.75)'
    }, '-=0.8')
    .from(`.${styles.iconBadge}`, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out'
    }, '-=1');
  }, { scope: containerRef });

  return (
    <section id="home" className={styles.hero} ref={containerRef}>
      <FloatingScene />
      
      <span className={styles.heroTopTag}>
        {t('badge')}
      </span>

      <h1 className={styles.heroTitle}>
        {t('title')}
      </h1>

      <div className={styles.medallion}>
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

      <div className={styles.heroIcons}>
        <div className={styles.iconBadge}>
          <Coffee color="var(--gold)" />
          <span>{t('features.coffee')}</span>
        </div>
        <div className={styles.iconBadge}>
          <Key color="var(--gold)" />
          <span>{t('features.key')}</span>
        </div>
        <div className={styles.iconBadge}>
          <Utensils color="var(--gold)" />
          <span>{t('features.kitchen')}</span>
        </div>
        <div className={styles.iconBadge}>
          <HeartHandshake color="var(--gold)" />
          <span>{t('features.welcome')}</span>
        </div>
      </div>

      <a href="#sobre" className={styles.scrollCue}>
        <span>{t('cta')}</span>
        <ChevronDown size={20} />
      </a>
    </section>
  );
}
