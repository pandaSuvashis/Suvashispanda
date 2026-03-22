import { motion } from 'framer-motion';
import { socialLinks, personalInfo } from '../data/content';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <motion.div
          className="footer-logo"
          whileHover={{ scale: 1.05 }}
        >
          SP<span className="footer-dot">.</span>
        </motion.div>

        <div className="footer-socials">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
              whileHover={{ y: -3, color: 'var(--accent)' }}
              aria-label={label}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} {personalInfo.name}. Crafted with passion.
        </p>
      </div>
    </footer>
  );
}
