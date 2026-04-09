'use client';

import styles from './About.module.css';

export default function About() {
  return (
    <section id="sobre" className={styles.about}>
      <div className={`${styles.aboutGrid} container`}>
        <div className={styles.aboutVisual}>
          <div className={styles.aboutCard}>
            <div className={styles.cardIcon}>🏡</div>
            <h3>Uma pousada com alma</h3>
            <p>Cada detalhe foi pensado com o carinho de quem recebe amigos em casa. Do café da manhã feito com amor ao aconchego dos quartos cuidadosamente decorados.</p>
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <span className={styles.statNum}>12</span>
                <span className={styles.statLabel}>Quartos</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNum}>5★</span>
                <span className={styles.statLabel}>Avaliação</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNum}>+500</span>
                <span className={styles.statLabel}>Hóspedes</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNum}>15</span>
                <span className={styles.statLabel}>Anos</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.aboutText}>
          <p className="section-label">Nossa história</p>
          <h2 className="section-title">O calor de <em>casa</em>, onde você estiver</h2>
          <div className="divider"></div>
          <p>A Pousada da Vovó Maria nasceu do sonho de oferecer muito mais do que uma simples hospedagem. Aqui, cada hóspede é tratado como parte da família — com carinho, respeito e toda a dedicação que você merece.</p>
          <p>Localizada em um ambiente tranquilo e acolhedor, nossa pousada combina o charme rústico com todo o conforto moderno.</p>
        </div>
      </div>
    </section>
  );
}
