import { Fragment } from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({ text, className = '', delay = 0 }) => {
  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  // Renders as a <span> so it stays valid inside heading elements. Words are
  // separated by real space characters rather than margins, so the element's
  // text content stays readable to screen readers and search engines.
  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
      style={{ display: 'inline-block' }}
    >
      {words.map((word, index) => (
        <Fragment key={index}>
          <motion.span
            variants={wordVariants}
            style={{
              display: 'inline-block',
              transformOrigin: 'bottom center'
            }}
          >
            {word}
          </motion.span>
          {index < words.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </motion.span>
  );
};

export default AnimatedText;