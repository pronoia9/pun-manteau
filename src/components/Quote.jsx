import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, useAnimationControls } from 'framer-motion';

import { SplitText } from '../components';
import { quoteMotion } from '../motion';
import { defaultQuote, rem, updateQuote } from '../utils';

export const Quote = ({ showOverlay, height = window.innerHeight }) => {
  const [data, setData] = useState(defaultQuote);
  const [initialMotion, setInitialMotion] = useState('hidden');
  const [showAuthor, setShowAuthor] = useState(false);
  const controls = useAnimationControls();

  const handleClick = () => {
    setShowAuthor(false);
    updateQuote(setData);
    controls.start('move');
  };

  useEffect(() => {
    controls.start('show');
    setInitialMotion('show'); // using state to set the initial from hidden to show after 1st animation cause after click/tap/etc it goes back to hidden if its not set to show as default
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => { !data && updateQuote(setData); }, [data]);

  return (
    data && (!showOverlay || (showOverlay && height > 1280)) && (
      <Container className='quote-container' $showOverlay={showOverlay} $height={height} {...quoteMotion.container}>
        <div>
          <SplitText
            elementType='h5'
            text={`“${data.content}”`}
            speed={0.01}
            key={data.content}
            onAnimationComplete={() => void setShowAuthor(true)}
          />
          {showAuthor && <SplitText elementType='h6' text={data.author} speed={0.015} />}
        </div>
        <motion.img src='/icons/icon-refresh.svg' alt='refresh' onClick={handleClick} animate={controls} {...quoteMotion.button(initialMotion)} />
      </Container>
    )
  );
};

const Container = styled(motion.div)`
  /* Disable to remove space between quote and refresh button */
  width: 100%;
  justify-content: space-between;

  max-width: ${rem(540)};
  display: flex;
  flex-direction: row;
  gap: ${rem(15.67)};
  display: ${({ $showOverlay, $height }) => ($showOverlay && $height < 1280 ? 'none' : '')};

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
