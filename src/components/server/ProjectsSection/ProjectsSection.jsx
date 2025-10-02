'use client';

import styles from '@/components/server/ProjectsSection/ProjectsSection.module.css';
import SectionBasic from '@/components/client/sections/SectionBasic';
// import { BaseModal } from '@juhwannn/ui';
import BaseModal from '@/components/client/modals/BaseModal';
import Image from 'next/image';
import { useState } from 'react';

export default function ProjectsSection() {
  const [chickenBotModal, setChickenBotModal] = useState(false);
  const [blogModal, setBlogModal] = useState(false);
  const [portfolioModal, setPortfolioModal] = useState(false);
  const [youtubeLabelModal, setYoutubeLabelModal] = useState(false);
  const [designModal, setDesignModal] = useState(false);

  return (
    <SectionBasic
      id="projects"
      sectionStyleName={styles.projectsSection}
      title="프로젝트"
      description="주요 프로젝트 경험입니다."
    >
      <div className={styles.projectFilter}>
        <button
          className={`${styles.filterButton} ${styles.active}`}
          data-filter="all"
        >
          전체
        </button>
        <button className={styles.filterButton} data-filter="web">
          웹
        </button>
        <button className={styles.filterButton} data-filter="mobile">
          모바일
        </button>
        <button className={styles.filterButton} data-filter="desktop">
          데스크탑
        </button>
        <button className={styles.filterButton} data-filter="service">
          서비스
        </button>
      </div>
      <div className={styles.projectsGrid}>
        <div className={styles.projectCard} data-category="service">
          <div className={styles.projectImage}>
            <Image
              src="/projects/chickenBot.png"
              alt="치킨봇"
              priority
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </div>
          <div className={styles.projectContent}>
            <h3 className={styles.projectTitle}>치킨 봇</h3>
            <p className={styles.projectDescription}>
              치킨 봇(Chicken Bot)은 Discord 봇 애플리케이션으로, PUBG
              플레이어들의 실시간 전적을 조회, 표시해 주는 서비스입니다.
            </p>
            <div className={styles.projectTech}>
              <span className={styles.techTag}>Discord.js</span>
              <span className={styles.techTag}>PUBG API</span>
              <span className={styles.techTag}>Node.js</span>
              <span className={styles.techTag}>MongoDB</span>
            </div>
            <div className={styles.projectLinks}>
              <a
                href="https://github.com/juhwannn/chicken-bot"
                target="_blank"
                rel="noreferrer"
                className={styles.projectLink}
              >
                GitHub
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                target="_blank"
                rel="noreferrer"
                className={styles.projectLink}
                style={{
                  pointerEvents: 'none',
                  color: 'gray',
                  textDecoration: 'none',
                  cursor: 'not-allowed',
                }}
              >
                Visit Site
              </a>
              <a
                onClick={(e) => setChickenBotModal(true)}
                className={styles.projectLink}
              >
                View ScreenShots
              </a>
            </div>
          </div>
        </div>
        <div className={styles.projectCard} data-category="web">
          <div className={styles.projectImage}></div>
          <div className={styles.projectContent}>
            <h3 className={styles.projectTitle}>@juhwannn/ui</h3>
            <p className={styles.projectDescription}>
              디자인에 대해 신경을 최소화 하기위한 디자인 시스템 입니다.
            </p>
            <div className={styles.projectTech}>
              <span className={styles.techTag}>Next.js</span>
              <span className={styles.techTag}>NPM</span>
              <span className={styles.techTag}>CSS</span>
            </div>
            <div className={styles.projectLinks}>
              <a
                href="https://github.com/juhwannn/juhwannn-ui"
                target="_blank"
                rel="noreferrer"
                className={styles.projectLink}
              >
                GitHub
              </a>
              <a
                href="https://design.juhwannn.com"
                target="_blank"
                rel="noreferrer"
                className={styles.projectLink}
              >
                Visit Site
              </a>
              <a
                onClick={(e) => setDesignModal(true)}
                className={styles.projectLink}
              >
                View ScreenShots
              </a>
            </div>
          </div>
        </div>
        <div className={styles.projectCard} data-category="mobile">
          <div className={styles.projectImage}></div>
          <div className={styles.projectContent}>
            <h3 className={styles.projectTitle}>블로그</h3>
            <p className={styles.projectDescription}>
              Github 스타일로 리뉴얼 중 ...
            </p>
            <div className={styles.projectTech}>
              <span className={styles.techTag}>Next.js</span>
              <span className={styles.techTag}>Express.js</span>
              <span className={styles.techTag}>MongoDB</span>
            </div>
            <div className={styles.projectLinks}>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                target="_blank"
                rel="noreferrer"
                className={styles.projectLink}
                style={{
                  pointerEvents: 'none',
                  color: 'gray',
                  textDecoration: 'none',
                  cursor: 'not-allowed',
                }}
              >
                GitHub
              </a>
              <a
                href="https://blog.juhwannn.com"
                target="_blank"
                rel="noreferrer"
                className={styles.projectLink}
              >
                Visit Site
              </a>
              <a
                onClick={(e) => setBlogModal(true)}
                className={styles.projectLink}
              >
                View ScreenShots
              </a>
            </div>
          </div>
        </div>

        <div className={styles.projectCard} data-category="web">
          <div className={styles.projectImage}>
            <Image
              src="/profile.png"
              alt="프로필"
              priority
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </div>
          <div className={styles.projectContent}>
            <h3 className={styles.projectTitle}>포트폴리오</h3>
            <p className={styles.projectDescription}>
              그동안의 개발 경험과 역량을 알 수 있는 개인 포트폴리오 사이트
              입니다.
            </p>
            <div className={styles.projectTech}>
              <span className={styles.techTag}>Next.js</span>
            </div>
            <div className={styles.projectLinks}>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                target="_blank"
                rel="noreferrer"
                className={styles.projectLink}
                style={{
                  pointerEvents: 'none',
                  color: 'gray',
                  textDecoration: 'none',
                  cursor: 'not-allowed',
                }}
              >
                GitHub
              </a>
              <a
                href="https://portfolio.juhwannn.com"
                target="_blank"
                rel="noreferrer"
                className={styles.projectLink}
              >
                Visit Site
              </a>
              <a
                onClick={(e) => setPortfolioModal(true)}
                className={styles.projectLink}
              >
                View ScreenShots
              </a>
            </div>
          </div>
        </div>

        <div className={styles.projectCard} data-category="web">
          <div className={styles.projectImage}>
            <Image
              src="/projects/youtubeLabel.png"
              alt="Youtube Label"
              priority
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </div>

          <div className={styles.projectContent}>
            <h3 className={styles.projectTitle}>Youtube Label</h3>
            <p className={styles.projectDescription}>
              유튜브 영상의 특정 구간들을 반복할 수 있게 하는 Chrome Extension
              입니다.
            </p>
            <div className={styles.projectTech}>
              <span className={styles.techTag}>Html</span>
              <span className={styles.techTag}>Javascript</span>
              <span className={styles.techTag}>CSS</span>
            </div>
            <div className={styles.projectLinks}>
              <a
                href="https://github.com/juhwannn/youtube-extension"
                target="_blank"
                rel="noreferrer"
                className={styles.projectLink}
              >
                GitHub
              </a>
              <a
                href="https://chromewebstore.google.com/detail/youtube-label/ocaplfjiakdkliochkbbldnpnamajfbg"
                target="_blank"
                rel="noreferrer"
                className={styles.projectLink}
              >
                Visit Site
              </a>
              <a
                onClick={(e) => setYoutubeLabelModal(true)}
                className={styles.projectLink}
              >
                View ScreenShots
              </a>
            </div>
          </div>
        </div>
      </div>
      <BaseModal
        isOpen={chickenBotModal}
        onClose={() => setChickenBotModal(false)}
        project={{
          project: 'chicken-bot',
          screenshots: [
            '/modal/chickenBot/1.png',
            '/modal/chickenBot/2.png',
            '/modal/chickenBot/3.png',
          ],
          liveUrl: 'https://blog.juhwannn.com',
          repoUrl: '',
          githubUrl: '',
          technologies: ['Next.js', 'Express.js', 'MongoDB'],
          description: 'Github 스타일로 리뉴얼 중 ...',
          features: ['반응형 웹 디자인'],
          title: '블로그',
        }}
      />

      <BaseModal
        isOpen={blogModal}
        onClose={() => setBlogModal(false)}
        project={{
          project: 'test',
          screenshots: ['/projects/blog1.png'],
          liveUrl: 'https://blog.juhwannn.com',
          repoUrl: '',
          githubUrl: '',
          technologies: ['Next.js', 'Express.js', 'MongoDB'],
          description: 'Github 스타일로 리뉴얼 중 ...',
          features: ['반응형 웹 디자인'],
          title: '블로그',
        }}
        title="My Modal"
        footer={<button onClick={() => setBlogModal(false)}>Close</button>}
        scope="fullscreen"
      />
      <BaseModal
        isOpen={youtubeLabelModal}
        onClose={() => setYoutubeLabelModal(false)}
        title="My Modal"
        footer={
          <button onClick={() => setYoutubeLabelModal(false)}>Close</button>
        }
        scope="fullscreen"
      >
        <p>Modal content goes here.</p>
      </BaseModal>
    </SectionBasic>
  );
}
