import { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

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
    time && ipBase ? (
      <ThemeProvider theme={getTheme(time)}>
        <GlobalStyles />

        <Flexbox>
          <Quote />
          <BottomPart $showOverlay={showOverlay}>
            <Time time={time} ipBase={ipBase} />
            <Button showOverlay={showOverlay} setShowOverlay={setShowOverlay} />
          </BottomPart>
        </Flexbox>
        
        {showOverlay && <Overlay time={time} ipBase={ipBase} />}

        <Background />

      </ThemeProvider>
    ) : <></>
  );
}

const Flexbox = styled.div`
  width: 100%;
  max-width: ${rem(1100)};
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BottomPart = styled.div`
  margin-bottom: ${({ $showOverlay }) => rem(!$showOverlay ? 98 : 56)};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
`;

const Background = styled.div`
  &, &:after {
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

  z-index: -1;
`;