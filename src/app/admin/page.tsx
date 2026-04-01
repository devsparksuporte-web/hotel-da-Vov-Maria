'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Booking } from '@/lib/types/database';
import styles from './Admin.module.css';

export default function AdminDashboard() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBookings() {
      try {
        const { data, error } = await supabase
          .from('bookings')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        if (data) setBookings(data);
      } catch (err) {
        console.error('Error fetching bookings:', err);
        // Fallback mock
        setBookings([
          { id: '1', room_id: '1', guest_name: 'Test Guest', guest_email: 'test@example.com', check_in: '2026-04-01', check_out: '2026-04-05', status: 'pending', total_price: 320 },
        ]);
      } finally {
        setLoading(false);
      }
    }
    fetchBookings();
  }, []);

  const updateStatus = async (id: string, newStatus: 'confirmed' | 'cancelled') => {
    try {
      const { error } = await supabase
        .from('bookings')
        .update({ status: newStatus })
        .eq('id', id);
      if (error) throw error;
      setBookings(bookings.map(b => b.id === id ? { ...b, status: newStatus } : b));
    } catch (err) {
      console.error('Error updating booking:', err);
    }
  };

  return (
    <div className={styles.admin}>
      <header className={styles.header}>
        <h1>Painel Administrativo</h1>
        <p>Bem-vinda de volta, Vovó Maria!</p>
      </header>

      <section className={styles.stats}>
        <div className={styles.statCard}>
          <h3>Total Reservas</h3>
          <span>{bookings.length}</span>
        </div>
        <div className={styles.statCard}>
          <h3>Pendentes</h3>
          <span>{bookings.filter(b => b.status === 'pending').length}</span>
        </div>
      </section>

      <section className={styles.bookings}>
        <h2>Gerenciar Reservas</h2>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Hóspede</th>
                <th>Check-in</th>
                <th>Check-out</th>
                <th>Status</th>
                <th>Total</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map(booking => (
                <tr key={booking.id}>
                  <td>
                    <strong>{booking.guest_name}</strong>
                    <br />
                    <span>{booking.guest_email}</span>
                  </td>
                  <td>{booking.check_in}</td>
                  <td>{booking.check_out}</td>
                  <td>
                    <span className={`${styles.status} ${styles[booking.status]}`}>
                      {booking.status}
                    </span>
                  </td>
                  <td>R$ {booking.total_price}</td>
                  <td>
                    {booking.status === 'pending' && (
                      <div className={styles.actions}>
                        <button onClick={() => updateStatus(booking.id, 'confirmed')} className={styles.confirmBtn}>Confirmar</button>
                        <button onClick={() => updateStatus(booking.id, 'cancelled')} className={styles.cancelBtn}>Recusar</button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
