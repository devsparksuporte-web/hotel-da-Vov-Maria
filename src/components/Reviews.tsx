import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Reviews.module.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Reviews() {
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
  return (
    <section id="depoimentos" className={styles.reviewsSection} ref={containerRef}>
      <div className={styles.reviewsInner}>
        <p className="section-label">O que dizem nossos hóspedes</p>
        <h2 className="section-title">Quem ficou, <em>voltou</em></h2>
        <div className="divider"></div>
        <div className={styles.reviewsGrid}>
          <div className={styles.reviewCard}>
            <div className={styles.reviewStars}>★★★★★</div>
            <p className={styles.reviewText}>“Eu e minha família adoramos! Desde o primeiro momento nos sentimos em casa. O café da manhã é maravilhoso e a dona Maria é um amor de pessoa. Já até combinamos de voltar no próximo feriado!” 😊</p>
            <div className={styles.reviewAuthor}>
              <div className={styles.avatar}>S</div>
              <div className={styles.authorInfo}>
                <strong>Sarah e família</strong>
                <span>Belo Horizonte, MG</span>
              </div>
            </div>
          </div>
          <div className={styles.reviewCard}>
            <div className={styles.reviewStars}>★★★★★</div>
            <p className={styles.reviewText}>&quot;O melhor custo-benefício que já encontrei. Quarto limpo, cheiroso, café farto e atendimento impecável. Recomendo de olhos fechados para toda a família.&quot;</p>
            <div className={styles.reviewAuthor}>
              <div className={styles.avatar}>R</div>
              <div className={styles.authorInfo}>
                <strong>Ricardo M.</strong>
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>
          <div className={styles.reviewCard}>
            <div className={styles.reviewStars}>★★★★★</div>
            <p className={styles.reviewText}>&quot;Viajamos em família e foi perfeito! As crianças adoraram, os adultos descansaram de verdade. A Vovó Maria tem um jeito especial de fazer todos se sentirem bem-vindos.&quot;</p>
            <div className={styles.reviewAuthor}>
              <div className={styles.avatar}>M</div>
              <div className={styles.authorInfo}>
                <strong>Manoella e família</strong>
                <span>Uberlândia, MG</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
