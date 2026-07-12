'use client';

import { useEffect, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { X, MapPin, Star, ExternalLink, Clock, Navigation, ChevronRight, Menu, ChevronDown } from 'lucide-react';
import Nav from '@/components/Nav';
import styles from './BombaySquare.module.css';

// The 3D map needs a WebGL context, so it's loaded client-side only.
const MapScene3D = dynamic(() => import('./Mapscene3d'), {
  ssr: false,
  loading: () => <div className={styles.mapLoading}>Loading map…</div>,
});

const LANDMARKS = [
  {
    id: 'gateway',
    name: 'Gateway of India',
    subtitle: 'The Grand Arch',
    category: 'Heritage',
    categoryColor: '#d4a853',
    description:
      'Built in 1924 to commemorate the visit of King George V and Queen Mary, the Gateway of India is Mumbai\'s most iconic structure. This 26-metre basalt arch overlooks the Arabian Sea, where the last British troops departed India in 1948, marking the symbolic end of the Raj.',
    lat: 18.922,
    lng: 72.8347,
    mapsUrl: 'https://maps.google.com/?q=18.9220,72.8347',
    rating: 4.7,
    hours: 'Open 24 hours',
    bestTime: 'Golden Hour & Night',
    highlights: ['1924 basalt arch', 'Ferry to Elephanta', 'Taj Hotel backdrop', 'Monsoon storms'],
    x: 212,
    y: 647,
  },
  {
    id: 'marine_drive',
    name: 'Marine Drive',
    subtitle: 'The Queen\'s Necklace',
    category: 'Iconic',
    categoryColor: '#4a9eff',
    description:
      'The 3.6-kilometre C-shaped boulevard along the coast of South Mumbai, known as the Queen\'s Necklace because the street lights resemble a string of pearls from above at night.',
    lat: 18.9438,
    lng: 72.823,
    mapsUrl: 'https://maps.google.com/?q=18.9438,72.8230',
    rating: 4.6,
    hours: 'Open 24 hours',
    bestTime: 'Midnight Walks',
    highlights: ['Art Deco buildings', 'Sea breeze at dawn', 'Monsoon waves', 'Midnight city views'],
    x: 149,
    y: 611,
  },
  {
    id: 'dharavi',
    name: 'Dharavi',
    subtitle: 'Heart of Mumbai',
    category: 'Culture',
    categoryColor: '#e05c5c',
    description:
      'Often labelled Asia\'s largest slum, Dharavi is in fact one of the world\'s most productive and entrepreneurial communities.',
    lat: 19.0411,
    lng: 72.8544,
    mapsUrl: 'https://maps.google.com/?q=19.0411,72.8544',
    rating: 4.3,
    hours: 'Tours: 9:00 AM - 6:00 PM',
    bestTime: 'Morning',
    highlights: ['1 million residents', 'Cottage industries', 'Pottery quarter', 'Recycling hub'],
    x: 317,
    y: 453,
  },
  {
    id: 'bandra',
    name: 'Bandra',
    subtitle: 'Queen of the Suburbs',
    category: 'Lifestyle',
    categoryColor: '#e8a25e',
    description:
      'The undisputed social capital of Mumbai, Bandra blends old Koli fishing villages, Portuguese-era churches, and contemporary boutiques with effortless grace.',
    lat: 19.0544,
    lng: 72.8385,
    mapsUrl: 'https://maps.google.com/?q=19.0544,72.8385',
    rating: 4.6,
    hours: 'Varies by venue',
    bestTime: 'Weekend Evenings',
    highlights: ['Bandstand promenade', 'Linking Road shopping', 'Rooftop bars', 'St. Andrew\'s Church'],
    x: 232,
    y: 432,
  },
  {
    id: 'cst',
    name: 'CST Railway Terminus',
    subtitle: 'UNESCO World Heritage',
    category: 'Heritage',
    categoryColor: '#d4a853',
    description:
      'A Victorian Gothic railway terminus built in 1887 and now a UNESCO World Heritage Site.',
    lat: 18.9398,
    lng: 72.8354,
    mapsUrl: 'https://maps.google.com/?q=18.9398,72.8354',
    rating: 4.6,
    hours: '4:00 AM - 12:00 AM',
    bestTime: 'Evening Rush Hour',
    highlights: ['UNESCO World Heritage', 'Gothic Victorian design', 'Railway hub', 'Stone gargoyles'],
    x: 215,
    y: 617,
  },
  {
    id: 'nmims',
    name: 'NMIMS University',
    subtitle: 'Home of 4C',
    category: 'Education',
    categoryColor: '#f5a623',
    description:
      'Narsee Monjee Institute of Management Studies, established in 1981 in Vile Parle, is one of India\'s premier deemed universities and home to 4C.',
    lat: 19.1015,
    lng: 72.8474,
    mapsUrl: 'https://maps.google.com/?q=19.1015,72.8474',
    rating: 4.7,
    hours: 'Mon–Sat: 8:00 AM – 8:00 PM',
    bestTime: '4C Festival Days',
    highlights: ['4C Marketing Fest', 'Premier business school', 'Vile Parle campus', 'Industry partnerships'],
    x: 279,
    y: 355,
  },
  {
    id: 'juhu',
    name: 'Juhu Beach',
    subtitle: 'Sunset & Street Food',
    category: 'Beach',
    categoryColor: '#6dd5bd',
    description:
      'A classic Mumbai shoreline, rich in sunset views, seaside snacks, and the energy of the city’s western coast.',
    lat: 19.103,
    lng: 72.826,
    mapsUrl: 'https://maps.google.com/?q=19.1030,72.8260',
    rating: 4.5,
    hours: 'Open 24 hours',
    bestTime: 'Evening',
    highlights: ['Sunset strolls', 'Street food', 'Beachside cafes', 'Weekend crowd'],
    x: 92,
    y: 517,
  },
  {
    id: 'haji_ali',
    name: 'Haji Ali Dargah',
    subtitle: 'Sacred Island Shrine',
    category: 'Spiritual',
    categoryColor: '#7eb8d4',
    description:
      'Set on a tiny islet off the coast, this shrine is one of Mumbai’s most atmospheric landmarks.',
    lat: 18.9823,
    lng: 72.8093,
    mapsUrl: 'https://maps.google.com/?q=18.9823,72.8093',
    rating: 4.8,
    hours: 'Open 24 hours',
    bestTime: 'Early Morning',
    highlights: ['Causeway access', 'Seaborn architecture', 'Prayer & silence', 'Ocean views'],
    x: 170,
    y: 589,
  },
  {
    id: 'elephanta',
    name: 'Elephanta Caves',
    subtitle: 'Island of Stone',
    category: 'Heritage',
    categoryColor: '#d4a853',
    description:
      'A UNESCO heritage island site known for its rock-cut cave temples and monumental sculpture.',
    lat: 18.9632,
    lng: 72.9318,
    mapsUrl: 'https://maps.google.com/?q=18.9632,72.9318',
    rating: 4.7,
    hours: '9:00 AM - 5:00 PM',
    bestTime: 'Morning Ferry',
    highlights: ['Rock-cut temples', 'Shiva sculpture', 'Ferry ride', 'Island escape'],
    x: 304,
    y: 675,
  },
  {
    id: 'siddhivinayak',
    name: 'Siddhivinayak Temple',
    subtitle: 'Mumbai’s Beloved Shrine',
    category: 'Spiritual',
    categoryColor: '#7eb8d4',
    description:
      'One of the city’s most visited temples, famed for its intricate shrine and deep local devotion.',
    lat: 19.0169,
    lng: 72.8302,
    mapsUrl: 'https://maps.google.com/?q=19.0169,72.8302',
    rating: 4.8,
    hours: 'Open daily',
    bestTime: 'Early Morning',
    highlights: ['Popular pilgrimage site', 'Golden idol', 'Ceremonial rituals', 'South Mumbai access'],
    x: 232,
    y: 530,
  },
];

const LANDMARK_IMAGES = {
  gateway: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=600&h=400&fit=crop&auto=format',
  marine_drive: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&h=400&fit=crop&auto=format',
  dharavi: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=600&h=400&fit=crop&auto=format',
  bandra: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=600&h=400&fit=crop&auto=format',
  cst: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600&h=400&fit=crop&auto=format',
  nmims: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&h=400&fit=crop&auto=format',
  juhu: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop&auto=format',
  haji_ali: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=600&h=400&fit=crop&auto=format',
  elephanta: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=400&fit=crop&auto=format',
  siddhivinayak: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Shree_Siddhivinayak_Temple_Mumbai.jpg/600px-Shree_Siddhivinayak_Temple_Mumbai.jpg',
};

const CATEGORIES = [
  { id: 'all', label: 'All Places' },
  { id: 'Heritage', label: 'Heritage' },
  { id: 'Iconic', label: 'Iconic' },
  { id: 'Culture', label: 'Culture' },
  { id: 'Lifestyle', label: 'Lifestyle' },
  { id: 'Education', label: 'Education' },
  { id: 'Beach', label: 'Beaches' },
  { id: 'Spiritual', label: 'Spiritual' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.4s ease',
        background: scrolled ? 'rgba(5,8,15,0.96)' : 'linear-gradient(to bottom, rgba(5,8,15,0.9), transparent)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(212,168,83,0.12)' : 'none',
      }}
    >
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <span style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: '1.1rem', fontWeight: 700, letterSpacing: '0.18em', color: '#d4a853', lineHeight: 1 }}>
            BOMBAE SQUARE
          </span>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.58rem', letterSpacing: '0.35em', color: 'rgba(212,168,83,0.5)', textTransform: 'uppercase' }}>
            4C · NMIMS Mumbai
          </span>
        </div>

        <div className="hidden md:flex" style={{ gap: '2.5rem', alignItems: 'center' }}>
          {['Map', 'Heritage', 'Nightlife', 'Culture', 'About'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ fontFamily: "'Cinzel', serif", fontSize: '0.7rem', letterSpacing: '0.2em', color: 'rgba(232,220,200,0.7)', textDecoration: 'none', transition: 'color 0.2s' }}>
              {item.toUpperCase()}
            </a>
          ))}
          <a href="#map" style={{ fontFamily: "'Cinzel', serif", fontSize: '0.65rem', letterSpacing: '0.18em', color: '#05080f', background: '#d4a853', padding: '0.5rem 1.2rem', textDecoration: 'none', display: 'block' }}>
            EXPLORE MAP
          </a>
        </div>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', color: '#d4a853', cursor: 'pointer' }}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} style={{ background: 'rgba(5,8,15,0.98)', borderTop: '1px solid rgba(212,168,83,0.12)', overflow: 'hidden' }}>
            {['Map', 'Heritage', 'Nightlife', 'Culture', 'About'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} style={{ display: 'block', padding: '1rem 2rem', fontFamily: "'Cinzel', serif", fontSize: '0.75rem', letterSpacing: '0.2em', color: 'rgba(232,220,200,0.8)', textDecoration: 'none', borderBottom: '1px solid rgba(212,168,83,0.06)' }}>
                {item.toUpperCase()}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Stars() {
  const stars = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 60,
    size: Math.random() * 1.5 + 0.5,
    opacity: Math.random() * 0.5 + 0.1,
    delay: Math.random() * 3,
  }));

  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
      {stars.map((s) => (
        <motion.div key={s.id} style={{ position: 'absolute', left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size, borderRadius: '50%', background: '#fff' }} animate={{ opacity: [s.opacity, s.opacity * 2.5, s.opacity] }} transition={{ repeat: Infinity, duration: 2.5 + s.delay, ease: 'easeInOut', delay: s.delay }} />
      ))}
    </div>
  );
}

