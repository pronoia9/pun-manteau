import { createGlobalStyle } from 'styled-components';

export const themes = {
  light: {
    font:       { hex: '#000000', rgb: 'rgb(0,0,0)',         hsl: 'hsl(0, 0%, 0%)' },
    background: { hex: '#FFFFFF', rgb: 'rgb(255, 255, 255)', hsl: 'hsl(0, 0%, 100%)' },
    secondary:  { hex: '#303030', rgb: 'rgb(48, 48, 48)',    hsl: 'hsl(0, 0%, 19%)' },
  },
  dark: {
    font:       { hex: '#FFFFFF', rgb: 'rgb(255, 255, 255)', hsl: 'hsl(0, 0%, 100%)' },
    background: { hex: '#000000', rgb: 'rgb(0,0,0)',         hsl: 'hsl(0, 0%, 0%)' },
    secondary:  { hex: '#303030', rgb: 'rgb(48, 48, 48)',    hsl: 'hsl(0, 0%, 19%)' },
  },
};

export const GlobalStyles = createGlobalStyle`
${'' /* @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap'); */}
@font-face {
  font-family: Inter;
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
  src: url('./assets/font/Inter-VariableFont_slnt,wght.ttf') format('truetype');
}

:root {
  --c-font: ${({ theme }) => theme.font.rgb};
  --c-background: ${({ theme }) => theme.background.rgb};
  --c-secondary: ${({ theme }) => theme.secondary.rgb};
  --font: Inter;
  --font-fallback: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

*::-webkit-scrollbar {
  display: none;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

${'' /* Body; Inter Regular; 18px; 28px line */}

${'' /* H1; Inter Bold; 200px; 200px Line; -5 Spacing */}

${'' /* H2; Inter Bold; 56px; 68px Line */}

${'' /* H3; Inter Bold; 24px; 28px Line; -4,8 Spacing; All Caps */}

${'' /* H4; Inter Regular; 20px; 28px Line; +4 Spacing */}

${'' /* H5; Inter Bold; 18px; 28px Line */}

${'' /* H6; Inter Bold; 15px; 28px Line; +3 Spacing */}
`;
