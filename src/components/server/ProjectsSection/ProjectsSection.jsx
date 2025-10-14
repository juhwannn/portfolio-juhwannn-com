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
          <div className={styles.projectImage}>
            <Image
              src="/projects/blog.png"
              alt="블로그"
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
        title="치킨 봇"
        screenshots={[
          '/modal/chickenBot/1.png',
          '/modal/chickenBot/2.png',
          '/modal/chickenBot/3.png',
        ]}
        liveUrl={null}
        githubUrl="https://github.com/juhwannn/chicken-bot"
      >
        <div style={{ padding: '1.5rem', lineHeight: '1.6', color: '#333' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
            }}
          >
            치킨 봇 프로젝트 배경 요약
          </h2>

          <h3
            style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              marginBottom: '0.75rem',
            }}
          >
            프로젝트 개요
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            "치킨 봇"은 PUBG(배틀그라운드) 플레이어들의 최근 경기 전적을 Discord
            안에서 간편하게 조회할 수 있도록 만든 개인 봇입니다. 디스코드
            서버에서 명령어 한 줄로 친구들의 평균 킬, 데미지, 승리 횟수 등을
            확인할 수 있게 합니다.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            기본 아이디어는
            <br />
            - 같이 배틀그라운드를 하는 친구들이 디스코드 음성방에 모이면
            자동으로 각자 전적을 불러오자.
            <br />- 굳이 브라우저나 앱을 열지 않고도 치킨 여부와 성적을 바로
            보고 싶다!
          </p>

          <h3
            style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              marginBottom: '0.75rem',
            }}
          >
            개발 동기
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            친구들과 자주 플레이하면서 누가 최근에 잘했는지 비교하거나 할때 매번
            외부 통계 사이트를 들어가서 일일이 스쿼드 전적을 검색 후 통계를 내는
            불편함이 있었음.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            이 과정을 디스코드 내부에서 자동화하면, 플레이 중이나 음성채널에
            있을 때 바로 확인할 수 있어서 편리하겠다고 판단.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            또한 Node.js, Discord API, REST 통신, 데이터 캐싱, AWS 배포 등
            전반적인 백엔드 아키텍처 설계 연습에도 좋은 토이 프로젝트로
            적합했음.
          </p>

          <h3
            style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              marginBottom: '0.75rem',
            }}
          >
            핵심 기능
          </h3>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>/전적 조회 – 등록된 유저의 최신 PUBG 전적을 조회</li>
            <li>
              /전적 업데이트 – DB에 저장된 유저 데이터를 PUBG API로 최신화
            </li>
            <li>/등록 – PUBG 닉네임과 Discord 계정을 연결</li>
            <li>
              자동 감지 기능 (WIP) – 음성채널에 접속한 유저 중 등록된 계정을
              감지해서 자동 전적 표시
            </li>
            <li>
              평균 통계 계산 – 최근 n경기의 평균 킬 수, 데미지, 승률 등을 산출
            </li>
            <li>리치한 응답 UI – Discord Embed 메시지로 깔끔하게 시각화</li>
          </ul>

          <h3
            style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              marginBottom: '0.75rem',
            }}
          >
            기술 스택
          </h3>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              marginBottom: '1rem',
            }}
          >
            <tbody>
              <tr>
                <td
                  style={{
                    fontWeight: 'bold',
                    padding: '0.5rem',
                    border: '1px solid #ddd',
                  }}
                >
                  언어
                </td>
                <td style={{ padding: '0.5rem', border: '1px solid #ddd' }}>
                  Node.js (ESM)
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontWeight: 'bold',
                    padding: '0.5rem',
                    border: '1px solid #ddd',
                  }}
                >
                  API
                </td>
                <td style={{ padding: '0.5rem', border: '1px solid #ddd' }}>
                  Discord REST API + PUBG Open API
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontWeight: 'bold',
                    padding: '0.5rem',
                    border: '1px solid #ddd',
                  }}
                >
                  DB
                </td>
                <td style={{ padding: '0.5rem', border: '1px solid #ddd' }}>
                  MongoDB
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontWeight: 'bold',
                    padding: '0.5rem',
                    border: '1px solid #ddd',
                  }}
                >
                  배포
                </td>
                <td style={{ padding: '0.5rem', border: '1px solid #ddd' }}>
                  AWS EC2 + PM2
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontWeight: 'bold',
                    padding: '0.5rem',
                    border: '1px solid #ddd',
                  }}
                >
                  버전관리
                </td>
                <td style={{ padding: '0.5rem', border: '1px solid #ddd' }}>
                  GitHub + GitHub Actions CI/CD
                </td>
              </tr>
            </tbody>
          </table>

          <h3
            style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              marginBottom: '0.75rem',
            }}
          >
            설계 포인트
          </h3>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>
              경량 의존성: discord.js를 완전히 쓰지 않고 REST 기반 최소 구현으로
              유지하려 함
            </li>
            <li>
              모듈화 구조: commands/, services/pubg/, db/, utils/ 식으로 분리
            </li>
            <li>
              확장성 고려: 향후 다른 게임(예: FC Online, Valorant) 전적도 쉽게
              추가 가능하게 API 구조를 범용화
            </li>
            <li>
              자동화 배포: GitHub Actions를 통해 main push 시 EC2에 SSH 배포 +
              pm2 restart chicken-bot
            </li>
          </ul>

          <h3
            style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              marginBottom: '0.75rem',
            }}
          >
            프로젝트 의의
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            단순한 디스코드 봇을 넘어서 게임 데이터 자동화 플랫폼으로 확장 가능
          </p>
          <p style={{ marginBottom: '1rem' }}>
            유저 맞춤 통계 서비스를 통해 데이터 수집·시각화 연습
          </p>
          <p style={{ marginBottom: '1rem' }}>
            팀/클랜 단위 서버에서 커뮤니티 중심 기능(랭킹, 승률 경쟁 등) 추가
            여지
          </p>
        </div>
      </BaseModal>

      <BaseModal
        isOpen={blogModal}
        onClose={() => setBlogModal(false)}
        title="My Modal"
        background={`asdf`}
        description={`asdfasdf`}
      />

      <BaseModal
        isOpen={youtubeLabelModal}
        onClose={() => setYoutubeLabelModal(false)}
        title="My Modal"
      />
    </SectionBasic>
  );
}
