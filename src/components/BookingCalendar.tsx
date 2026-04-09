'use client';

import { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, isSameMonth, isSameDay, addDays, isBefore, startOfToday } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './BookingCalendar.module.css';

interface Props {
  onSelectRange: (start: Date | null, end: Date | null) => void;
}

export default function BookingCalendar({ onSelectRange }: Props) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const renderHeader = () => {
    return (
      <div className={styles.header}>
        <button 
          onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
          aria-label="Mês anterior"
        >
          <ChevronLeft size={20} />
        </button>
        <span aria-live="polite">{format(currentMonth, 'MMMM yyyy', { locale: ptBR })}</span>
        <button 
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
          aria-label="Próximo mês"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    );
  };

  const renderDays = () => {
    const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    return (
      <div className={styles.daysRow}>
        {days.map((day) => (
          <div key={day} className={styles.dayName}>{day}</div>
        ))}
      </div>
    );
  };

  const onDateClick = (day: Date) => {
    if (isBefore(day, startOfToday())) return;

    if (!startDate || (startDate && endDate)) {
      setStartDate(day);
      setEndDate(null);
      onSelectRange(day, null);
    } else if (startDate && !endDate) {
      if (isBefore(day, startDate)) {
        setStartDate(day);
        onSelectRange(day, null);
      } else {
        setEndDate(day);
        onSelectRange(startDate, day);
      }
    }
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDateRange = startOfWeek(monthStart);
    const endDateRange = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDateRange;
    let formattedDate = "";

    while (day <= endDateRange) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, "d");
        const cloneDay = day;
        const isDisabled = !isSameMonth(day, monthStart) || isBefore(day, startOfToday());
        const isSelected = (startDate && isSameDay(day, startDate)) || (endDate && isSameDay(day, endDate));
        const isInRange = startDate && endDate && day > startDate && day < endDate;

        days.push(
          <button
            key={day.toString()}
            className={`${styles.cell} ${isDisabled ? styles.disabled : ""} ${isSelected ? styles.selected : ""} ${isInRange ? styles.inRange : ""}`}
            onClick={() => !isDisabled && onDateClick(cloneDay)}
            disabled={isDisabled}
            aria-selected={isSelected}
            aria-label={`${format(day, 'd')} de ${format(day, 'MMMM', { locale: ptBR })}`}
          >
            <span>{formattedDate}</span>
          </button>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className={styles.row} key={day.toString()}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className={styles.body}>{rows}</div>;
  };

  return (
    <div className={styles.calendar}>
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
}
