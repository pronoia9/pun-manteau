import { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';

import { Quote, Time, Button, Overlay } from './components';
import { appMotion } from './motion';
import { GlobalStyles } from './styles';
import { getTheme, fetchTime, fetchIpBase, rem } from './utils';

export default function App() {
  const [time, setTime] = useState(null);
  const [ipbase, setIpBase] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const [, setIntervalId] = useState(null);

  useEffect(() => {
    // Fetch/set time
    fetchTime().then((res) => void setTime(res));
    // Fetch/set location info
    fetchIpBase().then((res) => void setIpBase(res));

    // Set interval for the updating of the time that was fetched
    const id = setInterval(() => {
      setTime((prev) => {
        const now = new Date(prev.datetime);
        now.setSeconds(now.getSeconds() + 1);
        return { ...prev, datetime: now.toISOString() };
      });
    }, 1000);
    setIntervalId(id); // Start the interval to update time data every second
    return () => void clearInterval(id); // Clean up the interval when the component unmounts
  }, []);

  return (
    <ThemeProvider theme={getTheme(time)}>
      <GlobalStyles />

      <Container className='app-container' {...appMotion.container}>
        {time && (
          <>
            <Flexbox className='app-flexbox' $showOverlay={showOverlay} layout {...appMotion.wrapper}>
              <Quote showOverlay={showOverlay} />

              <BottomPart className='app-bottom-part' $showOverlay={showOverlay} layout {...appMotion.wrapper}>
                <Time time={time} ipbase={ipbase} />
                <Button showOverlay={showOverlay} setShowOverlay={setShowOverlay} />
              </BottomPart>
            </Flexbox>

            <Overlay time={time} showOverlay={showOverlay} />
          </>
        )}
        <Background className='app-background' {...appMotion.background} />
      </Container>
    </ThemeProvider>
  );
}

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: end;
  background-color: var(--c-background);
`;

const Flexbox = styled(motion.div)`
  margin: ${rem(56)} ${rem(165)} ${({ $showOverlay }) => ($showOverlay ? rem(56) : rem(98))};
  /* margin: ${({ $showOverlay }) => ($showOverlay ? 'auto' : rem(56))} ${rem(165)}; */
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;

  @media (max-width: ${rem(1230)}) {
    margin: ${rem(80)} ${rem(64)} ${rem(64)};
    /* margin: ${({ $showOverlay }) => ($showOverlay ? 'auto' : rem(80))} ${rem(64)} ${({ $showOverlay }) => ($showOverlay ? 'auto' : rem(64))}; */
  }

  @media (max-width: ${rem(560)}) {
    margin: ${rem(31.67)} ${rem(26)} ${rem(40)};
    /* margin: ${({ $showOverlay }) => ($showOverlay ? 'auto' : rem(31.67))} ${rem(26)} ${({ $showOverlay }) => ($showOverlay ? 'auto' : rem(40))}; */
  }
`;

const BottomPart = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: space-between;
  
  @media (max-width: ${rem(1000)}) {
    flex-direction: column;
    align-items: start;
    justify-content: end;
    gap: ${rem(80)};
  }

  @media (max-width: ${rem(560)}) {
    gap: ${rem(48)};
  }
`;

const Background = styled(motion.div)`
  &,
  &:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  background-color: var(--c-secondary);
  background-image: var(--image);
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;

  &:after {
    content: '';
    background: rgba(0, 0, 0, 0.4);
  }
`;
