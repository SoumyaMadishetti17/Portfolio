import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorFollower() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const trailX = useMotionValue(-100);
  const trailY = useMotionValue(-100);

  const springX = useSpring(trailX, { stiffness: 120, damping: 22 });
  const springY = useSpring(trailY, { stiffness: 120, damping: 22 });

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX - 6);
      cursorY.set(e.clientY - 6);
      trailX.set(e.clientX - 16);
      trailY.set(e.clientY - 16);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [cursorX, cursorY, trailX, trailY]);

  return (
    <>
      {/* dot */}
      <motion.div
        style={{
          position: 'fixed',
          left: 0, top: 0,
          width: 12, height: 12,
          borderRadius: '50%',
          background: 'var(--accent-cyan)',
          pointerEvents: 'none',
          zIndex: 99999,
          x: cursorX,
          y: cursorY,
          mixBlendMode: 'difference',
        }}
      />
      {/* ring */}
      <motion.div
        style={{
          position: 'fixed',
          left: 0, top: 0,
          width: 32, height: 32,
          borderRadius: '50%',
          border: '1.5px solid rgba(0,212,255,0.5)',
          pointerEvents: 'none',
          zIndex: 99998,
          x: springX,
          y: springY,
        }}
      />
    </>
  );
}
