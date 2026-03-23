import { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/content';
import { FaArrowRight } from 'react-icons/fa';
import {
  SiPython, SiReact, SiTensorflow, SiNodedotjs, SiPytorch, SiJavascript
} from 'react-icons/si';
import heroImg from '../assets/profile.jpg';
import './Hero.css';

const floatingIcons = [SiPython, SiReact, SiTensorflow, SiNodedotjs, SiPytorch, SiJavascript];

export default function Hero() {
  const roles = personalInfo.roles;
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setRoleIdx((i) => (i + 1) % roles.length), 2500);
    return () => clearInterval(interval);
  }, [roles.length]);

  /* Particles */
  const particles = useMemo(
    () =>
      Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        dur: Math.random() * 15 + 10,
        delay: Math.random() * 5,
      })),
    []
  );

  return (
    <section id="hero" className="hero">
      {/* Gradient BG */}
      <div className="hero-bg" />

      {/* Particles */}
      <div className="particles">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="particle"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: p.dur,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Floating icons */}
      <div className="floating-icons">
        {floatingIcons.map((Icon, i) => (
          <motion.div
            key={i}
            className="floating-icon"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 6 + i * 0.8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
            style={{
              left: `${12 + i * 14}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
          >
            <Icon size={28} />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="hero-inner">
        <div className="hero-content">
          <motion.p
            className="hero-greeting"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Deno 👾
          </motion.p>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I'm <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {personalInfo.heroTagline}
          </motion.p>

          {/* Role cycling */}
          <motion.div
            className="role-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIdx}
                className="role-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {roles[roleIdx]}
              </motion.span>
            </AnimatePresence>
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
          <div className="hero-image-glow" />
          <img src={heroImg} alt={personalInfo.name} className="hero-image" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="scroll-mouse">
          <div className="scroll-dot" />
        </div>
      </motion.div>
    </section>
  );
}
