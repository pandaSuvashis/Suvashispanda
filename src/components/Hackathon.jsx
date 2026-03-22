import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { FaTrophy } from 'react-icons/fa';
import './Hackathon.css';
import hackathonImg from '../assets/hackathon.jpg';


/* 
  Drop your hackathon photo at: src/assets/hackathon.jpg
  Then uncomment the import below and replace the placeholder.
*/
// import hackathonImg from '../assets/hackathon.jpg';

export default function Hackathon() {
  return (
    <SectionWrapper id="hackathon" className="hackathon-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        Hackathon Win
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        The moment that defined everything
      </motion.p>

      <motion.div
        className="hackathon-banner glass"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="hackathon-glow" />

        <div className="hackathon-layout">
          {/* Left — info */}
          <div className="hackathon-content">
            <motion.div
              className="trophy-wrap"
              animate={{ rotateY: [0, 10, -10, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <FaTrophy className="trophy-icon" />
            </motion.div>

            <div className="hackathon-badge">🥇 1ST PLACE</div>

            <h2 className="hackathon-title">
              BBG National Hackathon <span className="hackathon-ver">1.0</span>
            </h2>
            <p className="hackathon-year">2025</p>

            <p className="hackathon-desc">
              Competed against <strong>500+ teams</strong> nationwide and secured the top position by
              delivering an innovative AI-powered solution under intense time pressure.
            </p>

            <div className="hackathon-stats">
              <div className="stat-item">
                <span className="stat-value">200+</span>
                <span className="stat-label">Teams</span>
              </div>
              <div className="stat-divider" />


              <div className="stat-item">
                <span className="stat-value">#1</span>
                <span className="stat-label">Rank</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-value">National</span>
                <span className="stat-label">Level</span>
              </div>
            </div>
          </div>

          {/* Right — image */}
          <motion.div
            className="hackathon-image-wrap"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >

            <img src={hackathonImg} alt="BBG Hackathon 1.0" className="hackathon-img" />

          </motion.div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
