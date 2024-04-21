import styled from 'styled-components';
import { motion, animate } from 'framer-motion';

import { SplitText } from '../components';
import { buttonMotion } from '../motion';
import { rem } from '../utils';
import { useRef } from 'react';

export const Button = ({ showOverlay, setShowOverlay }) => {
  const imgRef = useRef();

  const hovering = () => void animate(imgRef.current, { opacity: 0.5, scale: [1, 0.95, 1] }, { scale: { repeat: Infinity, duration: 1 } });

  const whileHolding = () => void animate(imgRef.current, { opacity: 0.5, scale: 1.1 }, {});

  const reset = () => void animate(imgRef.current, { opacity: 1, scale: 1 }, {});

  return (
    <Container
      className='button-container'
      onClick={() => void setShowOverlay((prev) => !prev)}
      onMouseEnter={hovering}
      onMouseLeave={reset}
      onMouseDown={whileHolding}
      onMouseUp={reset}
      $showOverlay={showOverlay}
      layout
      {...buttonMotion.container}
    >
      <SplitText elementType='h5' text={!showOverlay ? 'MORE' : 'LESS'} />
      <motion.img ref={imgRef} src='/icons/icon-arrow-up.svg' alt='arrow' {...buttonMotion.image} />
    </Container>
  );
};

const Container = styled(motion.button)`
  padding: ${rem(8)} ${rem(9)} ${rem(8)} ${rem(9 + 13)};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: ${rem(13)};
  align-items: center;

  background: rgb(255, 255, 255);
  border-radius: ${rem(28)};
  border: none;

  cursor: pointer;

  h5 {
    color: #000;
    font-size: 1rem;
    letter-spacing: ${rem(5)};
    opacity: 0.5 !important;
  }

  img {
    width: ${rem(40)};
    height: ${rem(40)};
    border-radius: 50%;
  }
`;
