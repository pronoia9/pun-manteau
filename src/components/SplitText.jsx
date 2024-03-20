import { motion } from 'framer-motion';

import { textType } from '../motion';

export const SplitText = ({ text, elementType = 'span', speed, br = null, childrenProps = {}, children, ...props }) => {
  const Element = motion[elementType]; // Dynamically select the appropriate motion element

  return (
    <Element className='split-text' {...textType.text(speed)} {...props}>
      {(text || typeof children === 'string') &&
        `${text || children}`.split('').map((c, index) => (
          <motion.span key={`split-text-${children}-${index}-${c}`} {...textType.char} {...childrenProps}>
            {c}
          </motion.span>
        ))}

      {br && <br />}

      {children}
    </Element>
  );
};
