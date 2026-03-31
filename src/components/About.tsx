import styles from './About.module.css';

export default function About() {
  return (
    <section id="sobre" className={`${styles.about} container`}>
      <div className={styles.aboutGrid}>
        <div className={styles.aboutText}>
          <span className="section-subtitle">Nossa História</span>
          <h2>Acolhimento com Alma</h2>
          <p>O Hostel da Vovó Maria nasceu do desejo de compartilhar a hospitalidade brasileira em sua forma mais pura. Localizado no coração de uma vila tranquila, nosso espaço combina o rústico com o moderno para garantir sua paz.</p>
          <p>Aqui, cada hóspede é tratado como parte da família. Do cheiro do café coado na hora aos quartos impecavelmente limpos, cada detalhe é pensado para seu bem-estar.</p>
        </div>
        <div className={styles.aboutImage}>
          <img src="/images/breakfast.png" alt="Café da manhã da Vovó Maria" />
        </div>
      </div>
    </section>
  );
}
