import styles from '@/app/page.module.css';
import SkillsSection from '@/components/server/SkillsSection/SkillsSection';
import HeroSection from '@/components/server/HeroSection/HeroSection';
import ExperienceSection from '@/components/server/ExperienceSection/ExperienceSection';
import ProjectsSection from '@/components/server/ProjectsSection/ProjectsSection';
import ContactSection from '@/components/server/ContactSection/ContactSection';
import Footer from '@/components/server/Footer/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
