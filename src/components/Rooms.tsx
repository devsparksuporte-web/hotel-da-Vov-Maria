'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Room } from '@/lib/types/database';
import BookingSystem from './BookingSystem';
import styles from './Rooms.module.css';

const ROOMS: Room[] = [
  {
    id: '1',
    name: 'Quarto Standard',
    description: 'Aconchegante e funcional, perfeito para viajantes que buscam conforto e bom custo-benefício. Inclui cama de casal premium, ar-condicionado silencioso e enxoval de alta qualidade.',
    price_per_night: 220,
    capacity: 2,
    image_url: '/quarto-standard.png',
    is_available: true,
  },
  {
    id: '2',
    name: 'Suíte Família',
    description: 'Espaçosa e sofisticada, ideal para famílias ou casais exigentes. Possui varanda privativa, frigobar gourmet e todo o requinte da nossa hospitalidade.',
    price_per_night: 350,
    capacity: 4,
    image_url: '/suite-luxo.png',
    is_available: true,
  },
];

export default function Rooms() {
  const t = useTranslations('Rooms');
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  return (
    <section id="acomodacoes" className={styles.roomsSection}>
      <div className={styles.roomsHeader}>
        <p className="section-label">{t('subtitle')}</p>
        <h2 className="section-title">{t('title')}</h2>
        <p>{t('description') || 'Cada detalhe foi planejado para proporcionar uma experiência de repouso absoluto e sofisticação.'}</p>
      </div>

      <div className={styles.roomsGrid}>
        {ROOMS.map((room: Room) => (
            <div key={room.id} className={styles.roomCard}>
              <div className={styles.roomImgWrapper}>
                <Image 
                  src={room.image_url} 
                  alt={room.name}
                  fill
                  className={styles.roomCardImage}
                />
                <span className={styles.roomBadge}>
                  {room.price_per_night < 300 ? t('popular') : t('featured')}
                </span>
              </div>
              <div className={styles.roomBody}>
                <h3>{room.name}</h3>
                <p>{room.description}</p>
                <div className={styles.roomAmenities}>
                  <span className={styles.amenity}>☕ Café Premium</span>
                  <span className={styles.amenity}>🌬️ Climatização</span>
                  <span className={styles.amenity}>🛁 Suíte Privativa</span>
                  <span className={styles.amenity}>👤 {room.capacity} Hóspedes</span>
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
          backgroundColor: 'rgba(5, 8, 22, 0.9)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          backdropFilter: 'blur(12px)'
        }}>
          <div style={{
            position: 'relative',
            backgroundColor: 'var(--bg-cream)',
            width: '100%',
            maxWidth: '640px',
            maxHeight: '90vh',
            overflowY: 'auto',
            borderRadius: '8px',
            padding: '2.5rem',
            boxShadow: 'var(--shadow-deep)'
          }}>
            <button 
              onClick={() => setSelectedRoom(null)}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'none',
                border: 'none',
                fontSize: '1.8rem',
                cursor: 'pointer',
                color: 'var(--primary)',
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
