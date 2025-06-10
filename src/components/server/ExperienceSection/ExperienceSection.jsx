import { PiProjectorScreenChartFill } from 'react-icons/pi';
import SectionBasic from '@/components/client/sections/SectionBasic';
import styles from '@/components/server/ExperienceSection/ExperienceSection.module.css';
import Hr from '@/components/client/Hr';

export default function ExperienceSection() {
  return (
    <SectionBasic
      id="experience"
      sectionStyleName={styles.experienceSection}
      title="경력"
      description="지금까지의 직무 경험입니다."
    >
      <div className={styles.timeline}>
        <div className={styles.timelineItem}>
          <div className={styles.timelineContent}>
            <div className={styles.timelineHeader}>
              <h3 className={styles.timelineTitle}>더 클라우드 팩토리</h3>
              <p className={styles.timelinePeriod}>2023년 02월 - 2025년 2월</p>
            </div>
            <p className={styles.timelinePosition}>주니어 개발자</p>
            <Hr />
            <p className={styles.timelineSubtitle}>
              <PiProjectorScreenChartFill />
              회사 공식 서비스 웹사이트 및 어드민 개발
            </p>

            <div className={styles.projectTech}>
              <span className={styles.techTag}>Vue.js</span>
              <span className={styles.techTag}>Nuxt.js</span>
              <span className={styles.techTag}>Firebase</span>
              <span className={styles.techTag}>AWS ECS/ECR/Route 53</span>
            </div>

            <ul className={styles.timelineList}>
              <li>
                회사 공식 웹사이트 및 어드민 페이지 프론트엔드 개발 전반 담당
              </li>
              <li>
                AWS ECS/ECR, Route 53을 이용한 인프라 구성 및 서비스 배포 자동화
              </li>
              <li>
                Firebase Realtime Database 연동을 통한 데이터 처리 및 관리
              </li>
              <li>
                유지보수 및 기능 추가 작업 병행하며 사용자 피드백 기반 개선 반복
                수행
              </li>
              <li>단독으로 서비스 전체의 초기 개발부터 배포까지 완료</li>
              <li>배포 자동화 및 인프라 설정으로 운영 효율성 향상</li>
              <li>API 문서 도입</li>
              <li>테스트 코드 도입</li>
            </ul>

            <Hr />

            <p className={styles.timelineSubtitle}>
              <PiProjectorScreenChartFill />
              배송 서비스 고도화 및 백엔드 개선
            </p>

            <div className={styles.projectTech}>
              <span className={styles.techTag}>Node.js</span>
              <span className={styles.techTag}>MongoDB</span>
              <span className={styles.techTag}>Mongoose</span>
              <span className={styles.techTag}>Jest</span>
              <span className={styles.techTag}>Vue.js</span>
            </div>

            <ul className={styles.timelineList}>
              <li>
                기존 어드민 및 서비스 페이지의 기능 고도화 및 유지보수 주도
              </li>
              <li>배송 자동화 로직 및 실시간 배송 추적 기능 구현</li>
              <li>MongoDB 기반 데이터 모델링 및 API 서버 설계</li>
              <li>
                Mongoose 쿼리를 Query Builder 스타일로 포팅하여 개발 생산성 향상
              </li>
              <li>테스트 코드 도입 및 테스트 환경 구축</li>
              <li>테스트 커버리지 85% 이상 유지하며 서비스 안정성 확보</li>
              <li>
                반복되는 백엔드 쿼리 구조 개선으로 코드 재사용성과 유지보수성
                향상
              </li>
              <li>
                실시간 배송 추적 기능 도입으로 고객 응대 시간 단축 및 만족도
                개선
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.timelineItem}>
          <div className={styles.timelineContent}>
            <div className={styles.timelineHeader}>
              <h3 className={styles.timelineTitle}>아이티로그</h3>
              <p className={styles.timelinePeriod}>2022년 09월 - 2022년 12월</p>
            </div>
            <p className={styles.timelinePosition}>풀스택 개발자</p>
            <Hr />
            <p className={styles.timelineSubtitle}>
              <PiProjectorScreenChartFill />
              신규 프로젝트 설계 및 개발 리딩
            </p>
            <div className={styles.projectTech}>
              <span className={styles.techTag}>Node.js</span>
              <span className={styles.techTag}>Express</span>
              <span className={styles.techTag}>Next.js</span>
              <span className={styles.techTag}>AWS</span>
            </div>

            <ul className={styles.timelineList}>
              <li>Node.js 기반의 신규 프로젝트 전체 설계 및 기술 리딩</li>
              <li>
                프론트엔드와 백엔드 모두 리딩하여 아키텍처 구성 및 구현 주도
              </li>
              <li>AWS 환경 기반으로 개발 및 배포 인프라 구성</li>
            </ul>
          </div>
        </div>
        <div className={styles.timelineItem}>
          <div className={styles.timelineContent}>
            <div className={styles.timelineHeader}>
              <h3 className={styles.timelineTitle}>코드와이즈</h3>
              <p className={styles.timelinePeriod}>2020년 05월 - 2022년 06월</p>
            </div>
            <p className={styles.timelinePosition}>솔루션개발팀/선임연구원</p>
            <Hr />
            <p className={styles.timelineSubtitle}>
              <PiProjectorScreenChartFill />
              기존 솔루션 유지보수 및 기능 고도화
            </p>
            <div className={styles.projectTech}>
              <span className={styles.techTag}>jQuery</span>
              <span className={styles.techTag}>Javascript</span>
              <span className={styles.techTag}>SQL</span>
            </div>
            <ul className={styles.timelineList}>
              <li>벤더사 페이지 및 통계 차트 등 UI/UX 개선 작업 수행</li>
              <li>SQL 쿼리 최적화 (응답 시간 10초 → 2초로 개선)</li>
              <li>다양한 브라우저 호환성 확보 (특히 구버전 IE 지원)</li>
              <li>
                기존 jQuery 기반 로직을 Vanilla JS로 리팩토링하여 유지보수성과
                속도 개선
              </li>
            </ul>
            <Hr />
            <p className={styles.timelineSubtitle}>
              <PiProjectorScreenChartFill />
              외주 프로젝트 개발 (Node.js + React 기반)
            </p>
            <ul className={styles.timelineList}>
              <div className={styles.projectTech}>
                <span className={styles.techTag}>Express.js</span>
                <span className={styles.techTag}>Next.js</span>
                <span className={styles.techTag}>React</span>
                <span className={styles.techTag}>styled-components</span>
                <span className={styles.techTag}>React Hooks</span>
                <span className={styles.techTag}>Swagger</span>
              </div>
              <li>SPA + SSR 아키텍처 기반 프론트엔드 구현 (Next.js)</li>
              <li>React Hooks를 적극 활용한 상태 관리</li>
              <li>styled-components를 통한 디자인 시스템 구성</li>
              <li>Swagger를 활용한 API 문서화</li>
              <li>
                클라이언트와 소통하며 처음부터 끝까지 참여한 첫 외주 프로젝트
                성공적으로 런칭
              </li>
            </ul>
            <Hr />
            <p className={styles.timelineSubtitle}>
              <PiProjectorScreenChartFill />
              외주 프로젝트 고도화 (CI/CD + 테스트 환경 구축)
            </p>
            <div className={styles.projectTech}>
              <span className={styles.techTag}>Express.js</span>
              <span className={styles.techTag}>Next.js</span>
              <span className={styles.techTag}>styled-components</span>
              <span className={styles.techTag}>React Hooks</span>
              <span className={styles.techTag}>Docker</span>
              <span className={styles.techTag}>GitHub Actions</span>
            </div>
            <ul className={styles.timelineList}>
              <li>TDD 기반 개발 환경 구축 및 테스트 코드 도입</li>
              <li>
                Docker 기반 개발 환경 및 Github Actions를 통한 CI/CD 자동화
              </li>
              <li>ORM 도입을 통한 DB 연동 로직 개선 및 유지보수성 향상</li>
            </ul>
            <Hr />
            <p className={styles.timelineSubtitle}>
              <PiProjectorScreenChartFill />
              기존 솔루션 리뉴얼 프로젝트
            </p>
            <div className={styles.projectTech}>
              <span className={styles.techTag}>Next.js</span>
              <span className={styles.techTag}>Node.js</span>
            </div>
            <ul className={styles.timelineList}>
              <li>
                기존 JSP 기반 레거시 솔루션을 Node.js 기반으로 전면 리뉴얼
              </li>
              <li>프론트엔드는 Next.js로 구현, MSA 아키텍처 적용</li>
              <li>사용자 흐름을 고려한 클린 UI 구성</li>
            </ul>
            <Hr />
            <p className={styles.timelineSubtitle}>
              <PiProjectorScreenChartFill />
              병원 데이터 기반 신규 솔루션 개발
            </p>
            <div className={styles.projectTech}>
              <span className={styles.techTag}>Next.js</span>
              <span className={styles.techTag}>Node.js</span>
              <span className={styles.techTag}>Elasticsearch</span>
            </div>
            <ul className={styles.timelineList}>
              <li>병원 데이터에 기반한 의료 분석 시스템 설계 및 개발 </li>
              <li>Elasticsearch 기반 검색 시스템 구현 </li>
              <li>
                Elastic 엔지니어와 협업하여 효율적인 인덱스/쿼리 구조 설계
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SectionBasic>
  );
}
