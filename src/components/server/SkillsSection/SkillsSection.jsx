import styles from '@/components/server/SkillsSection/SkillsSection.module.css';
import SectionBasic from '@/components/client/sections/SectionBasic';
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiDocker,
  SiJest,
  SiGit,
  SiGithub,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

export default function SkillsSection() {
  const frontTechStack = [
    { name: 'React', icon: <SiReact color="#61DBFB" /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'JavaScript', icon: <SiJavascript color="#f7df1e" /> },
    { name: 'HTML5', icon: <SiHtml5 color="#e34c26" /> },
    { name: 'CSS3', icon: <SiCss3 color="#264de4" /> },
  ];

  const backTechStack = [
    { name: 'Node.js', icon: <SiNodedotjs color="#3c873a" /> },
    { name: 'MongoDB', icon: <SiMongodb color="#4DB33D" /> },
    { name: 'Express.js', icon: <SiExpress color="#000000" /> },
  ];

  const toolsTechStack = [
    { name: 'Docker', icon: <SiDocker color="#0db7ed" /> },
    { name: 'Jest', icon: <SiJest color="#c21325" /> },
    { name: 'AWS', icon: <FaAws color="#ff9900" /> },
    { name: 'Git', icon: <SiGit color="#f1502f" /> },
    { name: 'GitHub', icon: <SiGithub color="#333" /> },
  ];

  const renderTechStack = (stack) => (
    <div className={styles.techGrid}>
      {stack.map((tech, idx) => (
        <div key={idx} className={styles.techCard}>
          <div className={styles.techIcon}>{tech.icon}</div>
          <div className={styles.techLabel}>{tech.name}</div>
        </div>
      ))}
    </div>
  );

  return (
    <SectionBasic
      id="skills"
      sectionStyleName={styles.skillsSection}
      title="기술 스택"
      description="2020년부터 개발 경험을 통해 습득한 기술들입니다."
    >
      <div className={styles.skillsGrid}>
        <div className={styles.skillCard}>
          <h3 className={styles.skillCardTitle}>프론트엔드</h3>
          {renderTechStack(frontTechStack)}
        </div>

        <div className={styles.skillCard}>
          <h3 className={styles.skillCardTitle}>백엔드</h3>
          {renderTechStack(backTechStack)}
        </div>

        <div className={styles.skillCard}>
          <h3 className={styles.skillCardTitle}>도구 및 기타</h3>
          {renderTechStack(toolsTechStack)}
        </div>
      </div>
    </SectionBasic>
  );
}
