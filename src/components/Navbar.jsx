import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Achievements', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const total = document.body.scrollHeight - window.innerHeight;
      setScrollPct(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrollPct}%` }} />
      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="navbar-inner">
          <motion.a href="#" className="logo" whileHover={{ scale: 1.05 }}>&lt;SM /&gt;</motion.a>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link}>
                <Link to={link.toLowerCase()} smooth duration={600} offset={-80} spy activeClass="nav-active">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
          <motion.button className="hamburger" onClick={() => setMobileOpen(true)} whileTap={{ scale: 0.9 }} aria-label="Open menu">
            <FiMenu />
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div className="mobile-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileOpen(false)} />
            <motion.div className="mobile-drawer" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', stiffness: 280, damping: 28 }}>
              <button className="drawer-close" onClick={() => setMobileOpen(false)}><FiX /></button>
              <div className="drawer-logo">&lt;SM /&gt;</div>
              <ul className="drawer-links">
                {navLinks.map((link, i) => (
                  <motion.li key={link} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}>
                    <Link to={link.toLowerCase()} smooth duration={600} offset={-80} onClick={() => setMobileOpen(false)}>{link}</Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
