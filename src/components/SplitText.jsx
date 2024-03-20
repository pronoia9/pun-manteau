import { motion } from 'framer-motion';

import { textType } from '../motion';

export const SplitText = ({ speed, text = {}, char = {}, children }) => {
  return children ? (
    <motion.span className='split-text' {...textType.text(speed)} {...text}>
      {`${children}`.split('').map((c, index) => (
        <motion.span key={`split-text-${children}-${index}-${c}`} {...textType.char} {...char}>
          {c}
        </motion.span>
      ))}
    </motion.span>
  ) : (
    <></>
  );
};
