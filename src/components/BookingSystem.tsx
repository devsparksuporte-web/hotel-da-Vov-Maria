'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { differenceInDays, format } from 'date-fns';
import { ptBR, enUS, es } from 'date-fns/locale';
import { Room } from '@/lib/types/database';
import BookingCalendar from './BookingCalendar';
import styles from './BookingSystem.module.css';

const locales = { pt: ptBR, en: enUS, es: es };

const WHATSAPP_NUMBER = '5522997633952';

interface Props {
  room: Room;
  onClose: () => void;
}

export default function BookingSystem({ room, onClose }: Props) {
  const locale = useLocale();
  const dateLocale = locales[locale as keyof typeof locales] || ptBR;

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSelectRange = (start: Date | null, end: Date | null) => {
    setStartDate(start);
    setEndDate(end);
  };

  const calculateTotal = () => {
    if (!startDate || !endDate) return 0;
    const nights = Math.max(differenceInDays(endDate, startDate), 1);
    return nights * room.price_per_night;
  };

  const getNights = () => {
    if (!startDate || !endDate) return 0;
    return Math.max(differenceInDays(endDate, startDate), 1);
  };

  const handleSendWhatsApp = () => {
    if (!startDate || !endDate || !name.trim()) return;

    const checkIn = format(startDate, "dd/MM/yyyy", { locale: ptBR });
    const checkOut = format(endDate, "dd/MM/yyyy", { locale: ptBR });
    const nights = getNights();
    const total = calculateTotal();

    const message = [
      `🏨 *Solicitação de Reserva — Pousada da Vovó Maria*`,
      ``,
      `👤 *Nome:* ${name}`,
      phone ? `📱 *Telefone:* ${phone}` : '',
      ``,
      `🛏️ *Quarto:* ${room.name}`,
      `📅 *Check-in:* ${checkIn}`,
      `📅 *Check-out:* ${checkOut}`,
      `🌙 *Noites:* ${nights}`,
      `💰 *Total estimado:* R$ ${total.toLocaleString('pt-BR')}`,
      ``,
      `Aguardo confirmação de disponibilidade. Obrigado(a)! 😊`,
    ].filter(Boolean).join('\n');

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className={styles.bookingSystem}>
      <div className={styles.roomHeader}>
        <h3>{room.name}</h3>
        <p>R$ {room.price_per_night}<span>/noite</span></p>
      </div>

      <div className={styles.steps}>
        <div className={`${styles.step} ${step === 1 ? styles.active : ''}`}>
          1. Datas
        </div>
        <div className={`${styles.step} ${step === 2 ? styles.active : ''}`}>
          2. Seus Dados
        </div>
      </div>

      {step === 1 ? (
        <div className={styles.calendarStep}>
          <BookingCalendar onSelectRange={handleSelectRange} />

          <div className={`${styles.summary} ${startDate && endDate ? styles.summaryActive : ''}`}>
            {startDate && endDate ? (
              <>
                <p className={styles.dateRange}>
                  {format(startDate, 'dd MMM', { locale: dateLocale })} → {format(endDate, 'dd MMM', { locale: dateLocale })}
                  <span className={styles.nightsBadge}>{getNights()} noite{getNights() !== 1 ? 's' : ''}</span>
                </p>
                <p className={styles.total}>R$ {calculateTotal().toLocaleString('pt-BR')}</p>
              </>
            ) : (
              <p className={styles.prompt}>
                {startDate ? '📅 Selecione a data de saída' : '📅 Selecione as datas da sua estadia'}
              </p>
            )}

            <button
              className={styles.nextBtn}
              onClick={() => setStep(2)}
              disabled={!startDate || !endDate}
            >
              Continuar →
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.formStep}>
          <button className={styles.backBtn} onClick={() => setStep(1)}>
            ← Voltar
          </button>

          <div className={styles.bookingSummaryCard}>
            <p><strong>{room.name}</strong></p>
            <p>
              {format(startDate!, 'dd/MM/yyyy')} → {format(endDate!, 'dd/MM/yyyy')}
              &nbsp;·&nbsp; {getNights()} noite{getNights() !== 1 ? 's' : ''}
            </p>
            <p className={styles.totalConfirm}>Total: R$ {calculateTotal().toLocaleString('pt-BR')}</p>
          </div>

          <div className={styles.form}>
            <label className={styles.label} htmlFor="guest-name">Seu nome *</label>
            <input
              id="guest-name"
              className={styles.input}
              type="text"
              placeholder="Nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label className={styles.label} htmlFor="guest-phone">WhatsApp (opcional)</label>
            <input
              id="guest-phone"
              className={styles.input}
              type="tel"
              placeholder="(22) 99999-9999"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <button
              className={styles.whatsappBtn}
              onClick={handleSendWhatsApp}
              disabled={!name.trim()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" fill="currentColor">
                <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.469 2.027 7.77L0 32l8.466-2.001A15.94 15.94 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.844 21.504c-.332.933-1.948 1.782-2.672 1.896-.686.107-1.552.151-2.504-.157-.577-.186-1.318-.433-2.257-.85-3.975-1.716-6.571-5.716-6.771-5.983-.198-.265-1.618-2.152-1.618-4.104s1.025-2.913 1.389-3.311c.363-.397.793-.497 1.058-.497.265 0 .529.002.762.014.244.013.571-.093.893.681.332.8 1.127 2.753 1.226 2.952.099.199.165.431.033.694-.133.265-.199.43-.397.663-.199.232-.418.52-.596.698-.199.199-.407.413-.175.812.232.397 1.032 1.7 2.215 2.754 1.522 1.355 2.804 1.774 3.201 1.973.397.199.628.166.86-.1.232-.265.995-1.16 1.26-1.558.265-.397.53-.332.893-.199.364.133 2.315 1.092 2.712 1.291.397.199.662.298.762.464.099.166.099.963-.233 1.897z"/>
              </svg>
              Enviar pelo WhatsApp
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
