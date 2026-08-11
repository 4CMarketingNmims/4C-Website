'use client';

import { useRef, useState } from 'react';
import styles from './CoreDepartmentDeck.module.css';

function DepartmentCard({ department }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const pointerStartRef = useRef(null);

  const handlePointerDown = (e) => {
    if (e.pointerType === 'mouse') return;
    pointerStartRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = (e) => {
    if (e.pointerType === 'mouse') return;
    const start = pointerStartRef.current;
    pointerStartRef.current = null;
    if (!start) return;
    if (Math.hypot(e.clientX - start.x, e.clientY - start.y) > 12) return;
    setIsFlipped((v) => !v);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsFlipped((v) => !v);
    }
  };

  return (
    <div
      key={department.code}
      className={`${styles.card} ${department.isCoreMessage ? styles.coreCard : ''}`}
      tabIndex={0}
      role="button"
      data-core-card
      data-flipped={isFlipped ? 'true' : 'false'}
      aria-label={`${department.name} department card`}
      aria-pressed={isFlipped}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={() => {
        pointerStartRef.current = null;
      }}
      onKeyDown={handleKeyDown}
    >
      <div className={styles.cardInner}>
        <div className={`${styles.face} ${styles.front}`}>
          {department.isCoreMessage ? (
            department.coverImage ? (
              <img
                src={department.coverImage}
                alt={department.name}
                className={styles.coverImage}
              />
            ) : (
              <div className={styles.stackedTitle}>
                {['The', 'Core', 'Team'].map((word, i) => (
                  <span key={i} className={styles.stackedWord}>
                    {word}
                  </span>
                ))}
              </div>
            )
          ) : (
            <h3 className={styles.departmentName}>{department.name}</h3>
          )}
        </div>

        <div className={`${styles.face} ${styles.back}`}>
          <div className={styles.backInner}>
            {department.isCoreMessage ? (
              <p className={styles.coreMessageText}>{department.message}</p>
            ) : (
              <>
                <div className={styles.block}>
                  <span className={styles.blockLabel}>Heads</span>
                  <div className={styles.list}>
                    {department.heads.map((person) => (
                      <p key={person} className={styles.personName}>
                        {person}
                      </p>
                    ))}
                  </div>
                </div>

                <div className={styles.block}>
                  <span className={styles.blockLabel}>Sub Heads</span>
                  <div className={styles.list}>
                    {department.subHeads.map((person) => (
                      <p key={person} className={styles.personName}>
                        {person}
                      </p>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CoreDepartmentDeck({ departments = [] }) {
  return (
    <div className={styles.deck}>
      {departments.map((department) => (
        <DepartmentCard key={department.code} department={department} />
      ))}
    </div>
  );
}
