import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, useAnimationControls } from 'framer-motion';

import { defaultQuote, rem, updateQuote } from '../utils';
import { quoteMotion } from '../motion';

export const Quote = () => {
  const [data, setData] = useState(defaultQuote);
  const [initial, setInitial] = useState('hidden');
  const controls = useAnimationControls();

  const handleClick = () => {
    updateQuote(setData);
    controls.start('move');
  };

  useEffect(() => {
    controls.start('show');
    setInitial('show'); // using state to set the initial from hidden to show after 1st animation cause after click/tap/etc it goes back to hidden if its not set to show as default
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => { !data && updateQuote(setData); }, [data]);

  return data ? (
    <Container className='quote-container' {...quoteMotion.container}>
      <div>
        <h5 {...quoteMotion.quote}>“{data.content}”</h5>
        <h6 {...quoteMotion.author}>{data.author}</h6>
      </div>
      <motion.img src='/icons/icon-refresh.svg' alt='refresh' onClick={handleClick} animate={controls} {...quoteMotion.button(initial)} />
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
