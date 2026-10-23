import { motion } from 'framer-motion';
import { personalInfo } from '../data/content';
import { FaArrowRight } from 'react-icons/fa';
import heroImg from '../assets/portimage.jpg';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg" />

      {/* Content */}
      <div className="hero-inner">
        <div className="hero-content">
          <motion.p
            className="hero-greeting"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Deno
          </motion.p>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I'm <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          {/* Role */}
          <motion.div
            className="role-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <span className="role-text">{personalInfo.roles[0]}</span>
          </motion.div>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <a href="#projects" className="btn-primary">
              View Projects <FaArrowRight size={14} />
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.8, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        >
          <img src={heroImg} alt={personalInfo.name} className="hero-image" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div
        className="scroll-indicator"
      >
        <div className="scroll-mouse">
          <div className="scroll-dot" />
        </div>
      </div>
    </section>
  );
}
