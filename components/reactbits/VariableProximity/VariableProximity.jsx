'use client';

import { useRef, useEffect } from 'react';

export default function VariableProximity({
  text,
  fromFontVariationSettings, // e.g. { wght: 300, wdth: 100 }
  toFontVariationSettings,   // e.g. { wght: 900, wdth: 125 }
  radius = 150,
  falloff = 'linear',
  className = '',
  style = {},
}) {
  const containerRef = useRef(null);
  const letterRefs = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });
  const progressValues = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let raf;
    const update = () => {
      letterRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const dx = mouse.current.x - centerX;
        const dy = mouse.current.y - centerY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        let targetP = 0;
        if (dist < radius) {
          if (falloff === 'gaussian') {
            targetP = Math.exp(-(dist * dist) / (2 * (radius / 2.5) * (radius / 2.5)));
          } else {
            targetP = 1 - dist / radius;
          }
        }
        
        // Smoothly interpolate progress
        const pv = progressValues.current[index] || 0;
        const newP = pv + (targetP - pv) * 0.15;
        progressValues.current[index] = newP;
        
        // Build fontVariationSettings string
        const wght = fromFontVariationSettings.wght + (toFontVariationSettings.wght - fromFontVariationSettings.wght) * newP;
        const wdth = fromFontVariationSettings.wdth + (toFontVariationSettings.wdth - fromFontVariationSettings.wdth) * newP;
        
        ref.style.fontVariationSettings = `'wght' ${wght}, 'wdth' ${wdth}`;
        ref.style.fontWeight = Math.round(wght);
      });
      raf = requestAnimationFrame(update);
    };
    update();
    return () => cancelAnimationFrame(raf);
  }, [radius, falloff, fromFontVariationSettings, toFontVariationSettings]);

  const words = text.split(' ');
  let letterIndex = 0;

  return (
    <span ref={containerRef} className={className} style={{ display: 'inline-flex', flexWrap: 'wrap', ...style }}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'pre' }}>
          {word.split('').map((char, charIndex) => {
            const index = letterIndex++;
            return (
              <span
                key={charIndex}
                ref={(el) => (letterRefs.current[index] = el)}
                style={{
                  display: 'inline-block',
                  fontVariationSettings: `'wght' ${fromFontVariationSettings.wght}, 'wdth' ${fromFontVariationSettings.wdth}`,
                  fontWeight: fromFontVariationSettings.wght
                }}
              >
                {char}
              </span>
            );
          })}
          {wordIndex < words.length - 1 && '\u00A0'}
        </span>
      ))}
    </span>
  );
}
