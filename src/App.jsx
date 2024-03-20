import { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { AnimatePresence, m } from 'framer-motion';

import { Quote, Time, Button, Overlay } from './components';
import { GlobalStyles } from './styles';
import { getTheme, fetchTime, fetchIpBase, defaultTime, defaultIpBase, rem } from './utils';

export default function App() {
  const [time, setTime] = useState(null);
  const [ipBase, setIpBase] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const [, setIntervalId] = useState(null);

  useEffect(() => {
    // Fetch/set time
    fetchTime().then((res) => void setTime(res || defaultTime));
    // Fetch/set location info
    fetchIpBase().then((res) => void setIpBase(res || defaultIpBase));

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

      <AnimatePresence>
        <Container className='app-container' layout>
          {time && ipBase && (
            <>
              <Flexbox className='app-flexbox' $showOverlay={showOverlay}>
                {!showOverlay && <Quote />}
                <BottomPart className='app-bottom-part' $showOverlay={showOverlay}>
                  <Time time={time} ipBase={ipBase} />
                  <Button showOverlay={showOverlay} setShowOverlay={setShowOverlay} />
                </BottomPart>
              </Flexbox>

              {showOverlay && <Overlay time={time} ipBase={ipBase} />}
            </>
          )}
          <Background className='app-background' />
        </Container>
      </AnimatePresence>
    </ThemeProvider>
  );
}

const Container = styled(m.div)`
  display: flex;
  flex-direction: column;
`;

const Flexbox = styled.div`
  margin: 0 ${rem(165)};
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: ${({ $showOverlay }) => (!$showOverlay ? 'space-between' : 'end')};

  @media (max-width: ${rem(1230)}) {
    margin: 0 ${rem(64)};
  }

  @media (max-width: ${rem(768)}) {
    margin: 0 ${rem(64)};
  }

  @media (max-width: ${rem(560)}) {
    margin: 0 ${rem(26)};
  }
`;

const BottomPart = styled.div`
  margin-bottom: ${({ $showOverlay }) => rem(!$showOverlay ? 98 : 56)};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;

  @media (max-width: ${rem(1000)}) {
    margin-bottom: ${rem(64)};
    flex-direction: column;
    align-items: start;
    gap: ${rem(80)};
  }

  @media (max-width: ${rem(560)}) {
    margin-bottom: ${rem(40)};
    gap: ${rem(48)};
  }
`;

const Background = styled(m.div)`
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

  z-index: -3;
`;
