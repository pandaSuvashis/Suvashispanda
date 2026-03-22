import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { leadership } from '../data/content';
import { FiUsers, FiCpu } from 'react-icons/fi';
import './Leadership.css';

const icons = [FiUsers, FiCpu];

export default function Leadership() {
  return (
    <SectionWrapper id="leadership">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        Leadership & Activities
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        Beyond the code
      </motion.p>

      <div className="leadership-grid">
        {leadership.map((item, i) => {
          const Icon = icons[i] || FiUsers;
          return (
            <motion.div
              key={item.title}
              className="leadership-card glass"
              initial={{ opacity: 0, y: 60, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, boxShadow: 'var(--shadow-glow)' }}
            >
              <motion.div
                className="leadership-icon"
                initial={{ scale: 0, rotate: -20 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.2, type: 'spring', stiffness: 400 }}
              >
                <Icon size={22} />
              </motion.div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
