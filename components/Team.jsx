'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHeader from '@/components/PageHeader';
import FlipCard from '@/components/FlipCard';
import CoreDepartmentDeck from '@/components/CoreDepartmentDeck';
import { teamGroups, coreDepartments, previousHistory } from '@/data/site';
import styles from './Team.module.css';

export default function Team() {
  const root = useRef(null);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray(`.${styles.group}`).forEach((group) => {
        gsap.from(group.querySelectorAll(`.${styles.groupLabel}`), {
          y: 20,
          opacity: 0,
          duration: 0.5,
          scrollTrigger: { trigger: group, start: 'top 85%' },
        });
        gsap.from(group.querySelectorAll('[data-flip-card]'), {
          y: 30,
          opacity: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: { trigger: group, start: 'top 80%' },
        });
      });

      gsap.from(`.${styles.coreSection}`, {
        opacity: 0,
        y: 28,
        duration: 0.7,
        scrollTrigger: { trigger: `.${styles.coreSection}`, start: 'top 82%' },
      });

      gsap.from('[data-core-card]', {
        y: 34,
        opacity: 0,
        stagger: 0.08,
        duration: 0.65,
        ease: 'power3.out',
        scrollTrigger: { trigger: `.${styles.coreSection}`, start: 'top 78%' },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root}>
      <PageHeader
        eyebrow="Meet the people who make 4C possible"
        title="The Team: 26-27"
      />

      {teamGroups.map((group, i) => (
        <section
          key={group.id}
          className={`${styles.group} ${i % 2 === 1 ? styles.groupOdd : ''}`}
        >
          <p className={styles.groupLabel}>{group.label}</p>
          <div className={`${styles.groupGrid} ${group.id === 'lead' ? styles.eightGrid : ''}`}>
            {group.id === 'lead' && (
              <div data-flip-card>
                <FlipCard
                  member={{
                    name: 'The Super Core',
                    role: '',
                    image: '/team/super-core-cover.jpg',
                    coverOnly: true,
                    introCopy:
                      'The guiding force behind the committee — steering strategy, decisions, and direction for every campaign 4C runs.',
                  }}
                  groupLabel={group.label}
                />
              </div>
            )}
            {group.members.map((m) => (
              <div key={m.name} data-flip-card>
                <FlipCard member={m} groupLabel={group.label} />
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className={styles.coreSection}>
        <CoreDepartmentDeck departments={coreDepartments} />
        
        <div className={styles.historyContainer}>
          <button 
            className={styles.historyToggleBtn}
            onClick={() => setShowHistory(!showHistory)}
          >
            {showHistory ? 'HIDE PREVIOUS CORE' : 'VIEW PREVIOUS CORE (23-26)'}
          </button>
          
          {showHistory && (
            <div className={styles.historyDropdown}>
              {previousHistory.map((yr, idx) => (
                <div key={idx} className={styles.historyYearBlock}>
                  <h3 className={styles.historyYearTitle}>{yr.year}</h3>
                  
                  <div className={styles.historyDataGrid}>
                    <div className={styles.historyCol}>
                      <h4 className={styles.historySubTitle}>Super Core:</h4>
                      {yr.superCore.map((sc, i) => {
                        const cleanRole = sc.role ? sc.role.replace(/\s*-\s*/g, ': ') : '';
                        return (
                          <p key={i} className={styles.historyText}>
                            <span className={styles.historyHighlight}>{cleanRole}:</span> {sc.names}
                          </p>
                        );
                      })}
                    </div>
                    
                    <div className={styles.historyCol}>
                      <h4 className={styles.historySubTitle}>Core Departments:</h4>
                      {yr.core.map((c, i) => {
                        const cleanDept = c.dept ? c.dept.replace(/\s*-\s*/g, ': ') : '';
                        return (
                          <p key={i} className={styles.historyText}>
                            <span className={styles.historyHighlight}>{cleanDept}:</span> {c.text}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}