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
      <div className={styles.heroBg}>
        <Image 
          src="/hero-luxury.png" 
          alt="Luxury Ambience" 
          fill 
          priority
          className={styles.heroImg}
        />
        <div className={styles.heroOverlay}></div>
      </div>
      
      <FloatingScene />
      
      <div className={styles.heroContent}>
        <span className={styles.heroTopTag}>
          {t('badge')}
        </span>

        <h1 className={styles.heroTitle}>
          {t('title')}
        </h1>

        <div className={styles.medallion}>
          <Image
            src="/logo_vovo_maria.png"
            alt="Pousada da Vovó Maria"
            width={320}
            height={320}
            className={styles.newLogo}
            priority
          />
        </div>

        <div className={styles.heroCtaWrapper}>
          <a href="#reserva" className="btn-primary">
            {t('cta_book')}
          </a>
          <a href="#acomodacoes" className={styles.btnSecondary}>
            {t('cta_rooms')}
          </a>
        </div>

        <div className={styles.heroIcons}>
          <div className={styles.iconBadge}>
            <Coffee color="var(--secondary)" />
            <span>{t('features.coffee')}</span>
          </div>
          <div className={styles.iconBadge}>
            <Key color="var(--secondary)" />
            <span>{t('features.key')}</span>
          </div>
          <div className={styles.iconBadge}>
            <Utensils color="var(--secondary)" />
            <span>{t('features.kitchen')}</span>
          </div>
          <div className={styles.iconBadge}>
            <HeartHandshake color="var(--secondary)" />
            <span>{t('features.welcome')}</span>
          </div>
        </div>
      </div>

      <a href="#sobre" className={styles.scrollCue}>
        <ChevronDown size={24} />
      </a>
    </section>
  );
}
