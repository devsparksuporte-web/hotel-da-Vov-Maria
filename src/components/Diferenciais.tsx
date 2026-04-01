'use client';

import { useTranslations } from 'next-intl';
import styles from './Diferenciais.module.css';

const Diferenciais = () => {
  const t = useTranslations('Diferenciais');

  const diferenciais = [
    { icon: '☕', title: 'Café da Manhã Caseiro', desc: 'Pão fresco, bolo, frutas da estação e muito carinho preparados toda manhã.' },
    { icon: '🛏️', title: 'Conforto Aconchegante', desc: 'Roupas de cama macias, quartos sempre perfumados e detalhes que fazem a diferença.' },
    { icon: '🔑', title: 'Atendimento Personalizado', desc: 'Check-in flexível e atenção individual para cada hóspede, como em casa.' },
    { icon: '🌿', title: 'Ambiente Tranquilo', desc: 'Localização calma, jardim cuidado e espaços para relaxar com paz e sossego.' },
    { icon: '🍰', title: 'Docinho de Boas-Vindas', desc: 'Todo hóspede recebe um mimo especial da Vovó Maria ao chegar.' },
    { icon: '📍', title: 'Localização Estratégica', desc: 'Fácil acesso às praias e pontos turísticos de Cabo Frio.' },
  ];

  return (
    <section id="diferenciais" className={styles.diferenciaisSection}>
      <div className={styles.diferenciaisInner}>
        <p className="section-label">Por que nos escolher</p>
        <h2 className="section-title">O que nos torna <em>especiais</em></h2>
        <div className="divider"></div>
        <div className={styles.diferenciaisGrid}>
          {diferenciais.map((item, idx) => (
            <div key={idx} className={styles.diferencialItem}>
              <div className={styles.diferencialIcon}>{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;
