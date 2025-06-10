import styles from '@/components/server/Header/Header.module.css';
import DarkModeToggle from '@/components/client/DarkmodeToggle';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link href="/" className={styles.logo}>
          Juhwannn
        </Link>
        <nav className={styles.navigation}>
          <Link href="#about" className={styles.navLink}>
            소개
          </Link>
          <Link href="#skills" className={styles.navLink}>
            기술 스택
          </Link>
          <Link href="#experience" className={styles.navLink}>
            경력
          </Link>
          <Link href="#projects" className={styles.navLink}>
            프로젝트
          </Link>
          <Link href="#contact" className={styles.navLink}>
            연락처
          </Link>
        </nav>
        <div className={styles.headerActions}>
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
}
