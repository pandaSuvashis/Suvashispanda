import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { projects } from '../data/content';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';
import './Projects.css';

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <SectionWrapper id="projects">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        Projects
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        Things I've built that I'm proud of
      </motion.p>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="project-card glass"
            initial={{ opacity: 0, y: 70, rotateY: -8 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.18, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{
              y: -10,
              rotateX: 3,
              rotateY: -3,
              boxShadow: 'var(--shadow-glow)',
            }}
            onClick={() => setSelected(project)}
          >
            <div className="project-emoji">{project.emoji}</div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((t) => (
                <span key={t} className="tech-badge">{t}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} className="project-link" onClick={(e) => e.stopPropagation()}>
                <FiGithub size={16} /> Code
              </a>
              <a href={project.live} className="project-link" onClick={(e) => e.stopPropagation()}>
                <FiExternalLink size={16} /> Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="project-modal glass"
              initial={{ scale: 0.7, opacity: 0, rotateX: 10 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.7, opacity: 0, rotateX: -10 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelected(null)}>
                <FiX size={20} />
              </button>
              <div className="modal-emoji">{selected.emoji}</div>
              <h3>{selected.title}</h3>
              <p className="modal-desc">{selected.description}</p>
              <p className="modal-details">{selected.details}</p>
              <div className="project-tech">
                {selected.tech.map((t) => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>
              <div className="modal-links">
                <a href={selected.github} className="btn-primary">
                  <FiGithub size={16} /> View Code
                </a>
                <a href={selected.live} className="btn-outline">
                  <FiExternalLink size={16} /> Live Demo
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
