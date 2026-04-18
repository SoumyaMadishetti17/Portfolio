import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { Link } from 'react-scroll';

const links = ['About', 'Skills', 'Projects', 'Experience', 'Achievements', 'Contact'];

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      background: 'var(--bg-secondary)',
      padding: '48px 24px 32px',
      position: 'relative',
      zIndex: 1,
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 32, marginBottom: 40 }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.3rem', fontWeight: 700, color: 'var(--accent-cyan)', marginBottom: 10 }}>
              &lt;SM /&gt;
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', maxWidth: 240, lineHeight: 1.6 }}>
              Full Stack Developer building scalable web applications with modern technologies.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p style={{ fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-muted)', marginBottom: 16 }}>Navigation</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {links.map((l) => (
                <li key={l}>
                  <Link
                    to={l.toLowerCase()} smooth duration={600} offset={-80}
                    style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', cursor: 'pointer', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = 'var(--accent-cyan)'}
                    onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-muted)', marginBottom: 16 }}>Contact</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: 8 }}>soumyamadishettimsd17@gmail.com</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: 8 }}>+91 7780389603</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Hyderabad, Telangana</p>
          </div>

          {/* Social */}
          <div>
            <p style={{ fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-muted)', marginBottom: 16 }}>Connect</p>
            <div style={{ display: 'flex', gap: 10 }}>
              {[
                { icon: <FiGithub />, href: 'https://github.com/SoumyaMadishetti17' },
                { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/soumyamadishetti/' },
                { icon: <FiMail />, href: 'mailto:soumyamadishettimsd17@gmail.com' },
              ].map(({ icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: 38, height: 38, borderRadius: 8,
                    border: '1px solid var(--border)',
                    color: 'var(--text-secondary)',
                    fontSize: '1rem', textDecoration: 'none',
                  }}
                  whileHover={{ scale: 1.12, borderColor: 'var(--accent-cyan)', color: 'var(--accent-cyan)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.82rem' }}>
          Made with <FiHeart style={{ display: 'inline', color: '#f87171', marginBottom: -2 }} /> by{' '}
          <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>Soumya Madishetti</span>
          {' '}· {new Date().getFullYear()} · Built with React & Framer Motion
        </div>
      </div>
    </footer>
  );
}
