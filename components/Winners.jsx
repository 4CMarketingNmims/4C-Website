'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Winners.module.css';

const brandStormWinners = [
  'Aamazing Crew',
  'At The Deadline',
  'Bajaj Diamonds',
  'BitBusters',
  'Brand Baja Baraat',
  'Brand Union',
  'Brandbazzi',
  'Bubblecups',
  'Case Kings',
  'Dream Team',
  'Evolve_GIPE',
  'Go Hard Or Go Home',
  'Iamdivyanshbhat',
  'IGNITES',
  'Innovators',
  'League of Leaders',
  'Marcom',
  'NMCU',
  'Quatro Fuego',
  'Revive',
  'Step In',
  'Strategic Thinkers',
  'Supra-Q',
  'TAPMI',
  'Team Artemis',
  'Team Limitless',
  'THE HURRICANES',
  'The StorySellers',
  'WE-SPARK',
  'We4',
];

const marketingMatrixWinners = [
  'Adqon',
  'BitBusters',
  'Bizbuzz',
  'Brainstorms',
  'Brand Crakers',
  'Bubblecups',
  'Case Crusaders',
  'Creators',
  'Mandavians',
  'Marcom',
  'Masters Mavericks',
  'Maverick',
  'Mavericks',
  'Mbahc25088',
  'Meow',
  'MMVK',
  'Nishandsangale0718',
  'NMCU',
  'Paracetamol',
  'Rajakshat877',
  'ReImagine',
  'Sailors',
  'Solgaleo',
  'Strategic Thinkers',
  'Sujoysharma-G25',
  'Supra-Q',
  'TAPMI',
  'Team Diamond',
  'Team Insiders',
  'Team Tokito',
  'The Marketeers',
  'The Marshals',
  'Vanshikaahir79',
  'Vikrantpagrut15',
  'WeCompete',
  'Winners',
];

export default function WinnersPage() {
  const [view, setView] = useState('select'); // 'select' | 'brandstorm' | 'marketing-matrix'

  const renderResults = (title, teams) => (
    <div className={styles.resultsWrap}>
      <button
        type="button"
        className={styles.backButton}
        onClick={() => setView('select')}
      >
        ← Back
      </button>

      <h1 className={styles.title}>{title}</h1>

      <ul className={styles.teamList}>
        {teams.map((team) => (
          <li key={team} className={styles.teamItem}>
            {team}
          </li>
        ))}
      </ul>

      <p className={styles.congratsMessage}>
        Congratulations to all winners, you are now eligible for the offline
        rounds! Kindly check your E-mail for further updates.
      </p>
    </div>
  );

  if (view === 'brandstorm') {
    return (
      <main className={styles.page}>
        {renderResults('BrandStorm Winners', brandStormWinners)}
      </main>
    );
  }

  if (view === 'marketing-matrix') {
    return (
      <main className={styles.page}>
        {renderResults('Marketing Matrix Winners', marketingMatrixWinners)}
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <div className={styles.selectWrap}>
        <Link href="/" className={styles.backButton}>
          ← Back to Home
        </Link>

        <h1 className={styles.title}>Wings &amp; Roots 5.0 Winners</h1>
        <p className={styles.subtitle}>
          Select an event to view the qualified teams
        </p>

        <div className={styles.buttonRow}>
          <button
            type="button"
            className={styles.eventButton}
            onClick={() => setView('marketing-matrix')}
          >
            Marketing Matrix Winners
          </button>
          <button
            type="button"
            className={styles.eventButton}
            onClick={() => setView('brandstorm')}
          >
            BrandStorm Winners
          </button>
        </div>
      </div>
    </main>
  );
}
