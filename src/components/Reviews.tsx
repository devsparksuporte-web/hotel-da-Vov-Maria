'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Review } from '@/lib/types/database';
import styles from './Reviews.module.css';

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const { data, error } = await supabase
          .from('reviews')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(3);

        if (error) throw error;
        if (data) setReviews(data);
      } catch (err) {
        console.error('Error fetching reviews:', err);
        // Mock data fallback
        setReviews([
          { id: '1', guest_name: 'Maria Silva', rating: 5, comment: 'Senti-me em casa! O café da manhã é maravilhoso.', created_at: new Date().toISOString() },
          { id: '2', guest_name: 'João Pereira', rating: 4, comment: 'Lugar calmo e muito limpo. Recomendo.', created_at: new Date().toISOString() },
          { id: '3', guest_name: 'Ana Costa', rating: 5, comment: 'A Vovó Maria é um amor de pessoa. Voltarei com certeza.', created_at: new Date().toISOString() },
        ]);
      } finally {
        setLoading(false);
      }
    }
    fetchReviews();
  }, []);

  return (
    <section id="depoimentos" className={styles.reviewsSection}>
      <div className={styles.reviewsInner}>
        <p className="section-label">O que dizem nossos hóspedes</p>
        <h2 className="section-title">Quem ficou, <em>voltou</em></h2>
        <div className="divider"></div>
        <div className={styles.reviewsGrid}>
          <div className={styles.reviewCard}>
            <div className={styles.reviewStars}>★★★★★</div>
            <p className={styles.reviewText}>"Me senti em casa desde o primeiro momento. O café da manhã é incrível e a dona Maria é uma pessoa maravilhosa. Já marquei para voltar no próximo feriado!"</p>
            <div className={styles.reviewAuthor}>
              <div className={styles.avatar}>A</div>
              <div className={styles.authorInfo}>
                <strong>Ana Paula S.</strong>
                <span>Belo Horizonte, MG</span>
              </div>
            </div>
          </div>
          <div className={styles.reviewCard}>
            <div className={styles.reviewStars}>★★★★★</div>
            <p className={styles.reviewText}>"O melhor custo-benefício que já encontrei. Quarto limpo, cheiroso, café farto e atendimento impecável. Recomendo de olhos fechados para toda a família."</p>
            <div className={styles.reviewAuthor}>
              <div className={styles.avatar}>R</div>
              <div className={styles.authorInfo}>
                <strong>Ricardo M.</strong>
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>
          <div className={styles.reviewCard}>
            <div className={styles.reviewStars}>★★★★★</div>
            <p className={styles.reviewText}>"Viajamos em família e foi perfeito! As crianças adoraram, os adultos descansaram de verdade. A Vovó Maria tem um jeito especial de fazer todos se sentir bem-vindo."</p>
            <div className={styles.reviewAuthor}>
              <div className={styles.avatar}>C</div>
              <div className={styles.authorInfo}>
                <strong>Carla & Família</strong>
                <span>Uberlândia, MG</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
