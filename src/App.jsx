import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Quote, Time, Button, Overlay } from './components';
import { GlobalStyles } from './styles';
import { getTheme } from './utils';

function App() {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <ThemeProvider theme={getTheme('dark')}>
      <GlobalStyles />
      <Container>
        <Quote />
        <Time />
        <Button setShowOverlay={setShowOverlay} />
        {showOverlay && <Overlay />}
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div``;
