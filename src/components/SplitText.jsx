import { motion } from 'framer-motion';

import { textType } from '../motion';

export const SplitText = ({ text, elementType = 'span', speed, textOptions = {}, charOptions = {}, children, childrenProps, ...props }) => {
  const Element = motion[elementType]; // Dynamically select the appropriate motion element

  return text || children ? (
    <Element className='split-text' {...textType.text(speed)} {...textOptions} {...props}>
      {text &&
        `${text}`.split('').map((c, index) => (
          <motion.span key={`split-text-${children}-${index}-${c}`} {...textType.char} {...charOptions}>
            {c}
          </motion.span>
        ))}

      {children && typeof children === 'string' ? (
        `${children}`.split('').map((c, index) => (
          <motion.span key={`split-text-${children}-${index}-${c}`} {...textType.char} {...charOptions} {...childrenProps}>
            {c}
          </motion.span>
        ))
      ) : (
        <>{children}</>
      )}
    </Element>
  ) : (
    <></>
  );
};
