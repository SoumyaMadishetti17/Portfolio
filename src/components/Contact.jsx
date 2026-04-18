import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiCode } from 'react-icons/fi';

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In <span>Touch</span></h2>
          <div className="section-underline" />
          <p className="section-sub">Have a project in mind or want to collaborate? Feel free to reach out!</p>
        </motion.div>

        <div className="contact-grid">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="contact-intro">
              <h3>Let's Connect</h3>
              <p>
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions. Whether you have a question
                or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="contact-items">
              {[
                { icon: <FiMail />, label: 'Email', value: 'soumyamadishettimsd17@gmail.com' },
                { icon: <FiPhone />, label: 'Phone', value: '+91 7780389603' },
                { icon: <FiMapPin />, label: 'Location', value: 'Hyderabad, Telangana' },
              ].map(({ icon, label, value }) => (
                <motion.div
                  key={label}
                  className="contact-item"
                  whileHover={{ x: 6 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="contact-item-icon">{icon}</div>
                  <div>
                    <div className="contact-item-label">{label}</div>
                    <div className="contact-item-value">{value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="contact-socials">
              {[
                { icon: <FiGithub />, href: 'https://github.com/SoumyaMadishetti17', label: 'GitHub' },
                { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/soumyamadishetti/', label: 'LinkedIn' },
                { icon: <FiCode />, href: 'https://leetcode.com/u/soumyamadishetti17/', label: 'LeetCode' },
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
            </div>
          </motion.div>

          {/* Right – Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project Discussion"
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="form-submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {sent ? '✓ Message Sent!' : <><FiSend /> Send Message</>}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
