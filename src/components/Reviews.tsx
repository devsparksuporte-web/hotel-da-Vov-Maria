'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslations } from 'next-intl';
import styles from './Reviews.module.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Reviews() {
  const t = useTranslations('Reviews');
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(`.${styles.reviewCard}`, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      x: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    });
  }, { scope: containerRef });

  const reviews = ['review1', 'review2', 'review3'];

  return (
    <section id="depoimentos" className={styles.reviewsSection} ref={containerRef}>
      <div className={styles.reviewsInner}>
        <p className="section-label">{t('subtitle')}</p>
        <h2 className="section-title">{t('title')}</h2>
        <div className="divider"></div>
        <div className={styles.reviewsGrid}>
          {reviews.map((key) => (
            <div key={key} className={styles.reviewCard}>
              <div className={styles.reviewStars}>★★★★★</div>
              <p className={styles.reviewText}>{t(`items.${key}.text`)}</p>
              <div className={styles.reviewAuthor}>
                <div className={styles.avatar}>{t(`items.${key}.author`)[0]}</div>
                <div className={styles.authorInfo}>
                  <strong>{t(`items.${key}.author`)}</strong>
                  <span>{t(`items.${key}.location`)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
