'use client';

import styles from './CoreDepartmentDeck.module.css';

export default function CoreDepartmentDeck({ departments = [] }) {
  return (
    <div className={styles.deck}>
      {departments.map((department) => (
        <div
          key={department.code}
          className={`${styles.card} ${department.isCoreMessage ? styles.coreCard : ''}`}
          tabIndex={0}
          data-core-card
          aria-label={`${department.name} department card`}
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
                      <span
                        key={i}
                        className={styles.stackedWord}
                        style={{ '--word-len': word.length }}
                      >
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
      ))}
    </div>
  );
}