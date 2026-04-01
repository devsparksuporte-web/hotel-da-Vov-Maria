import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerBrand}>
          <span className={styles.logo}>Vovó Maria</span>
          <p>Uma pousada onde cada detalhe é pensado com carinho para transformar sua viagem em uma memória afetiva inesquecível.</p>
        </div>
        <div className={styles.footerCol}>
          <h4>Navegação</h4>
          <ul>
            <li>Sobre Nós</li>
            <li>Quartos & Suítes</li>
            <li>Café da Manhã</li>
            <li>Galeria de Fotos</li>
            <li>Reservas</li>
          </ul>
        </div>
        <div className={styles.footerCol}>
          <h4>Contato</h4>
          <ul>
            <li>📍 R. Dr. Cardoso da Fonseca, nº 95<br/>Monte Alegre, Cabo Frio - RJ</li>
            <li>
              <a href="https://wa.me/5522997633952" target="_blank" className={styles.whatsappLink}>
                📞 (22) 99763-3952
              </a>
            </li>
            <li>🕗 Check-in: 6h30 • Check-out: 23h00</li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        © 2025 Pousada da Vovó Maria — Feito com ❤️ e muito carinho
      </div>
    </footer>
  );
}
