'use client';

import styles from './CoreDepartmentDeck.module.css';

export default function CoreDepartmentDeck({ departments = [] }) {
  return (
    <div className={styles.deck}>
      {departments.map((department) => (
        <div
          key={department.code}
          className={styles.card}
          tabIndex={0}
          data-core-card
          aria-label={`${department.name} department card`}
        >
          <div className={styles.cardInner}>
            <div className={`${styles.face} ${styles.front}`}>
              <div className={styles.badge}>{department.code}</div>
              <h3 className={styles.departmentName}>{department.name}</h3>
              <p className={styles.turnHint}>Turn to view heads and sub heads</p>
            </div>

            <div className={`${styles.face} ${styles.back}`}>
              <div className={styles.backInner}>
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
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}