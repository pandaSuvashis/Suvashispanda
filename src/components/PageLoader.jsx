import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './PageLoader.css';

export default function PageLoader({ onComplete }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 350);
    }, 1450);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <div className="loader-content" aria-label="Loading Suvashis Panda portfolio">
            <div className="web-pull" aria-hidden="true">
              <i className="web-strand strand-one" />
              <i className="web-strand strand-two" />
              <i className="web-strand strand-three" />
              <i className="web-strand strand-four" />
              <i className="web-knot" />
            </div>
            <div className="loader-mark" aria-hidden="true">SP</div>
            <p className="loader-caption">Loading portfolio</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
