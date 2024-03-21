import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { m, useAnimationControls } from 'framer-motion';

import { defaultQuote, rem, updateQuote } from '../utils';
import { quoteMotion } from '../motion';
import { SplitText } from './SplitText';

export const Quote = ({ showOverlay }) => {
  const [data, setData] = useState(defaultQuote);
  const [initial, setInitial] = useState('hidden');
  const [showAuthor, setShowAuthor] = useState(false);
  const controls = useAnimationControls();

  const handleClick = () => {
    setShowAuthor(false);
    updateQuote(setData);
    controls.start('move');
  };

  useEffect(() => {
    controls.start('show');
    setInitial('show'); // using state to set the initial from hidden to show after 1st animation cause after click/tap/etc it goes back to hidden if its not set to show as default
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => { !data && updateQuote(setData); }, [data]);

  return (
    (data && !showOverlay) && (
      <Container className='quote-container' layout {...quoteMotion.container}>
        <div>
          <SplitText
            elementType='h5'
            text={`“${data.content}”`}
            speed={0.015}
            key={data.content}
            onAnimationComplete={() => void setShowAuthor(true)}
          />
          {showAuthor && <SplitText elementType='h6' text={data.author} speed={0.02} />}
        </div>
        <m.img src='/icons/icon-refresh.svg' alt='refresh' onClick={handleClick} animate={controls} {...quoteMotion.button(initial)} />
      </Container>
    )
  );
};

const Container = styled(m.div)`
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
