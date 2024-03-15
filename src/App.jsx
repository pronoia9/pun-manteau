import { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Quote, Time, Button, Overlay } from './components';
import { GlobalStyles } from './styles';
import { getTheme, fetchTime, fetchIpBase, rem, defaultIpBase } from './utils';

function App() {
  const [time, setTime] = useState(null);
  const [ipBase, setIpBase] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const [, setIntervalId] = useState(null);

  useEffect(() => {
    // Fetch/set time
    fetchTime().then((res) => void setTime(res)); // (async () => { const data = await fetchTime(); setTime(data); })();

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
    <ThemeProvider theme={getTheme('dark')}>
      <GlobalStyles />
      {time && ipBase && (
        <Container>
          <Quote />
          <BottomContainer $showOverlay={showOverlay}>
            <Time time={time} ipBase={ipBase} />
            <Button showOverlay={showOverlay} setShowOverlay={setShowOverlay} />
          </BottomContainer>
          {showOverlay && <Overlay time={time} />}
        </Container>
      )}
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  max-width: ${rem(1100)};
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BottomContainer = styled.div`
  margin-bottom: ${({ $showOverlay }) => rem(!$showOverlay ? 98 : 56)};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
`;
