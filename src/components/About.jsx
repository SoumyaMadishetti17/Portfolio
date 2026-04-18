import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiZap, FiUsers, FiCpu } from 'react-icons/fi';

const cards = [
  { icon: <FiCode />, title: 'Clean Code', desc: 'Writing maintainable, scalable, and well-documented code' },
  { icon: <FiZap />, title: 'Fast Performance', desc: 'Optimized applications with efficient algorithms and queries' },
  { icon: <FiUsers />, title: 'Team Collaboration', desc: 'Agile methodologies, code reviews, and effective communication' },
  { icon: <FiCpu />, title: 'Problem Solving', desc: 'Strong DSA foundation with practical application skills' },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="about" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About <span>Me</span></h2>
          <div className="section-underline" />
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p>
              I'm a <strong>Full Stack Developer</strong> passionate about building
              robust, scalable web applications using the <strong>MERN stack</strong>.
            </p>
            <p>
              With over <strong>1500+ hours</strong> of intensive training and multiple
              production deployments, I specialize in integrating <strong>AI/LLM technologies</strong>{' '}
              into real-world applications.
            </p>
            <p>
              I focus on writing clean, maintainable code and solving complex problems
              through strong <strong>Data Structures & Algorithms</strong> foundation.
              Currently active on LeetCode, continuously improving my problem-solving skills.
            </p>
            <div className="about-btns">
              <a href="https://drive.google.com/file/d/1Lza_zjpn07WR0Zw5ohU5JxNAGu6BqUGI/view?usp=sharing" className="btn-primary" download>
                Download Resume
              </a>
              <a
                href="https://leetcode.com/u/soumyamadishetti17/"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                LeetCode Profile
              </a>
            </div>
          </motion.div>

          <motion.div
            className="about-cards"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            {cards.map(({ icon, title, desc }, i) => (
              <motion.div
                key={title}
                className="about-card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="about-card-icon">{icon}</div>
                <h4>{title}</h4>
                <p>{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
