import styles from './Rooms.module.css';

export default function Rooms() {
  return (
    <section id="acomodacoes" className={styles.rooms}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className="section-subtitle">Onde você vai descansar</span>
          <h2>Nossas Acomodações</h2>
        </div>
        <div className={styles.roomsGrid}>
          <div className={styles.roomCard}>
            <div className={styles.roomImg}>
              <img src="/images/room.png" alt="Quarto Premium" />
            </div>
            <div className={styles.roomInfo}>
              <h3>Dormitórios Mistos</h3>
              <p>Camas confortáveis, armários individuais e iluminação suave para noites tranquilas.</p>
              <span className="price">A partir de R$ 80/noite</span>
            </div>
          </div>
          <div className={styles.roomCard}>
            <div className={styles.roomImg}>
              <img src="/images/hero.png" alt="Fachada do Hostel" />
            </div>
            <div className={styles.roomInfo}>
              <h3>Suítes Privativas</h3>
              <p>Privacidade total com o mesmo charme rústico e conforto de nossa casa.</p>
              <span className="price">A partir de R$ 220/noite</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