function HeroSection() {
  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: '#05080f' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1769271972348-429a8ad18f51?w=1920&h=1080&fit=crop&auto=format)', backgroundSize: 'cover', backgroundPosition: 'center 30%', opacity: 0.5 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(5,8,15,0.6) 0%, rgba(5,8,15,0.1) 40%, rgba(5,8,15,0.3) 70%, rgba(5,8,15,1) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 60%, rgba(212,168,83,0.04) 0%, transparent 70%)' }} />
      <Stars />
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 1.5rem', maxWidth: 900 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', letterSpacing: '0.45em', color: 'rgba(212,168,83,0.6)', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
            4C · NMIMS · Mumbai · 2025
          </div>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }} style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: 'clamp(2.5rem, 8vw, 6rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '0.04em', color: '#e8dcc8', marginBottom: '0.3rem' }}>
          BOMBAE
        </motion.h1>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.55 }} style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: 'clamp(2.5rem, 8vw, 6rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '0.04em', background: 'linear-gradient(135deg, #d4a853 0%, #f5e07a 45%, #c9921a 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '2rem' }}>
          SQUARE
        </motion.h1>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.55rem 0.95rem', border: '1px solid rgba(212,168,83,0.32)', borderRadius: '999px', background: 'rgba(212,168,83,0.09)', color: '#f5e3b6', fontFamily: "'DM Mono', monospace", fontSize: '0.62rem', letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
          Updated 3D Mumbai Atlas
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} style={{ fontFamily: "'Raleway', sans-serif", fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)', fontWeight: 300, letterSpacing: '0.08em', color: 'rgba(232,220,200,0.65)', lineHeight: 1.8, maxWidth: 660, margin: '0 auto 3rem' }}>
          A cinematic, interactive atlas of Mumbai with glowing landmarks, layered depth, and a bold aerial view of the city’s most iconic places.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }} style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#map" style={{ fontFamily: "'Cinzel', serif", fontSize: '0.7rem', letterSpacing: '0.2em', color: '#05080f', background: 'linear-gradient(135deg, #d4a853, #c9921a)', padding: '0.9rem 2.5rem', textDecoration: 'none', display: 'inline-block', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 0 30px rgba(212,168,83,0.25)' }}>
            EXPLORE THE MAP
          </a>
          <a href="#explore" style={{ fontFamily: "'Cinzel', serif", fontSize: '0.7rem', letterSpacing: '0.2em', color: '#d4a853', border: '1px solid rgba(212,168,83,0.4)', padding: '0.9rem 2.5rem', textDecoration: 'none', display: 'inline-block', transition: 'background 0.2s, border-color 0.2s' }}>
            DISCOVER BOMBAY
          </a>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', color: 'rgba(212,168,83,0.4)' }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.55rem', letterSpacing: '0.3em' }}>SCROLL</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}>
          <ChevronDown size={16} color="#d4a853" opacity={0.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}

