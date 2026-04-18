import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { Link } from 'react-scroll';
import CountUp from 'react-countup';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

const heroStats = [
  { num: 1500, suffix: '+', label: 'Hours Trained' },
  { num: 150,  suffix: '+', label: 'LeetCode Solved' },
  { num: 5,    suffix: '+', label: 'Projects Built' },
  { num: 3,    suffix: '',  label: 'Hackathon Awards' },
];

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: 800, margin: '0 auto' }}>
        {/* <motion.div className="section-badge" {...fadeUp(0.05)}>
          Available for Opportunities
        </motion.div> */}

        <motion.p className="hero-greeting" {...fadeUp(0.1)}>
          Hi, my name is
        </motion.p>

        <motion.h1 className="hero-name" {...fadeUp(0.23)}>
          Soumya Madishetti
        </motion.h1>

        <motion.div className="hero-title" {...fadeUp(0.4)}>
          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              2200,
              'MERN Stack Expert',
              2200,
              'AI / LLM Integrator',
              2200,
              'Problem Solver',
              2200,
              'Open Source Contributor',
              2200,
            ]}
            wrapper="span"
            speed={55}
            repeat={Infinity}
          />
        </motion.div>

        <motion.p className="hero-desc" {...fadeUp(0.55)}>
        Full Stack Developer specializing in MERN stack and AI/LLM integration — building scalable, production-ready applications that solve real-world business problems.
        </motion.p>

        <motion.div className="hero-btns" {...fadeUp(0.65)}>
          <Link to="projects" smooth duration={600} offset={-80}>
            <motion.button className="btn-primary btn-glow" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              View Projects
            </motion.button>
          </Link>
          <Link to="contact" smooth duration={600} offset={-80}>
            <motion.button className="btn-outline" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              Get In Touch
            </motion.button>
          </Link>
        </motion.div>

        <motion.div className="hero-socials" {...fadeUp(0.75)}>
          {[
            { icon: <FiGithub />,   href: 'https://github.com/SoumyaMadishetti17',   label: 'GitHub'   },
            { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/soumyamadishetti/', label: 'LinkedIn' },
            { icon: <FiMail />,     href: 'mailto:soumyamadishettimsd17@gmail.com', label: 'Email' },
          ].map(({ icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Stats strip */}
        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          {heroStats.map(({ num, suffix, label }, i) => (
            <motion.div
              key={label}
              className="hero-stat"
              whileHover={{ scale: 1.08 }}
            >
              <div className="hero-stat-num">
                <CountUp end={num} duration={2.5} delay={1} />{suffix}
              </div>
              <div className="hero-stat-label">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Animated background orbs */}
      {[
        { w: 500, h: 500, top: '5%', left: '10%', dur: 6 },
        { w: 350, h: 350, bottom: '15%', right: '8%', dur: 8, delay: 2 },
        { w: 250, h: 250, top: '40%', right: '20%', dur: 10, delay: 4 },
      ].map((orb, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: orb.w, height: orb.h,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,212,255,0.055) 0%, transparent 70%)',
            top: orb.top, left: orb.left, bottom: orb.bottom, right: orb.right,
            pointerEvents: 'none',
          }}
          animate={{ scale: [1, 1.18, 1], opacity: [0.4, 0.75, 0.4] }}
          transition={{ duration: orb.dur, repeat: Infinity, ease: 'easeInOut', delay: orb.delay || 0 }}
        />
      ))}
    </section>
  );
}
