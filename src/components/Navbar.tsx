import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          Hostel da <span>Vovó Maria</span>
        </div>
        <ul className={styles.navLinks}>
          <li><Link href="#home">Home</Link></li>
          <li><Link href="#sobre">Sobre</Link></li>
          <li><Link href="#acomodacoes">Acomodações</Link></li>
          <li><Link href="#contato">Contato</Link></li>
        </ul>
        <div className={styles.menuToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
}
