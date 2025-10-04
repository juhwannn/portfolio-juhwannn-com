'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './BaseModal.module.css';

export default function BaseModal({
  isOpen,
  onClose,
  title,
  githubUrl,
  liveUrl,
  screenshots = [],
  children,
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === screenshots.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? screenshots.length - 1 : prev - 1
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
        <div className={styles.modalHeader}>
          <div>
            <h2 className={styles.modalTitle}>{title}</h2>
          </div>
        </div>

        <div className={styles.modalBody}>
          {screenshots.length > 0 && (
            <div className={styles.screenshotSection}>
              <div className={styles.screenshotContainer}>
                <img
                  src={screenshots[currentImageIndex] || '/placeholder.svg'}
                  alt={`${title} screenshot ${currentImageIndex + 1}`}
                  className={styles.screenshot}
                />
                {screenshots.length > 1 && (
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
              {screenshots.length > 1 && (
                <div className={styles.carouselDots}>
                  {screenshots.map((_, index) => (
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
          {children}
        </div>

        <div className={styles.modalFooter}>
          <div className={styles.buttonGroup}>
            <a
              href={githubUrl ?? '#'}
              onClick={() => window.open(githubUrl, '_blank')}
              className={styles.secondaryButton}
            >
              GitHub
            </a>

            <a onClick={() => window.open(liveUrl, '_blank')}>Visit Site</a>
          </div>
        </div>
      </div>
    </div>
  );
}
