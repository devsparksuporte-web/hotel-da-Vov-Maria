import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>&copy; 2026 Hostel da Vovó Maria. Todos os direitos reservados.</p>
        <div className={styles.socialLinks}>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}
