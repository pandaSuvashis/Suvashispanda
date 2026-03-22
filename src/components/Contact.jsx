import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { personalInfo, socialLinks } from '../data/content';
import { FiCopy, FiCheck, FiSend, FiMapPin } from 'react-icons/fi';
import './Contact.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sent');
    setTimeout(() => setFormStatus(''), 3000);
    e.target.reset();
  };

  return (
    <SectionWrapper id="contact">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        Get In Touch
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        Have an idea? Let's make it happen.
      </motion.p>

      <div className="contact-grid">
        {/* Info side */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="contact-card glass"
            whileHover={{ y: -4 }}
          >
            <div className="contact-row">
              <span className="contact-label">Email</span>
              <span className="contact-value">{personalInfo.email}</span>
              <button className="copy-btn" onClick={copyEmail}>
                {copied ? <FiCheck size={16} /> : <FiCopy size={16} />}
              </button>
            </div>
            <div className="contact-row">
              <span className="contact-label">Phone</span>
              <span className="contact-value">{personalInfo.phone}</span>
            </div>
            <div className="contact-row">
              <span className="contact-label">Location</span>
              <span className="contact-value"><FiMapPin size={14} style={{ marginRight: 4 }} />{personalInfo.location}</span>
            </div>
          </motion.div>

          <div className="contact-socials">
            {socialLinks.map(({ icon: Icon, href, label }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-contact-btn glass"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, boxShadow: 'var(--shadow-glow)' }}
                aria-label={label}
              >
                <Icon size={20} />
                <span>{label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Form side */}
        <motion.form
          className="contact-form glass"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" rows={5} required />
          </div>
          <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            {formStatus === 'sent' ? (
              <><FiCheck size={16} /> Sent!</>
            ) : (
              <><FiSend size={16} /> Send Message</>
            )}
          </button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
