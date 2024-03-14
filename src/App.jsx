import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './styles';
import { getTheme } from './utils';

function App() {
  return (
    <ThemeProvider theme={getTheme('dark')}>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
