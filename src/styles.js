import { createGlobalStyle } from 'styled-components';

import { rem } from './utils';

export const themes = {
  light: {
    font:       { hex: '#000000', rgb: 'rgb(0,0,0)',         hsl: 'hsl(0, 0%, 0%)' },
    background: { hex: '#FFFFFF', rgb: 'rgb(255, 255, 255)', hsl: 'hsl(0, 0%, 100%)' },
    secondary:  { hex: '#303030', rgb: 'rgb(48, 48, 48)',    hsl: 'hsl(0, 0%, 19%)' },
    image: {
      desktop:  '/images/bg-desktop-image-daytime.jpg',
      tablet:   '/images/bg-tablet-image-daytime.jpg',
      mobile:   '/images/bg-mobile-image-daytime.jpg'
    }
  },
  dark: {
    font:       { hex: '#FFFFFF', rgb: 'rgb(255, 255, 255)', hsl: 'hsl(0, 0%, 100%)' },
    background: { hex: '#000000', rgb: 'rgb(0,0,0)',         hsl: 'hsl(0, 0%, 0%)' },
    secondary:  { hex: '#303030', rgb: 'rgb(48, 48, 48)',    hsl: 'hsl(0, 0%, 19%)' },
    image: {
      desktop:  '/images/bg-desktop-image-nighttime.jpg',
      tablet:   '/images/bg-tablet-image-nighttime.jpg',
      mobile:   '/images/bg-mobile-image-nighttime.jpg'
    }
  },
};

export const GlobalStyles = createGlobalStyle`
  ${'' /* @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap'); */}
  @font-face {
    font-family: Inter;
    font-style: normal;
    font-weight: 100 900;
    font-display: swap;
    src: url('/font/Inter-VariableFont_slnt,wght.ttf') format('truetype');
  }

  :root {
    --c-font: ${({ theme }) => theme.font.rgb};
    --c-background: ${({ theme }) => theme.background.rgb};
    --c-secondary: ${({ theme }) => theme.secondary.rgb};
    --font: Inter;
    --font-fallback: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --image: url(${({ theme }) => theme.image.desktop});

    @media (max-width: 768px) {
      --image: url(${({ theme }) => theme.image.tablet});
    }

    @media (max-width: 480px) {
      --image: url(${({ theme }) => theme.image.mobile});
    }
  }

  ${
    '' /* *::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
  } */
  }

  html {
  }

  body {
    &, &:after {
      width: 100%;
      min-width: 100vw;
      height: 100%;
      min-height: 100vh;
      position: relative;
      margin: 0;
      overflow: hidden;
    }

    ${'' /* Body; Inter Regular; 18px; 28px line */}
    font-family: var(--font) var(--font-fallback);
    font-size: ${rem(18)};
    color: rgb(255, 255, 255);
    line-height: ${rem(28)};

    background-color: var(--c-secondary);
    background-image: var(--image);
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    
    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
      background: rgba(0, 0, 0, 0.4);
    }
  }

  /* H1; Inter Bold; 200px; 200px Line; -5 Spacing */
  h1 {
    font-weight: bold;
    font-size: ${rem(200)};
    line-height: ${rem(200)};
    letter-spacing: ${rem(-5)};
  }

  /* H2; Inter Bold; 56px; 68px Line */
  h2 {
    font-weight: bold;
    font-size: ${rem(56)};
    line-height: ${rem(68)};
  }

  /* H3; Inter Bold; 24px; 28px Line; -4,8 Spacing; All Caps */
  h3 {
    font-weight: bold;
    font-size: ${rem(24)};
    line-height: ${rem(28)};
    letter-spacing: ${rem(-4.8)};
    text-transform: uppercase;
  }

  /* H4; Inter Regular; 20px; 28px Line; +4 Spacing */
  h4 {
    font-weight: normal;
    font-size: ${rem(20)};
    line-height: ${rem(28)};
    letter-spacing: ${rem(4)};
  }

  /* H5; Inter Bold; 18px; 28px Line */
  h5 {
    font-weight: bold;
    font-size: ${rem(18)};
    line-height: ${rem(28)};
  }

  /* H6; Inter Bold; 15px; 28px Line; +3 Spacing */
  h6 {
    font-weight: bold;
    font-size: ${rem(15)};
    line-height: ${rem(28)};
    letter-spacing: ${rem(3)};
  }

  button {
  }
`;
