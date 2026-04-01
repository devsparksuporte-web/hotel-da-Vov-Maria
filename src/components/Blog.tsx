'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { supabase } from '@/lib/supabase';
import { BlogPost } from '@/lib/types/database';
import styles from './Blog.module.css';

export default function Blog() {
  const t = useTranslations('Rooms'); // Reuse some header styles or add to JSON
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .order('published_at', { ascending: false })
          .limit(3);

        if (error) throw error;
        if (data) setPosts(data);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setPosts([
          { id: '1', title: '5 Dicas para sua primeira viagem à nossa vila', content: 'Descubra os melhores lugares para comer e visitar...', published_at: new Date().toISOString(), image_url: '/images/hero.png' },
          { id: '2', title: 'O segredo do café da manhã da Vovó Maria', content: 'Ingredientes locais e muito amor são a base de tudo...', published_at: new Date().toISOString(), image_url: '/images/breakfast.png' },
        ]);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <section id="blog" className={styles.blog}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-subtitle">Blog</span>
          <h2>Novidades & Dicas</h2>
        </div>
        <div className={styles.grid}>
          {posts.map((post) => (
            <article key={post.id} className={styles.card}>
              <div className={styles.image}>
                <img src={post.image_url} alt={post.title} />
              </div>
              <div className={styles.content}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <a href="#" className={styles.readMore}>Leia mais →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
