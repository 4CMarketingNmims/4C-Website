'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { MUMBAI_PATHS } from './mumbai_paths';
import styles from './BombaySquare.module.css';

// ----------------------------------------------------------------------------
// Coordinate system
// Everything below is drawn straight into a 480 x 780 SVG viewBox — the same
// space the old flat map (and the landmark x/y values in page.js) already
// use, so nothing here needs to be re-mapped or re-projected.
// ----------------------------------------------------------------------------
const VB_W = 480;
const VB_H = 780;

// Street centrelines, re-plotted for the new coastline. The spine road
// traces the western corridor (Andheri -> Bandra -> Worli -> Marine Drive
// -> Colaba), the eastern artery traces Dharavi/Sion/Kurla down toward the
// harbour, and the rest are short connector/suburb roads.
const ROADS = [
  { d: 'M 230 340 L 225 375 L 215 420 L 205 465 L 195 510 L 185 550 L 178 590 L 172 617 L 180 650 L 195 685 L 205 710', tier: 'major' },
  { d: 'M 330 380 L 335 420 L 320 460 L 300 505 L 280 550 L 255 590 L 230 620', tier: 'major' },
  { d: 'M 92 517 L 105 545 L 120 565 L 140 580', tier: 'minor' },
  { d: 'M 279 355 L 260 385 L 245 410', tier: 'minor' },
  { d: 'M 232 432 L 210 455 L 195 480 L 185 510', tier: 'minor' },
  { d: 'M 317 453 L 295 470 L 275 495 L 260 520', tier: 'minor' },
  { d: 'M 200 200 L 250 190 L 300 205 L 340 230', tier: 'minor' },
  { d: 'M 212 647 L 195 665 L 180 685 L 175 705', tier: 'minor' },
];

// Density clusters re-positioned to sit inside the new coastline, roughly
// matching where each neighbourhood actually sits: dense Colaba/Fort/Marine
// Drive in the south, Bandra/Dadar/Worli through the waist, Dharavi/Sion to
// the east, and the northern suburbs (Andheri, Vile Parle, Powai) up top.
const BUILDING_CLUSTERS = [
  { cx: 195, cy: 670, density: 20, spread: 22 },
  { cx: 210, cy: 630, density: 18, spread: 20 },
  { cx: 175, cy: 600, density: 15, spread: 18 },
  { cx: 180, cy: 560, density: 16, spread: 20 },
  { cx: 225, cy: 525, density: 15, spread: 22 },
  { cx: 215, cy: 440, density: 16, spread: 24 },
  { cx: 180, cy: 490, density: 12, spread: 20 },
  { cx: 295, cy: 460, density: 16, spread: 20 },
  { cx: 285, cy: 500, density: 13, spread: 18 },
  { cx: 230, cy: 380, density: 14, spread: 24 },
  { cx: 270, cy: 350, density: 12, spread: 20 },
  { cx: 365, cy: 330, density: 11, spread: 20 },
];

function seededRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
}

function buildRooftops() {
  const rand = seededRandom(42);
  const rects = [];
  BUILDING_CLUSTERS.forEach((cluster, ci) => {
    for (let i = 0; i < cluster.density; i += 1) {
      const w = 3 + rand() * 6;
      const h = 3 + rand() * 6;
      const x = cluster.cx + (rand() * 2 - 1) * cluster.spread - w / 2;
      const y = cluster.cy + (rand() * 2 - 1) * cluster.spread - h / 2;
      rects.push({ key: `${ci}-${i}`, x, y, w, h });
    }
  });
  return rects;
}

// -------------------------- Markers -----------------------------------------

