'use client';

import React from 'react';
import styles from './gradient-card-showcase.module.css';

export default function SkewCards({ cards = [] }) {
  return (
    <div className={styles.container}>
      {cards.map(({ title, desc, tag }, idx) => (
        <div key={idx} className={styles.card}>
          <div className={styles.content}>
            {tag && <span className={styles.tag}>{tag}</span>}
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.desc}>{desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
