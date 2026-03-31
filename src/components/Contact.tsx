import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contato" className={`${styles.contact} container`}>
      <div className={styles.contactCard}>
        <div className={styles.contactInfo}>
          <h2>Entre em contato</h2>
          <p>Estamos ansiosos para receber você!</p>
          <ul className={styles.contactList}>
            <li><strong>Endereço:</strong> Rua das Flores, 123 - Centro</li>
            <li><strong>Telefone:</strong> (11) 99999-9999</li>
            <li><strong>E-mail:</strong> contato@vovomaria.com.br</li>
          </ul>
        </div>
        <div className={styles.contactForm}>
          <form id="booking-form">
            <input type="text" placeholder="Seu Nome" required />
            <input type="email" placeholder="Seu E-mail" required />
            <textarea placeholder="Sua Mensagem" rows={4}></textarea>
            <button type="submit" className={styles.btnSubmit}>Enviar Mensagem</button>
          </form>
        </div>
      </div>
    </section>
  );
}