function Marker({ landmark, isSelected, isHovered, onSelect, onHoverStart, onHoverEnd, image }) {
  const [imageFailed, setImageFailed] = useState(false);
  const left = `${(landmark.x / VB_W) * 100}%`;
  const top = `${(landmark.y / VB_H) * 100}%`;

  return (
    <div
      className={styles.marker3d}
      style={{ position: 'absolute', left, top, transform: 'translate(-50%, -50%)', '--marker': landmark.categoryColor }}
      onClick={(e) => {
        e.stopPropagation();
        onSelect?.(isSelected ? null : landmark);
      }}
      onMouseEnter={() => onHoverStart?.(landmark)}
      onMouseLeave={() => onHoverEnd?.()}
    >
      <span
        className={styles.marker3dDot}
        style={{
          width: isSelected ? 14 : 10,
          height: isSelected ? 14 : 10,
          boxShadow: `0 0 ${isSelected ? 18 : 10}px var(--marker)`,
        }}
      />
      {(isHovered || isSelected) && (
        <div className={styles.marker3dCard}>
          {image && !imageFailed && <img src={image} alt={landmark.name} onError={() => setImageFailed(true)} />}
          <div>
            <strong>{landmark.name}</strong>
            <span>{(landmark.category ?? '').toUpperCase()}</span>
          </div>
        </div>
      )}
    </div>
  );
}

// -------------------------- Public component ----------------------------------

export default function MapScene3D({ landmarks, selectedLandmark, hoveredId, onSelect, onHoverStart, onHoverEnd, images }) {
  const rooftops = useMemo(buildRooftops, []);

  return (
    <motion.div
      className={styles.mapSvgStage}
      initial={{ opacity: 0, scale: 0.92, rotateX: 8 }}
      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      onPointerDown={(e) => {
        if (e.target === e.currentTarget) onSelect?.(null);
      }}
    >
      <svg
        className={styles.mapSvgArt}
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="landGradient" x1="0" y1="0" x2="0.3" y2="1">
            <stop offset="0%" stopColor="#fdeecb" />
            <stop offset="45%" stopColor="#e8bd6d" />
            <stop offset="100%" stopColor="#b3801f" />
          </linearGradient>
          <linearGradient id="landSheen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
            <stop offset="35%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* extruded "thickness" underneath the landmass, giving it a raised, carved look */}
        <g transform="translate(0, 14)" opacity="0.9">
          {MUMBAI_PATHS.map((d, i) => (
            <path key={`shadow-${i}`} d={d} fill="#4a2f0d" />
          ))}
        </g>
        <g transform="translate(0, 7)" opacity="0.95">
          {MUMBAI_PATHS.map((d, i) => (
            <path key={`mid-${i}`} d={d} fill="#805a19" />
          ))}
        </g>

        {/* the landmass itself */}
        <g style={{ filter: 'drop-shadow(0 18px 30px rgba(0,0,0,0.55))' }}>
          {MUMBAI_PATHS.map((d, i) => (
            <path key={`land-${i}`} d={d} fill="url(#landGradient)" stroke="#fff6e0" strokeOpacity="0.7" strokeWidth="2" />
          ))}
          {MUMBAI_PATHS.map((d, i) => (
            <path key={`sheen-${i}`} d={d} fill="url(#landSheen)" />
          ))}
        </g>

        {/* city block texture */}
        <g fill="#8a611c" opacity="0.55">
          {rooftops.map((b) => (
            <rect key={b.key} x={b.x} y={b.y} width={b.w} height={b.h} rx="1" />
          ))}
        </g>

        {/* glowing roads */}
        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          {ROADS.map((r, i) => (
            <path
              key={i}
              d={r.d}
              stroke={r.tier === 'major' ? '#ff8b3d' : '#ffd9a0'}
              strokeWidth={r.tier === 'major' ? 4.5 : 2.2}
              opacity={r.tier === 'major' ? 0.95 : 0.75}
              style={{ filter: r.tier === 'major' ? 'drop-shadow(0 0 4px #ff8b3d)' : 'none' }}
            />
          ))}
        </g>
      </svg>

      <div className={styles.mapMarkersFlat}>
        {landmarks.map((lm) => (
          <Marker
            key={lm.id}
            landmark={lm}
            isSelected={selectedLandmark?.id === lm.id}
            isHovered={hoveredId === lm.id}
            onSelect={onSelect}
            onHoverStart={onHoverStart}
            onHoverEnd={onHoverEnd}
            image={images?.[lm.id]}
          />
        ))}
      </div>
    </motion.div>
  );
}