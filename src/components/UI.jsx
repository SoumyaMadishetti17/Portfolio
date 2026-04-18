import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp, FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-scroll';

const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Achievements', 'Contact'];

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            position: 'fixed',
            bottom: 32,
            right: 32,
            width: 46,
            height: 46,
            borderRadius: '50%',
            background: 'var(--accent-cyan)',
            color: '#070d1a',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            cursor: 'pointer',
            zIndex: 999,
            boxShadow: '0 4px 20px rgba(0,212,255,0.4)',
          }}
          whileHover={{ scale: 1.12, boxShadow: '0 6px 28px rgba(0,212,255,0.6)' }}
          whileTap={{ scale: 0.95 }}
        >
          <FiArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="mobile-menu-btn"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <FiMenu />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="mobile-nav-panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <button
                className="mobile-close-btn"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <FiX />
              </button>
              <ul className="mobile-nav-links">
                {navLinks.map((link) => (
                  <li key={link}>
                    <Link
                      to={link.toLowerCase()}
                      smooth
                      duration={600}
                      offset={-80}
                      onClick={() => setOpen(false)}
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
