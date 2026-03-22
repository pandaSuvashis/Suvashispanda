import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { experience } from '../data/content';
import { FiBriefcase } from 'react-icons/fi';
import './Experience.css';

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        Experience
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        Where I've made an impact
      </motion.p>

      <div className="timeline">
        {experience.map((exp, i) => (
          <motion.div
            key={i}
            className="timeline-item"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="timeline-dot"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.2, type: 'spring', stiffness: 400 }}
            >
              <FiBriefcase size={16} />
            </motion.div>
            <div className="timeline-card glass">
              <div className="timeline-header">
                <h3>{exp.role}</h3>
                <span className="timeline-company">{exp.company}</span>
                <span className="timeline-period">{exp.period}</span>
              </div>
              <ul className="timeline-highlights">
                {exp.highlights.map((h, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + j * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {h}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
