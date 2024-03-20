import { motion } from 'framer-motion';

import { textType } from '../motion';

export const SplitText = ({ text, speed, textOptions = {}, charOptions = {}, children }) => {
  return text || children ? (
    <motion.span className='split-text' {...textType.text(speed)} {...textOptions}>
      {`${text ? text : children}`.split('').map((c, index) => (
        <motion.span key={`split-text-${children}-${index}-${c}`} {...textType.char} {...charOptions}>
          {c}
        </motion.span>
      ))}
    </motion.span>
  ) : (
    <></>
  );
};
