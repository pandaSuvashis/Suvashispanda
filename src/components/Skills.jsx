import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { skillCategories } from '../data/content';
import './Skills.css';

function SkillCard({ skill, index }) {
  const { name, icon: Icon, color, label } = skill;

  return (
    <motion.div
      className="skill-card glass"
      initial={{ opacity: 0, y: 40, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{
        scale: 1.15,
        rotateX: 8,
        rotateY: -8,
        boxShadow: `0 0 30px ${color}33, 0 0 60px ${color}11`,
      }}
      style={{ '--skill-color': color }}
    >
      <div className="skill-icon-wrap">
        {Icon ? (
          <Icon size={32} />
        ) : (
          <span className="skill-label">{label}</span>
        )}
      </div>
      <span className="skill-name">{name}</span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        Skills & Tech
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        Technologies I work with daily
      </motion.p>

      {skillCategories.map((cat, ci) => (
        <motion.div
          key={cat.title}
          className="skill-category"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: ci * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="category-title">{cat.title}</h3>
          <div className="skills-grid">
            {cat.skills.map((s, i) => (
              <SkillCard key={s.name} skill={s} index={i} />
            ))}
          </div>
        </motion.div>
      ))}
    </SectionWrapper>
  );
}
