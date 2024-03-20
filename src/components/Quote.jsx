import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, useAnimationControls } from 'framer-motion';

import { defaultQuote, rem, updateQuote } from '../utils';

export const Quote = () => {
  const [data, setData] = useState(defaultQuote);
  const controls = useAnimationControls();

  const handleClick = () => {
    updateQuote(setData);
    controls.start('move');
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => void controls.start('intro'), []);

  // useEffect(() => { !data && updateQuote(setData); }, [data]);

  return data ? (
    <Container className='quote-container'>
      <div>
        <h5>“{data.content}”</h5>
        <h6>{data.author}</h6>
      </div>
      <motion.img
        src='/icons/icon-refresh.svg'
        alt='refresh'
        onClick={handleClick}
        initial={{ scale: 0, opacity: 0 }}
        animate={controls}
        whileHover={{
          scale: 1.2,
          filter: 'invert(20%) sepia(243%) saturate(1576%) hue-rotate(-21deg) brightness(137%) contrast(73%)',
          rotate: [0, 0, 180, 360],
          transition: { rotate: { type: 'tween', delay: 5, duration: 1, repeat: Infinity, repeatDelay: 5 } },
        }}
        whileTap={{
          scale: 0.9,
          filter: 'invert(20%) sepia(243%) saturate(1576%) hue-rotate(-21deg) brightness(137%) contrast(73%)',
          rotate: [0, 0, 180, 360],
          transition: { type: 'tween', duration: 0.75 },
        }}
        variants={{
          intro: { scale: 1, opacity: 1, transition: { type: 'spring', bounce: 0.5 } },
          move: {
            rotate: [0, 0, 180, 360],
            transition: { type: 'spring' },
          },
        }}
      />
    </Container>
  ) : (
    <></>
  );
};

const Container = styled.div`
  /* width: 100%; */
  max-width: ${rem(540)};
  margin-top: ${rem(56)};
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  gap: ${rem(15.67)};

  /* Quote & Author Wrapper */
  div {
    display: flex;
    flex-direction: column;
    gap: ${rem(13)};
  }

  /* Quote */
  h5 {
    font-weight: normal;

    @media (max-width: ${rem(560)}) {
      font-size: ${rem(18)};
      line-height: 3ch;
    }
  }

  /* Author */
  h6 {
    letter-spacing: 0;
  }

  /* Refresh */
  img {
    width: 16.67px;
    height: 16.67px;
    margin-top: ${rem(10.67)};
    cursor: pointer;
  }
`;
