import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillData = {
  'Programming Languages': [
    { name: 'JavaScript (ES6+)', pct: 95 },
    { name: 'TypeScript', pct: 85 },
    { name: 'Python', pct: 80 },
    { name: 'C++', pct: 75 },
    { name: 'Java', pct: 80 },
  ],
  Frontend: [
    { name: 'React.js / Vite.js ', pct: 90 },
    { name: 'Redux ', pct: 82 },
    { name: 'Tailwind CSS / Bootstrap', pct: 90 },
    { name: 'HTML5 / CSS3', pct: 98 },
    { name: 'Framer Motion', pct: 75 },
  ],
  Backend: [
    { name: 'Node.js', pct: 88 },
    { name: 'Express.js', pct: 85 },
    { name: 'MongoDB', pct: 85 },
    { name: 'REST APIs', pct: 90 },
    { name: 'JWT / Auth', pct: 78 },
  ],
  'AI & Tools': [
    { name: 'Google Gemini LLM', pct: 90 },
    { name: 'Prompt Engineering', pct: 90 },
    { name: 'Git / GitHub', pct: 93 },
    { name: 'OpenAI API integration', pct: 95 },
    { name: 'Agile / Scrum', pct: 90 },
  ],
};

const tabs = Object.keys(skillData);

export default function Skills() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="skills" ref={ref} style={{ background: 'rgba(13,21,37,0.5)' }}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Technical <span>Skills</span></h2>
          <div className="section-underline" />
          <p className="section-sub">Proficient in modern technologies and frameworks for building scalable applications</p>
        </motion.div>

        <motion.div
          className="skills-tabs"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`skills-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="skills-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            {skillData[activeTab].map(({ name, pct }, i) => (
              <motion.div
                key={name}
                className="skill-card"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="skill-header">
                  <span className="skill-name">{name}</span>
                  <span className="skill-pct">{pct}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-fill"
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: pct / 100 } : {}}
                    transition={{ duration: 1, delay: 0.3 + i * 0.08, ease: [0.4, 0, 0.2, 1] }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
