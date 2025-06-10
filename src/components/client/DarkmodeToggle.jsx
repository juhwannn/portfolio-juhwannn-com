'use client';

import { useEffect, useState } from 'react';
import styles from '@/components/client/DarkmodeToggle.module.css';

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark';
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', next);
  };

  return (
    <button
      className={`${styles.toggle} ${dark ? styles.active : ''}`}
      onClick={toggleTheme}
      aria-label="다크모드 토글"
    >
      <div className={styles.circle}></div>
    </button>
  );
}
