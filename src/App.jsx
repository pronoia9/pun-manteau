import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Quote, Time, Button, Overlay } from './components';
import { GlobalStyles } from './styles';
import { getTheme, rem } from './utils';

function App() {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <ThemeProvider theme={getTheme('dark')}>
      <GlobalStyles />
      <Container>
        <Quote />
        <BottomContainer>
          <Time />
          <Button showOverlay={showOverlay} setShowOverlay={setShowOverlay} />
        </BottomContainer>
        {showOverlay && <Overlay />}
      </Container>
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
  
  div {
    width: 100%;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
