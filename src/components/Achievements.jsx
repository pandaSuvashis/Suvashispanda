import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { achievements } from '../data/content';
import { FiAward } from 'react-icons/fi';
import './Achievements.css';

export default function Achievements() {
  return (
    <SectionWrapper id="achievements">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        Achievements
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        Milestones that define my journey
      </motion.p>

      <div className="achievements-grid">
        {achievements.map((a, i) => (
          <motion.div
            key={a.title}
            className={`achievement-card glass ${a.isWinner ? 'winner' : ''}`}
            initial={{ opacity: 0, y: 60, scale: 0.85 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8, boxShadow: a.isWinner ? '0 0 40px rgba(255,215,0,0.25)' : 'var(--shadow-glow)' }}
          >
            <motion.div
              className={`achievement-icon ${a.isWinner ? 'winner-icon' : ''}`}
              initial={{ rotate: -20, scale: 0 }}
              whileInView={{ rotate: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.2, type: 'spring', stiffness: 400 }}
            >
              <FiAward size={24} />
            </motion.div>
            <span className="achievement-year">{a.year}</span>
            <h3>{a.title}</h3>
            <p>{a.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
