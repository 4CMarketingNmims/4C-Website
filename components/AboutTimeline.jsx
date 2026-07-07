'use client';

import styles from './AboutTimeline.module.css';

const timelineData = [
  {
    year: "2008",
    subtitle: "Foundation",
    title: "The beginning of 4C — four pillars coming together to build a student-led marketing community.",
    points: [
      "Connect — Building meaningful relationships",
      "Collect — Gathering insights and knowledge",
      "Contest — Challenging conventional thinking",
      "Commence — Taking action that matters"
    ],
    images: [
      { src: "/WNR/wnr-01.jpg", style: { top: '5%', left: '5%', width: '55%', zIndex: 1, transform: 'rotate(-3deg)' } },
      { src: "/WNR/wnr-02.jpg", style: { top: '25%', right: '5%', width: '45%', zIndex: 2, transform: 'rotate(4deg)' } },
      { src: "/WNR/wnr-06.jpg", style: { top: '50%', left: '10%', width: '60%', zIndex: 3, transform: 'rotate(-2deg)' } },
      { src: "/WNR/wnr-04.jpg", style: { top: '75%', right: '0%', width: '50%', zIndex: 4, transform: 'rotate(2deg)' } }
    ]
  },
  {
    year: "2024",
    subtitle: "Expansion",
    title: "Expansion year — 4C established key partnerships and launched mentorship programs connecting students with industry leaders.\n\nOur focus shifted to bridging creativity and technology, addressing modern marketing education gaps.",
    points: [
      "Mentorship Program",
      "Industry Connect",
      "Creative Workshops",
      "Tech Integration"
    ],
    images: [
      { src: "/WNR/wnr-10.jpg", style: { top: '2%', right: '5%', width: '60%', zIndex: 1, transform: 'rotate(2deg)' } },
      { src: "/WNR/wnr-11.jpg", style: { top: '30%', left: '0%', width: '50%', zIndex: 2, transform: 'rotate(-4deg)' } },
      { src: "/WNR/wnr-12.jpg", style: { top: '55%', right: '10%', width: '55%', zIndex: 3, transform: 'rotate(3deg)' } },
      { src: "/WNR/wnr-13.jpg", style: { top: '75%', left: '5%', width: '45%', zIndex: 4, transform: 'rotate(-1deg)' } }
    ]
  },
  {
    year: "2025",
    subtitle: "Innovation",
    title: "Another year of growth and innovation through Wings and Roots 2025 and Roulette 2026.",
    points: [
      "4C Workshop 2025",
      "Marketing Campaign",
      "Team Collaboration",
      "Innovation Lab"
    ],
    images: [
      { src: "/WNR/wnr-16.jpg", style: { top: '5%', left: '5%', width: '50%', zIndex: 1, transform: 'rotate(-2deg)' } },
      { src: "/WNR/wnr-17.jpg", style: { top: '25%', right: '0%', width: '60%', zIndex: 2, transform: 'rotate(4deg)' } },
      { src: "/WNR/wnr-18.jpg", style: { top: '50%', left: '0%', width: '45%', zIndex: 3, transform: 'rotate(-3deg)' } },
      { src: "/WNR/wnr-20.jpg", style: { top: '70%', right: '5%', width: '55%', zIndex: 4, transform: 'rotate(1deg)' } }
    ]
  }
];

export default function AboutTimeline() {
  return (
    <div className={styles.timelineContainer}>
      
      <div className={styles.headerArea}>
        <h1 className={styles.pageTitle}>OUR JOURNEY</h1>
        <p className={styles.pageSubtitle}>From humble beginnings to becoming a leading marketing collective.</p>
      </div>

      <div className={styles.timelineList}>
        {timelineData.map((block, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div key={idx} className={`${styles.timelineRow} ${isEven ? styles.rowEven : styles.rowOdd}`}>
            
            {/* LEFT COLUMN: STICKY YEAR & TEXT */}
            <div className={styles.leftCol}>
              <div className={styles.stickyContent}>
                <div className={styles.yearBox}>
                  <h2 className={styles.yearText}>{block.year}</h2>
                  <span className={styles.yearSubtitle}>— {block.subtitle}</span>
                </div>
                
                <div className={styles.textContent}>
                  <p className={styles.mainTitle}>{block.title}</p>
                  <ul className={styles.pointsList}>
                    {block.points.map((pt, i) => (
                      <li key={i} className={styles.pointItem}>
                        <span className={styles.checkIcon}></span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: MESSY SCROLLING COLLAGE */}
            <div className={styles.rightCol}>
              <div className={styles.collageArea}>
                {block.images.map((img, i) => (
                  <div key={i} className={styles.collageImgWrapper} style={img.style}>
                    <img src={img.src} alt={`${block.year} visual ${i}`} className={styles.timelineImg} />
                  </div>
                ))}
              </div>
            </div>

          </div>
        );
      })}
      </div>
    </div>
  );
}
