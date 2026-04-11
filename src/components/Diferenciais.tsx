import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './Diferenciais.module.css';

gsap.registerPlugin(useGSAP);

const Diferenciais = () => {
  const t = useTranslations('Features');
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(`.${styles.diferencialItem}`, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out'
    });
  }, { scope: containerRef });

  const diferenciais = [
    { icon: '☕', key: 'breakfast' },
    { icon: '🛏️', key: 'comfort' },
    { icon: '🔑', key: 'service' },
    { icon: '🌿', key: 'tranquility' },
    { icon: '🍰', key: 'gift' },
    { icon: '📍', key: 'location' },
  ];

  return (
    <section id="diferenciais" className={styles.diferenciaisSection} ref={containerRef}>
      <div className={styles.diferenciaisInner}>
        <p className="section-label">Por que nos escolher</p>
        <h2 className="section-title">{t('title')}</h2>
        <div className="divider"></div>
        <div className={styles.diferenciaisGrid}>
          {diferenciais.map((item, idx) => (
            <div key={idx} className={styles.diferencialItem}>
              <div className={styles.diferencialIcon}>{item.icon}</div>
              <h4>{t(`items.${item.key}`)}</h4>
              <p>{t(`items.${item.key}_desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;