function MapSection({ selectedLandmark, onSelect }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredId, setHoveredId] = useState(null);

  const filtered = useMemo(() => (activeCategory === 'all' ? LANDMARKS : LANDMARKS.filter((l) => l.category === activeCategory)), [activeCategory]);

  return (
    <section id="map" className={styles.mapSection}>
      <div className={styles.mapHeading}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
          <div className={styles.mapEyebrow}>
            Immersive 3D City Atlas
          </div>
          <h2 className={styles.mapTitle}>
            Mumbai From Above
          </h2>
          <p className={styles.mapSubtitle}>
            Click any glowing marker to reveal the story behind Mumbai’s signature landmarks and hidden corners.
          </p>
        </motion.div>
      </div>

      <div className={styles.mapBadge}>3D Immersive Atlas</div>

      <div className={styles.mapFilterRow}>
        {CATEGORIES.map((cat) => (
          <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={styles.mapFilterButton} style={{ borderColor: activeCategory === cat.id ? '#d4a853' : 'rgba(212,168,83,0.2)', background: activeCategory === cat.id ? 'rgba(212,168,83,0.12)' : 'transparent', color: activeCategory === cat.id ? '#d4a853' : 'rgba(232,220,200,0.5)' }}>
            {cat.label.toUpperCase()}
          </button>
        ))}
      </div>

      <div className={styles.mapStage}>
        <div className={styles.mapPerspective}>
          <div className={styles.mapWorld}>
            <div className={styles.mapWorldHalo} />
            <div className={styles.mapPlate} />
            <div className={styles.mapPlateGlow} />
            <div className={styles.mapCanvas3d}>
              <MapScene3D
                landmarks={filtered}
                selectedLandmark={selectedLandmark}
                hoveredId={hoveredId}
                onSelect={onSelect}
                onHoverStart={(lm) => setHoveredId(lm.id)}
                onHoverEnd={() => setHoveredId(null)}
                images={LANDMARK_IMAGES}
              />
            </div>
          </div>
        </div>

        <div className={styles.mapLegend}>
          {[
            { color: '#d4a853', label: 'Heritage' },
            { color: '#7eb8d4', label: 'Spiritual' },
            { color: '#6dd5bd', label: 'Beaches' },
            { color: '#e8a25e', label: 'Lifestyle' },
            { color: '#c17be8', label: 'Entertainment' },
            { color: '#e05c5c', label: 'Culture' },
          ].map((item) => (
            <div key={item.label} className={styles.mapLegendItem}>
              <div className={styles.mapLegendDot} style={{ background: item.color, boxShadow: `0 0 6px ${item.color}60` }} />
              <span className={styles.mapLegendText}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LandmarkPanel({ landmark, onClose }) {
  return (
    <motion.div key={landmark.id} initial={{ x: '100%', opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: '100%', opacity: 0 }} transition={{ type: 'spring', stiffness: 300, damping: 32 }} style={{ position: 'fixed', top: 0, right: 0, bottom: 0, width: 'min(460px, 100vw)', background: 'linear-gradient(160deg, #0c1220 0%, #081428 100%)', borderLeft: '1px solid rgba(212,168,83,0.15)', zIndex: 200, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: 3, background: `linear-gradient(to right, transparent, ${landmark.categoryColor}, transparent)`, flexShrink: 0 }} />
      <div style={{ padding: '2rem 2rem 1.5rem', borderBottom: '1px solid rgba(212,168,83,0.08)', flexShrink: 0, position: 'relative' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'rgba(212,168,83,0.1)', border: '1px solid rgba(212,168,83,0.2)', borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#d4a853' }}>
          <X size={16} />
        </button>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.25rem 0.75rem', border: `1px solid ${landmark.categoryColor}40`, background: `${landmark.categoryColor}12`, marginBottom: '1rem' }}>
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: landmark.categoryColor }} />
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.58rem', letterSpacing: '0.25em', color: landmark.categoryColor, textTransform: 'uppercase' }}>
            {landmark.category}
          </span>
        </div>

        <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.5rem', fontWeight: 600, letterSpacing: '0.06em', color: '#e8dcc8', lineHeight: 1.2, marginBottom: '0.3rem' }}>
          {landmark.name}
        </h2>
        <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.85rem', fontWeight: 300, letterSpacing: '0.1em', color: landmark.categoryColor, opacity: 0.75, textTransform: 'uppercase' }}>
          {landmark.subtitle}
        </p>
      </div>

      <div style={{ height: 180, background: 'linear-gradient(135deg, #0d1a30 0%, #0a1220 100%)', position: 'relative', flexShrink: 0, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${LANDMARK_IMAGES[landmark.id]})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.85 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12,18,32,1) 0%, transparent 60%)' }} />
        <div style={{ position: 'absolute', bottom: '0.8rem', left: '1.2rem', fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', letterSpacing: '0.08em', color: 'rgba(212,168,83,0.6)' }}>
          {landmark.lat.toFixed(4)}°N, {landmark.lng.toFixed(4)}°E
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderBottom: '1px solid rgba(212,168,83,0.08)', flexShrink: 0 }}>
        {[
          { icon: <Star size={13} />, label: 'Rating', value: `${landmark.rating} / 5` },
          { icon: <Clock size={13} />, label: 'Hours', value: landmark.hours.split(' ')[0] },
          { icon: <Navigation size={13} />, label: 'Best Time', value: landmark.bestTime.split(' ')[0] },
        ].map((stat) => (
          <div key={stat.label} style={{ padding: '1.1rem 0.8rem', textAlign: 'center', borderRight: '1px solid rgba(212,168,83,0.08)' }}>
            <div style={{ color: '#d4a853', display: 'flex', justifyContent: 'center', marginBottom: '0.3rem' }}>{stat.icon}</div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.58rem', letterSpacing: '0.15em', color: 'rgba(232,220,200,0.35)', textTransform: 'uppercase', marginBottom: '0.15rem' }}>{stat.label}</div>
            <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.75rem', fontWeight: 500, color: '#e8dcc8' }}>{stat.value}</div>
          </div>
        ))}
      </div>

      <div style={{ padding: '1.5rem 2rem', flex: 1 }}>
        <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.88rem', fontWeight: 300, lineHeight: 1.85, color: 'rgba(232,220,200,0.7)', letterSpacing: '0.02em', marginBottom: '1.8rem' }}>
          {landmark.description}
        </p>

        <div style={{ marginBottom: '1.8rem' }}>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: '0.62rem', letterSpacing: '0.25em', color: 'rgba(212,168,83,0.5)', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
            Highlights
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {landmark.highlights.map((h) => (
              <div key={h} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div style={{ width: 4, height: 4, borderRadius: '50%', background: landmark.categoryColor, flexShrink: 0 }} />
                <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.82rem', fontWeight: 400, color: 'rgba(232,220,200,0.65)', letterSpacing: '0.02em' }}>{h}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem', padding: '1rem', background: 'rgba(212,168,83,0.04)', border: '1px solid rgba(212,168,83,0.1)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.15em', color: 'rgba(232,220,200,0.35)', textTransform: 'uppercase' }}>Opening Hours</span>
            <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.78rem', color: 'rgba(232,220,200,0.7)' }}>{landmark.hours}</span>
          </div>
          <div style={{ height: 1, background: 'rgba(212,168,83,0.08)' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.15em', color: 'rgba(232,220,200,0.35)', textTransform: 'uppercase' }}>Best Time</span>
            <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.78rem', color: '#d4a853' }}>{landmark.bestTime}</span>
          </div>
        </div>

        <a href={landmark.mapsUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', width: '100%', padding: '0.95rem', background: 'linear-gradient(135deg, #d4a853, #c9921a)', color: '#05080f', fontFamily: "'Cinzel', serif", fontSize: '0.68rem', letterSpacing: '0.22em', textDecoration: 'none', boxShadow: '0 4px 24px rgba(212,168,83,0.25)', marginBottom: '0.75rem' }}>
          <MapPin size={14} />
          OPEN IN GOOGLE MAPS
          <ExternalLink size={12} />
        </a>

        <button onClick={onClose} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', width: '100%', padding: '0.85rem', background: 'transparent', color: 'rgba(232,220,200,0.45)', border: '1px solid rgba(212,168,83,0.15)', fontFamily: "'Cinzel', serif", fontSize: '0.65rem', letterSpacing: '0.18em', cursor: 'pointer' }}>
          BACK TO MAP
        </button>
      </div>
    </motion.div>
  );
}

const EXPLORE_CARDS = [
  { title: 'Nightlife', description: 'From rooftop bars in Bandra to jazz clubs in Lower Parel, Mumbai\'s night is a city unto itself.', image: 'https://images.unsplash.com/photo-1642233803470-00129cdeba8f?w=600&h=400&fit=crop&auto=format', count: '120+ Venues', color: '#c17be8' },
  { title: 'Heritage', description: 'Colonial archways, Mughal-era mosques, and Victorian train stations share the same skyline.', image: 'https://images.unsplash.com/photo-1592199353960-70fcf38bc66e?w=600&h=400&fit=crop&auto=format', count: '45+ Sites', color: '#d4a853' },
  { title: 'Street Food', description: 'Vada pav at Dadar, pani puri on Juhu Beach, kebabs at Mohammad Ali Road at 2 AM.', image: 'https://images.unsplash.com/photo-1666843527155-14ec5f016802?w=600&h=400&fit=crop&auto=format', count: '200+ Stalls', color: '#e8a25e' },
  { title: 'Bollywood', description: 'The world\'s most prolific film industry, its stars, studios, and street-level mythology.', image: 'https://images.unsplash.com/photo-1769271972348-429a8ad18f51?w=600&h=400&fit=crop&auto=format', count: 'Film City & Beyond', color: '#e05c5c' },
];

function ExploreSection() {
  return (
    <section id="explore" style={{ background: '#05080f', padding: '6rem 0', borderTop: '1px solid rgba(212,168,83,0.08)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'end', marginBottom: '3rem', gap: '2rem' }}>
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.4em', color: 'rgba(212,168,83,0.5)', marginBottom: '0.8rem', textTransform: 'uppercase' }}>
                Explore Bombay
              </div>
              <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 600, letterSpacing: '0.1em', color: '#e8dcc8', lineHeight: 1.2 }}>
                Every Quarter <br />
                <span style={{ background: 'linear-gradient(135deg, #d4a853 0%, #f5e07a 50%, #c9921a 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Has Its Own Soul
                </span>
              </h2>
            </motion.div>
          </div>

          <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.9rem', fontWeight: 300, color: 'rgba(232,220,200,0.5)', lineHeight: 1.7, maxWidth: 320, letterSpacing: '0.03em' }}>
            Bombay Square distils the city's infinite layers — through food, architecture, cinema, and the people who make Mumbai, Mumbai.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {EXPLORE_CARDS.map((card, i) => (
            <motion.div key={card.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }} style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer' }}>
              <ExploreCard card={card} />
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }} style={{ marginTop: '5rem', padding: '2.5rem', border: '1px solid rgba(212,168,83,0.1)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', background: 'rgba(212,168,83,0.02)' }}>
          {[
            { value: '18', unit: 'Landmarks', label: 'Mapped on the grid' },
            { value: '125+', unit: 'Years', label: 'Of documented Bombay culture' },
            { value: '20M+', unit: 'People', label: 'Who call it home' },
            { value: '1', unit: 'City', label: 'Like no other on Earth' },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: '2rem', fontWeight: 700, background: 'linear-gradient(135deg, #d4a853, #f5e07a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1, marginBottom: '0.2rem' }}>
                {stat.value}
              </div>
              <div style={{ fontFamily: "'Cinzel', serif", fontSize: '0.65rem', letterSpacing: '0.2em', color: 'rgba(232,220,200,0.5)', marginBottom: '0.3rem', textTransform: 'uppercase' }}>
                {stat.unit}
              </div>
              <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.78rem', fontWeight: 300, color: 'rgba(232,220,200,0.3)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ExploreCard({ card }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ position: 'relative', overflow: 'hidden', height: 360, cursor: 'pointer', border: `1px solid ${hovered ? card.color + '30' : 'rgba(212,168,83,0.1)'}`, transition: 'border-color 0.3s' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${card.image})`, backgroundSize: 'cover', backgroundPosition: 'center', transform: hovered ? 'scale(1.06)' : 'scale(1)', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }} />
      <div style={{ position: 'absolute', inset: 0, background: hovered ? 'linear-gradient(to top, rgba(5,8,15,0.96) 0%, rgba(5,8,15,0.5) 60%, rgba(5,8,15,0.2) 100%)' : 'linear-gradient(to top, rgba(5,8,15,1) 0%, rgba(5,8,15,0.75) 50%, rgba(5,8,15,0.3) 100%)', transition: 'background 0.4s' }} />
      <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${card.color}18 0%, transparent 60%)`, opacity: hovered ? 1 : 0.4, transition: 'opacity 0.3s' }} />
      <div style={{ position: 'absolute', inset: 0, padding: '1.8rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.2rem 0.65rem', border: `1px solid ${card.color}40`, background: `${card.color}15`, marginBottom: '0.8rem', alignSelf: 'flex-start' }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.58rem', letterSpacing: '0.18em', color: card.color }}>{card.count}</span>
        </div>
        <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.5rem', fontWeight: 600, letterSpacing: '0.08em', color: '#e8dcc8', marginBottom: '0.7rem' }}>{card.title}</h3>
        <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.85rem', fontWeight: 300, color: 'rgba(232,220,200,0.6)', lineHeight: 1.6, marginBottom: '1.2rem', transform: hovered ? 'translateY(0)' : 'translateY(6px)', opacity: hovered ? 1 : 0.8, transition: 'transform 0.4s, opacity 0.3s' }}>{card.description}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: card.color, opacity: hovered ? 1 : 0, transform: hovered ? 'translateY(0)' : 'translateY(8px)', transition: 'opacity 0.3s, transform 0.3s' }}>
          <span style={{ fontFamily: "'Cinzel', serif", fontSize: '0.62rem', letterSpacing: '0.2em' }}>EXPLORE</span>
          <ChevronRight size={13} />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer style={{ background: '#030610', borderTop: '1px solid rgba(212,168,83,0.1)', padding: '4rem 2rem 2rem' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          <div>
            <div style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: '1.2rem', fontWeight: 700, letterSpacing: '0.15em', color: '#d4a853', marginBottom: '0.4rem' }}>BOMBAY SQUARE</div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.58rem', letterSpacing: '0.3em', color: 'rgba(212,168,83,0.4)', marginBottom: '1.2rem' }}>4C · NMIMS MUMBAI</div>
            <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.82rem', fontWeight: 300, color: 'rgba(232,220,200,0.4)', lineHeight: 1.8, maxWidth: 260 }}>
              An immersive celebration of Mumbai's culture, heritage, and nightlife — curated by 4C, the flagship event of NMIMS.
            </p>
          </div>

          <div>
            <div style={{ fontFamily: "'Cinzel', serif", fontSize: '0.62rem', letterSpacing: '0.25em', color: 'rgba(212,168,83,0.5)', textTransform: 'uppercase', marginBottom: '1.2rem' }}>On the Map</div>
            {LANDMARKS.slice(0, 6).map((lm) => (
              <div key={lm.id} style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.8rem', fontWeight: 300, color: 'rgba(232,220,200,0.4)', marginBottom: '0.5rem' }}>{lm.name}</div>
            ))}
          </div>

          <div>
            <div style={{ fontFamily: "'Cinzel', serif", fontSize: '0.62rem', letterSpacing: '0.25em', color: 'rgba(212,168,83,0.5)', textTransform: 'uppercase', marginBottom: '1.2rem' }}>Explore</div>
            {['Heritage Sites', 'Street Food', 'Nightlife', 'Beaches', 'Bollywood', 'Spiritual'].map((item) => (
              <div key={item} style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.8rem', fontWeight: 300, color: 'rgba(232,220,200,0.4)', marginBottom: '0.5rem' }}>{item}</div>
            ))}
          </div>

          <div>
            <div style={{ fontFamily: "'Cinzel', serif", fontSize: '0.62rem', letterSpacing: '0.25em', color: 'rgba(212,168,83,0.5)', textTransform: 'uppercase', marginBottom: '1.2rem' }}>About 4C</div>
            <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.8rem', fontWeight: 300, color: 'rgba(232,220,200,0.4)', lineHeight: 1.8, marginBottom: '1rem' }}>
              The 4C festival at NMIMS is one of India's most prestigious inter-college marketing and communications competitions, bringing together the brightest minds from business schools across the country.
            </p>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.15em', color: '#d4a853', opacity: 0.6 }}>nmims.edu/4c</div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(212,168,83,0.06)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.58rem', letterSpacing: '0.12em', color: 'rgba(212,168,83,0.25)' }}>© 2025 Bombay Square · 4C NMIMS · All rights reserved</span>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.58rem', letterSpacing: '0.12em', color: 'rgba(212,168,83,0.25)' }}>Mumbai · 19.076°N 72.877°E</span>
        </div>
      </div>
    </footer>
  );
}

const GLOBAL_STYLES = `
  @keyframes mapPulse {
    0%, 100% { transform: scale(1); opacity: 0.3; }
    50% { transform: scale(1.8); opacity: 0; }
  }
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: #05080f; }
  ::-webkit-scrollbar-thumb { background: rgba(212,168,83,0.25); border-radius: 2px; }
  ::-webkit-scrollbar-thumb:hover { background: rgba(212,168,83,0.45); }
  html { scroll-behavior: smooth; }
`;

export default function BombaySquarePage() {
  const [selectedLandmark, setSelectedLandmark] = useState(null);

  return (
    <>
      <style>{GLOBAL_STYLES}</style>
      <div style={{ minHeight: '100vh', background: '#05080f', color: '#e8dcc8', overflowX: 'hidden', fontFamily: "'Raleway', sans-serif" }}>
        <Nav />
        <HeroSection />
        <MapSection selectedLandmark={selectedLandmark} onSelect={setSelectedLandmark} />
        <ExploreSection />
        <Footer />

        <AnimatePresence>
          {selectedLandmark && (
            <>
              <motion.div key="backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedLandmark(null)} style={{ position: 'fixed', inset: 0, background: 'rgba(5,8,15,0.6)', zIndex: 190, backdropFilter: 'blur(2px)' }} />
              <LandmarkPanel key={selectedLandmark.id} landmark={selectedLandmark} onClose={() => setSelectedLandmark(null)} />
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
