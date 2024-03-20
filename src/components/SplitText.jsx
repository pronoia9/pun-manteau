import { motion } from 'framer-motion';

import { textType } from '../motion';

export const SplitText = ({ text, elementType = 'span', speed, br = null, charProps, childrenProps = {}, children, ...props }) => {
  const Element = motion[elementType]; // Dynamically select the appropriate motion element

  return (
    <Element className='split-text' {...textType.text(speed)} {...props}>
      {text &&
        `${text}`.split('').map((c, index) => (
          <motion.span key={`split-text-${children}-${index}-${c}`} {...textType.char} {...charProps}>
            {c}
          </motion.span>
        ))}

      {br && <br />}

      {typeof children === 'string' ? (
        `${children}`.split('').map((c, index) => (
          <motion.span key={`split-text-${children}-${index}-${c}`} {...textType.char} {...childrenProps}>
            {c}
          </motion.span>
        ))
      ) : (
        <>{children}</>
      )}
    </Element>
  );
};
