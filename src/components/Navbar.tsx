'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const t = useTranslations('Navbar');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath || `/${newLocale}`);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.logo}>
          Vovó Maria
        </Link>
        <ul className={styles.navLinks}>
          <li><Link href="#sobre">{t('about')}</Link></li>
          <li><Link href="#acomodacoes">{t('rooms')}</Link></li>
          <li><Link href="#depoimentos">{t('reviews')}</Link></li>
          <li><Link href="#reserva" className={styles.navCta}>Reservar</Link></li>
          <li>
            <select className={styles.langSelect} value={locale} onChange={handleLanguageChange}>
              <option value="pt">PT</option>
              <option value="en">EN</option>
              <option value="es">ES</option>
            </select>
          </li>
        </ul>
      </nav>
    </header>
  );
}
