import styles from '@/components/server/ContactSection/ContactSection.module.css';
import SectionBasic from '@/components/client/sections/SectionBasic';

export default function ContactSection() {
  return (
    <SectionBasic
      id="contact"
      sectionStyleName={styles.contactSection}
      title="연락처"
      description="프로젝트 문의나 채용 관련 연락은 아래로 부탁드립니다."
    >
      <div className={styles.contactInfo}>
        <div className={styles.contactItem}>
          <div className={styles.contactIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <p className={styles.contactText}>algorithm123@naver.com</p>
        </div>
        <div className={styles.contactItem}>
          <div className={styles.contactIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </div>
          <a
            href="https://github.com/juhwannn"
            target="_blank"
            rel="noreferrer"
            className={styles.contactLink}
          >
            github.com/juhwannn
          </a>
        </div>
      </div>
    </SectionBasic>
  );
}
