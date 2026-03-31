import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Bem-vindo ao seu lar longe de casa</h1>
        <p>Tradição, conforto e o carinho que só a Vovó Maria oferece.</p>
        <a href="#contato" className="btn-primary">Reserve Agora</a>
      </div>
      <div className={styles.heroOverlay}></div>
    </section>
  );
}
