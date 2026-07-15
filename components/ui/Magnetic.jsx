'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function Magnetic({ children, stiffness = 150, damping = 15, mass = 0.1 }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX, y: middleY });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      style={{ position: 'relative', display: 'inline-block' }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x * 0.25, y: position.y * 0.25 }}
      transition={{ type: 'spring', stiffness, damping, mass }}
    >
      {children}
    </motion.div>
  );
}
