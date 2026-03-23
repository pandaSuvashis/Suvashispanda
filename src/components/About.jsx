import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { aboutText } from '../data/content';
import { FaCode, FaBrain, FaRocket } from 'react-icons/fa';
import profileImg from '../assets/portimage.jpg';
import './About.css';

const highlights = [
  { icon: FaBrain, title: 'AI / ML', desc: 'Deep Learning, GenAI, LLMs, Reinforcement Learning' },
  { icon: FaCode, title: 'Full Stack', desc: 'MERN stack, REST APIs, scalable architectures' },
  { icon: FaRocket, title: 'Problem Solver', desc: 'Real-world impact through intelligent systems' },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        The story behind the code
      </motion.p>

      <div className="about-grid">
        <div className="about-image-wrap">
          <motion.div
            className="about-image glass"
            initial={{ opacity: 0, scale: 0.7, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.03 }}
          >
            <img src={profileImg} alt="Suvashis Panda" className="about-avatar-img" />
          </motion.div>
        </div>

        <div className="about-text">
          {aboutText.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>

      <div className="about-highlights">
        {highlights.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            className="highlight-card glass"
            initial={{ opacity: 0, y: 60, rotateX: 15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8, boxShadow: 'var(--shadow-glow)' }}
          >
            <div className="highlight-icon">
              <Icon size={24} />
            </div>
            <h3>{title}</h3>
            <p>{desc}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
