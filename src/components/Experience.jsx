import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiBookOpen, FiCalendar, FiMapPin } from 'react-icons/fi';

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="experience" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Experience & <span>Education</span></h2>
          <div className="section-underline" />
        </motion.div>

        <div className="exp-edu-grid">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="exp-section-title">
              <FiBriefcase style={{ color: 'var(--accent-cyan)' }} /> Experience
            </h3>
            <motion.div className="exp-card" whileHover={{ y: -4 }}>
              <h4 className="exp-role">Full-Stack Developer</h4>
              <p className="exp-company">Masai School</p>
              <p className="exp-sub">Industry Immersive Training Program</p>
              <div className="exp-meta">
                <span><FiCalendar /> 2024 – Present</span>
                <span><FiMapPin /> Bengaluru (Remote)</span>
              </div>
              <p className="exp-desc">
                Completed 1500+ hours of intensive, industry-aligned software engineering
                training covering full-stack development, DSA, system design, and agile practices.
              </p>
              <ul className="exp-list">
                <li>Built and deployed full-stack production applications with real users</li>
                <li>Integrated AI/LLM APIs (Google Gemini) into production apps</li>
                <li>Actively practicing DSA on LeetCode (arrays, strings, hashmaps, recursion)</li>
                <li>Collaborated in Agile (Scrum) teams with sprint planning and code reviews</li>
                <li>Won recognition in Masai Hackathon for problem-solving</li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <h3 className="exp-section-title">
              <FiBookOpen style={{ color: 'var(--accent-cyan)' }} /> Education
            </h3>
            <motion.div className="exp-card" whileHover={{ y: -4 }}>
              <h4 className="exp-role">B.Tech in Electronics & Communication Engineering</h4>
              <p className="exp-company">Sree Chaitanya Institute of Technology & Sciences</p>
              <div className="exp-meta">
                <span><FiCalendar /> 2024</span>
              </div>
              <div className="cgpa-badge">7.0 CGPA</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
