import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { FiExternalLink } from 'react-icons/fi';

const achievements = [
  {
    icon: '🏆',
    year: 2025,
    title: 'Masai Hackathon Winner',
    desc: 'Secured winning position in competitive hackathon, demonstrating full-stack problem-solving, teamwork, and real-time coding under pressure.',
  },
  {
    icon: '🎓',
    year: 2024,
    title: 'Best Final Year Project Award',
    desc: 'Awarded by Sree Chaitanya Institute for building an IoT-based Smart Energy Meter using C++ (ESP32) and Power BI for real-time multi-zone energy monitoring.',
  },
  {
    icon: '⭐',
    year: 2025,
    title: '1500+ Hours Training Completion',
    desc: 'Completed intensive industry-aligned software engineering training at Masai School, covering full-stack development, system design, and agile methodologies.',
  },
];

const stats = [
  { num: 140, label: 'Total Solved', color: 'var(--accent-cyan)' },
  { num: 60,  label: 'Easy',         color: '#4ade80' },
  { num: 60,  label: 'Medium',       color: '#facc15' },
  { num: 10,  label: 'Hard',         color: '#f87171' },
];

export default function Achievements() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="achievements" ref={ref} style={{ background: 'rgba(13,21,37,0.5)' }}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Achievements & <span>Recognition</span></h2>
          <div className="section-underline" />
          <p className="section-sub">Awards, certifications, and milestones achieved throughout my journey</p>
        </motion.div>

        <div className="achievements-grid">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="achievement-icon">{a.icon}</div>
              <span className="achievement-year">{a.year}</span>
              <h4 className="achievement-title">{a.title}</h4>
              <p className="achievement-desc">{a.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* LeetCode stats */}
        <motion.div
          className="leetcode-panel"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <div className="leetcode-header">
            <div className="leetcode-title">
              <div style={{ fontSize: '1.6rem' }}>{'</>'}</div>
              <div>
                <h3>LeetCode Stats</h3>
                <p>Actively solving DSA problems</p>
              </div>
            </div>
            <a
              href="https://leetcode.com/u/soumyamadishetti17/"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ fontSize: '0.85rem', padding: '10px 20px' }}
            >
              <FiExternalLink /> View Profile
            </a>
          </div>

          <div className="stats-row">
            {stats.map(({ num, label, color }, i) => (
              <motion.div
                key={label}
                className="stat-box"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <div className="stat-num" style={{ color }}>
                  {inView ? <CountUp end={num} duration={2} delay={0.5} /> : 0}
                </div>
                <div className="stat-label">{label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
