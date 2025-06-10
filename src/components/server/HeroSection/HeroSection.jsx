import Link from 'next/link';
import styles from '@/components/server/HeroSection/HeroSection.module.css';

export default function HeroSection() {
  return (
    <section id="about" className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>안주환</h1>
        <h2 className={styles.heroSubtitle}>개발자 | 2020 ~ </h2>
        <p className={styles.heroDescription}>
          안녕하세요, 저는 기초와 원리를 중시하는 4년차 풀사이클을 지망하는
          JavaScript 개발자입니다. <br />
          React와 Node.js를 중심으로 한 웹 개발 전반에 능숙하며, 클라이언트부터
          서버, 인프라까지 직접 설계하고 운영할 수 있는 역량을 갖추고 있습니다.
          <br />
          화려한 라이브러리보단 언어와 브라우저의 동작 원리, 네트워크 흐름,
          데이터 구조 등 근본적인 기술 이해를 바탕으로 문제를 해결하고,
          <br />
          빠르게 돌아가는 트렌드 속에서도 흔들리지 않는 탄탄한 기반을 강점으로
          삼고 있습니다.
          <br />
        </p>
        <div className={styles.heroActions}>
          <Link href="#contact" className={styles.primaryButton}>
            연락하기
          </Link>
        </div>
      </div>
      <div className={styles.heroImage}>
        <div className={styles.profileImage}></div>
      </div>
    </section>
  );
}
