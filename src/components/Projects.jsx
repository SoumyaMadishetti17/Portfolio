import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub, FiStar } from 'react-icons/fi';

const projects = [
    {
      id: 1,
      title: 'Dev Blog — AI Blog Platform',
      desc: 'Full-stack blogging platform with AI-powered content generation using Google Gemini LLM. Features custom prompt engineering, role-based access control, and optimized MongoDB queries.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Google Gemini', 'Redux', 'Tailwind CSS'],
      features: ['AI content generation with custom prompts', 'Role-based admin dashboard', 'Real-time content moderation'],
      emoji: '✍️',
      category: 'AI/ML',
      featured: true,
      demo: 'https://tangerine-sunburst-abaad0.netlify.app/',
      code: 'https://github.com/SoumyaMadishetti17/-AI-Powered-Blog-App.git',
    },
    {
      id: 2,
      title: 'My Gemini — AI Chat App',
      desc: 'A responsive AI-powered chat application built with React and Google Gemini API. Supports real-time conversational AI with clean UI and smooth message streaming.',
      tags: ['React', 'Google Gemini API', 'JavaScript', 'CSS'],
      features: ['Real-time AI responses via Gemini API', 'Conversational chat history', 'Clean responsive UI'],
      emoji: '🤖',
      category: 'AI/ML',
      featured: true,
      demo: 'https://gemini-two-taupe.vercel.app/',
      code: 'https://github.com/SoumyaMadishetti17/Gemini_Chat_App.git',
    },
    {
      id: 3,
      title: 'Destinify — Property Rental App',
      desc: 'A full-stack Airbnb-inspired property rental platform where users can browse, list, and book properties. Built with the MERN stack featuring secure authentication and dynamic listings.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Tailwind CSS'],
      features: ['Browse & book property listings', 'Host your own property', 'Secure login & user profiles'],
      emoji: '🏡',
      category: 'Full Stack',
      featured: false,
      demo: 'https://resonant-druid-489371.netlify.app',
      code: 'https://github.com/SoumyaMadishetti17/Destinify.git',
    },
    {
      id: 4,
      title: 'MediTrack — Medication Manager',
      desc: 'A healthcare web application to help users track medications, set reminders, and manage prescriptions — built collaboratively using the MERN stack.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
      features: ['Medication schedule tracking', 'Reminder & alert system', 'Prescription management'],
      emoji: '💊',
      category: 'Full Stack',
      featured: false,
      demo: 'https://meditrackapplication.netlify.app',
      code: 'https://github.com/PrashantPalve01/Medication-Management-App.git',
    },
    {
      id: 5,
      title: 'News Generator App',
      desc: 'A React-based news aggregator that fetches and displays real-time news articles by category using a third-party News API.',
      tags: ['React', 'News API', 'JavaScript', 'CSS'],
      features: ['Category-based news filtering', 'Real-time article fetching', 'Responsive card layout'],
      emoji: '📰',
      category: 'Full Stack',
      featured: false,
      demo: 'https://newsappnews.netlify.app/',
      code: 'https://github.com/SoumyaMadishetti17/News-Generator-app.git',
    },

];

const filters = ['All', 'AI/ML', 'Full Stack'];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);
  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <section id="projects" ref={ref} style={{ background: 'rgba(13,21,37,0.4)' }}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <div className="section-underline" />
          <p className="section-sub">Real-world applications built with modern technologies and deployed to production</p>
        </motion.div>

        <motion.div
          className="projects-filter"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          {filters.map((f) => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </motion.div>

        <AnimatePresence>
          {featured.length > 0 && (
            <motion.div className="projects-featured" layout>
              <div className="featured-label">
                <FiStar /> Featured Projects
              </div>
              <div className="projects-grid">
                {featured.map((p, i) => (
                  <ProjectCard key={p.id} project={p} delay={i * 0.1} inView={inView} />
                ))}
              </div>
            </motion.div>
          )}

          {rest.length > 0 && (
            <motion.div layout>
              <div className="projects-grid">
                {rest.map((p, i) => (
                  <ProjectCard key={p.id} project={p} delay={i * 0.1} inView={inView} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function ProjectCard({ project, delay, inView }) {
  return (
    <motion.div
      className="project-card-featured"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6 }}
      layout
    >
      <div className="project-img-placeholder">
        <span style={{ fontSize: '3.5rem' }}>{project.emoji}</span>
        {project.featured && <div className="project-badge">★ FEATURED</div>}
      </div>
      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.desc}</p>
        <div className="project-tags">
          {project.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
        <ul className="project-features">
          {project.features.map((f) => <li key={f}>{f}</li>)}
        </ul>
        <div className="project-actions">
          <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary" style={{ fontSize: '0.82rem', padding: '9px 18px' }}>
            <FiExternalLink /> Live Demo
          </a>
          <a href={project.code} target="_blank" rel="noreferrer" className="btn-outline" style={{ fontSize: '0.82rem', padding: '9px 18px' }}>
            <FiGithub /> Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}
