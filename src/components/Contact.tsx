import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="reserva" className={styles.contactSection}>
      <div className={styles.contactInner}>
        <p className="section-label" style={{ color: 'var(--gold)' }}>Nossa Estrutura</p>
        <h2 className="section-title" style={{ color: 'white' }}>Uma extensão da sua <em>casa</em></h2>
        <p>Sinta-se em casa! Nosso espaço foi criado para oferecer momentos inesquecíveis, com churrasqueira, piscina refrescante e vários cantinhos para você relaxar. Desfrute da melhor infraestrutura para a sua família.</p>
        
        <div className={styles.galleryGrid}>
          <img src="/images/lazer/foto-1.jpg" alt="Área de Lazer 1" />
          <img src="/images/lazer/foto-2.jpg" alt="Área de Lazer 2" />
          <img src="/images/lazer/foto-3.jpg" alt="Piscina da Pousada" />
          <img src="/images/lazer/foto-4.jpg" alt="Piscina e Churrasqueira" />
        </div>


        <div className={styles.mapContainer}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.5259461152014!2d-42.028919623864!3d-22.88518903738012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x971bb9524cc40d%3A0x6b2e1f2988ff8676!2sR.%20Dr.%20Cardoso%20da%20Fonseca%2C%2095%20-%20Monte%20Alegre%2C%20Cabo%20Frio%20-%20RJ%2C%2028900-000!5e0!3m2!1spt-BR!2sbr!4v1711920000000!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="350" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da Pousada da Vovó Maria"
          ></iframe>
        </div>

        <div className={styles.contactMeta}>
          <div className={styles.metaItem}>
            📍 R. Dr. Cardoso da Fonseca, 95 — Cabo Frio - RJ
          </div>
          <div className={styles.metaItem}>
            🕒 Check-in: <strong>6h30</strong> | Check-out: <strong>23h00</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
