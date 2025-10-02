'use client';

import { useState } from 'react';
// import { Button } from '@/components/ui/button';
import {
  X,
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

import { BaseButton as Button } from '@juhwannn/ui';
import styles from './BaseModal.module.css';

export default function BaseModal({ project, isOpen, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen || !project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.screenshots.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.screenshots.length - 1 : prev - 1
    );
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleBackdropClick}>
      <div className={styles.modalContent}>
        {/* Header */}
        <div className={styles.modalHeader}>
          <div>
            <h2 className={styles.modalTitle}>{project.title}</h2>
            <p className={styles.modalTagline}>{project.tagline}</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className={styles.closeButton}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className={styles.modalBody}>
          {/* Screenshots Carousel */}
          {project.screenshots.length > 0 && (
            <div className={styles.screenshotSection}>
              <div className={styles.screenshotContainer}>
                <img
                  src={
                    project.screenshots[currentImageIndex] || '/placeholder.svg'
                  }
                  alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                  className={styles.screenshot}
                />
                {project.screenshots.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className={`${styles.carouselButton} ${styles.carouselButtonLeft}`}
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className={`${styles.carouselButton} ${styles.carouselButtonRight}`}
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}
              </div>
              {project.screenshots.length > 1 && (
                <div className={styles.carouselDots}>
                  {project.screenshots.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`${styles.dot} ${index === currentImageIndex ? styles.dotActive : ''}`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Project Details */}
          <div className={styles.detailsGrid}>
            {/* Description */}
            <div className={styles.detailSection}>
              <h3 className={styles.sectionTitle}>프로젝트 설명</h3>
              <p className={styles.description}>{project.description}</p>
            </div>

            {/* Technologies */}
            <div className={styles.detailSection}>
              <h3 className={styles.sectionTitle}>사용 기술</h3>
              <div className={styles.techList}>
                {project.technologies.map((tech, index) => (
                  <span key={index} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className={styles.detailSection}>
              <h3 className={styles.sectionTitle}>주요 기능</h3>
              <ul className={styles.featureList}>
                {project.features.map((feature, index) => (
                  <li key={index} className={styles.featureItem}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={styles.modalFooter}>
          <div className={styles.buttonGroup}>
            {project.liveUrl && (
              <Button
                onClick={() => window.open(project.liveUrl, '_blank')}
                className={styles.primaryButton}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                라이브 데모
              </Button>
            )}
            {project.githubUrl && (
              <Button
                variant="outline"
                onClick={() => window.open(project.githubUrl, '_blank')}
                className={styles.secondaryButton}
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
