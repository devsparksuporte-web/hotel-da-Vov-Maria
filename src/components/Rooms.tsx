'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Room } from '@/lib/types/database';
import BookingSystem from './BookingSystem';
import styles from './Rooms.module.css';

const ROOMS: Room[] = [
  {
    id: '1',
    name: 'Quarto Standard',
    description: 'Aconchegante e funcional, perfeito para viajantes que buscam conforto e bom custo-benefício. Inclui cama de casal, ar-condicionado e banheiro privativo.',
    price_per_night: 180,
    capacity: 2,
    image_url: '🛏️',
    is_available: true,
  },
  {
    id: '2',
    name: 'Suíte Família',
    description: 'Espaçosa e bem equipada para famílias ou casais. Possui camas extras, frigobar, varanda e todo o aconchego da Vovó Maria.',
    price_per_night: 280,
    capacity: 4,
    image_url: '🛎️',
    is_available: true,
  },
];

export default function Rooms() {
  const t = useTranslations('Rooms');
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  const getEmoji = (image_url: string) => {
    if (image_url.length <= 2) return image_url;
    if (image_url.includes('suite')) return '🛎️';
    if (image_url.includes('chale')) return '🌿';
    return '🛏️';
  };

  return (
    <section id="acomodacoes" className={styles.roomsSection}>
      <div className={styles.roomsHeader}>
        <p className="section-label" style={{ color: 'var(--gold)' }}>{t('subtitle')}</p>
        <h2 className="section-title" style={{ color: 'white' }}>{t('title')}</h2>
        <p>Cada quarto foi decorado com atenção aos detalhes para que você se sinta completamente em casa.</p>
      </div>

      <div className={styles.roomsGrid}>
        {ROOMS.map((room: Room) => (
            <div key={room.id} className={styles.roomCard}>
              <div className={styles.roomImg}>
                {getEmoji(room.image_url)}
                {room.price_per_night < 200 && <span className={styles.roomBadge}>{t('popular')}</span>}
                {room.price_per_night >= 200 && <span className={styles.roomBadge}>{t('featured')}</span>}
              </div>
              <div className={styles.roomBody}>
                <h3>{room.name}</h3>
                <p>{room.description}</p>
                <div className={styles.roomAmenities}>
                  <span className={styles.amenity}>☕ Café incluso</span>
                  <span className={styles.amenity}>🌬️ Ar-cond.</span>
                  <span className={styles.amenity}>🚿 Banheiro</span>
                  <span className={styles.amenity}>👤 {room.capacity} Pessoas</span>
                </div>
                <div className={styles.roomFooter}>
                  <div className={styles.priceWrapper}>
                    <span className={styles.priceVal}>R$ {room.price_per_night}</span>
                    <span className={styles.pricePer}>{t('price_per_night', { price: '' }).replace('R$ ', '')}</span>
                  </div>
                  <button 
                    className={styles.btnReservar}
                    onClick={() => setSelectedRoom(room)}
                  >
                    {t('book')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      {selectedRoom && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.85)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          backdropFilter: 'blur(8px)'
        }}>
          <div style={{
            position: 'relative',
            backgroundColor: '#fff',
            width: '100%',
            maxWidth: '640px',
            maxHeight: '90vh',
            overflowY: 'auto',
            borderRadius: '8px',
            padding: '2.5rem'
          }}>
            <button 
              onClick={() => setSelectedRoom(null)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: 'var(--crimson-dark)',
                zIndex: 10
              }}
            >
              ✕
            </button>
            <BookingSystem 
              room={selectedRoom} 
              onClose={() => setSelectedRoom(null)} 
            />
          </div>
        </div>
      )}
    </section>
  );
}
