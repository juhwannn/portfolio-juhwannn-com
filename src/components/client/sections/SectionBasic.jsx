import styles from '@/components/client/sections/SectionBasic.module.css';

export default function SectionBasic({
  id,
  sectionStyleName,
  title,
  description,
  children,
}) {
  return (
    <section id={id} className={sectionStyleName}>
      {(title || description) && (
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{title}</h2>
          <p className={styles.sectionDescription}>{description}</p>
        </div>
      )}

      <div className={styles.sectionContent}>{children}</div>
    </section>
  );
}
