'use client';

import styles from './Reviews.module.css';

export default function Reviews() {
  return (
    <section id="depoimentos" className={styles.reviewsSection}>
      <div className={styles.reviewsInner}>
        <p className="section-label">O que dizem nossos hóspedes</p>
        <h2 className="section-title">Quem ficou, <em>voltou</em></h2>
        <div className="divider"></div>
        <div className={styles.reviewsGrid}>
          <div className={styles.reviewCard}>
            <div className={styles.reviewStars}>★★★★★</div>
            <p className={styles.reviewText}>"Me senti em casa desde o primeiro momento. O café da manhã é incrível e a dona Maria é uma pessoa maravilhosa. Já marquei para voltar no próximo feriado!"</p>
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
            <p className={styles.reviewText}>"O melhor custo-benefício que já encontrei. Quarto limpo, cheiroso, café farto e atendimento impecável. Recomendo de olhos fechados para toda a família."</p>
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
            <p className={styles.reviewText}>"Viajamos em família e foi perfeito! As crianças adoraram, os adultos descansaram de verdade. A Vovó Maria tem um jeito especial de fazer todos se sentirem bem-vindos."</p>
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
