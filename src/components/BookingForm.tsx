'use client';

import { useState } from 'react';
import styles from './BookingForm.module.css';

interface Props {
  onSubmit: (data: { name: string; email: string; phone: string }) => void;
  loading: boolean;
}

export default function BookingForm({ onSubmit, loading }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, email, phone });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <label htmlFor="name">Nome Completo</label>
        <input 
          type="text" 
          id="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
          placeholder="Ex: Maria Silva"
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="email">E-mail</label>
        <input 
          type="email" 
          id="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          placeholder="maria@exemplo.com"
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="phone">Telefone / WhatsApp</label>
        <input 
          type="tel" 
          id="phone" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
          required 
          placeholder="(11) 99999-9999"
        />
      </div>
      <button type="submit" className={styles.submitBtn} disabled={loading}>
        {loading ? 'Processando...' : 'Confirmar Reserva'}
      </button>
    </form>
  );
}
