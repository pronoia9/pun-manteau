import { motion } from 'framer-motion';

import { splitTextMotion } from '../motion';

export const SplitText = ({ text, elementType = 'span', speed = 0.05, br = null, charProps, childrenProps, children, ...props }) => {
  const Element = motion[elementType]; // Dynamically select the appropriate motion element

  return (
    <Element className='split-text' {...splitTextMotion.text(speed)} {...props}>
      {text &&
        `${text}`.split('').map((c, index) => (
          <motion.span key={`split-text-${children}-${index}-${c}`} {...splitTextMotion.char} {...charProps}>
            {c}
          </motion.span>
        ))}

      {br && <br />}

      {typeof children === 'string' ? <SplitText text={children} {...childrenProps} /> : <>{children}</>}
    </Element>
  );
};
