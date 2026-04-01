'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { supabase } from '@/lib/supabase';
import { Room } from '@/lib/types/database';
import BookingSystem from './BookingSystem';
import styles from './Rooms.module.css';

export default function Rooms() {
  const t = useTranslations('Rooms');
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  useEffect(() => {
    async function fetchRooms() {
      try {
        // Skip if using placeholder credentials
        const isConfigured = 
          process.env.NEXT_PUBLIC_SUPABASE_URL && 
          !process.env.NEXT_PUBLIC_SUPABASE_URL.includes('your-project-id');

        if (!isConfigured) {
          throw new Error('Supabase not configured');
        }

        const { data, error } = await supabase
          .from('rooms')
          .select('*')
          .eq('is_available', true);

        if (error) throw error;
        if (data && data.length > 0) {
          setRooms(data);
        } else {
          throw new Error('No rooms found');
        }
      } catch (err: any) {
        // Only log real errors, not the "not configured" or "no rooms" ones
        if (err.message !== 'Supabase not configured' && err.message !== 'No rooms found') {
          console.error('Error fetching rooms:', err.message || err);
        }
        setRooms([
          {
            id: '1',
            name: 'Quarto Standard',
            description: 'Aconchegante e funcional, perfeito para viajantes que buscam conforto e bom custo-benefício.',
            price_per_night: 180,
            capacity: 2,
            image_url: '🛏️',
            is_available: true
          },
          {
            id: '2',
            name: 'Suíte Família',
            description: 'Espaçosa e bem equipada, ideal para famílias ou casais que desejam mais conforto.',
            price_per_night: 280,
            capacity: 4,
            image_url: '🛎️',
            is_available: true
          },
          {
            id: '3',
            name: 'Chalé Especial',
            description: 'Nosso espaço mais charmoso, com varanda privativa e vista para o jardim.',
            price_per_night: 380,
            capacity: 2,
            image_url: '🌿',
            is_available: true
          }
        ]);
      } finally {
        setLoading(false);
      }
    }

    fetchRooms();
  }, []);

  const getEmoji = (image_url: string) => {
    if (image_url.length <= 2) return image_url;
    if (image_url.includes('suite')) return '🛎️';
    if (image_url.includes('chale')) return '🌿';
    return '🛏️';
  };

  return (
    <section id="acomodacoes" className={styles.roomsSection}>
      <div className={styles.roomsHeader}>
        <p className="section-label" style={{ color: 'var(--gold)' }}>Acomodações</p>
        <h2 className="section-title" style={{ color: 'white' }}>Nossos <em>Quartos</em></h2>
        <p>Cada quarto foi decorado com atenção aos detalhes para que você se sinta completamente em casa.</p>
      </div>

      <div className={styles.roomsGrid}>
        {loading ? (
          <div style={{ color: 'var(--gold-pale)', gridColumn: '1/-1', textAlign: 'center', padding: '3rem' }}>
            Carregando quartos maravilhosos...
          </div>
        ) : (
          rooms.map((room) => (
            <div key={room.id} className={styles.roomCard}>
              <div className={styles.roomImg}>
                {getEmoji(room.image_url)}
                {room.price_per_night < 200 && <span className={styles.roomBadge}>Popular</span>}
                {room.price_per_night >= 300 && <span className={styles.roomBadge}>Exclusivo</span>}
                {room.price_per_night >= 200 && room.price_per_night < 300 && <span className={styles.roomBadge}>Destaque</span>}
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
                    <span className={styles.pricePer}>por noite</span>
                  </div>
                  <button 
                    className={styles.btnReservar}
                    onClick={() => setSelectedRoom(room)}
                  >
                    Reservar
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
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
            backgroundColor: 'var(--warm-white)',
            width: '100%',
            maxWidth: '900px',
            maxHeight: '90vh',
            overflowY: 'auto',
            borderRadius: '4px',
            padding: '1rem'
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
