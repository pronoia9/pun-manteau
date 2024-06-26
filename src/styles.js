import { createGlobalStyle } from 'styled-components';

import { rem } from './utils';

export const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain) */
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed,  figure, figcaption, footer, header, hgroup,  menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section { display: block; }
  body { line-height: 1; }
  ol, ul { list-style: none; }
  blockquote, q { quotes: none; }
  blockquote:before, blockquote:after,
  q:before, q:after { content: ''; content: none; }
  table { border-collapse: collapse; border-spacing: 0; }

  :root {
    --c-font: ${({ theme }) => theme.font.rgb};
    --c-background: ${({ theme }) => theme.background.rgb};
    --c-secondary: ${({ theme }) => theme.secondary.rgb};
    --font: Inter;
    --font-fallback: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --image: url(${({ theme }) => theme.image.desktop});
    @media (max-width: ${rem(768)}) { --image: url(${({ theme }) => theme.image.tablet}); }
    @media (max-width: ${rem(480)}) { --image: url(${({ theme }) => theme.image.mobile}); }
  }

  html, body, #root, #root > div {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  body {
    font-family: var(--font), var(--font-fallback);
    font-size: ${rem(18)};
    color: rgb(255, 255, 255);
    line-height: ${rem(28)};
  }

  h1 {
    font-weight: bold;
    font-size: ${rem(200)};
    line-height: ${rem(200)};
    letter-spacing: ${rem(-5)};
  }

  h2 {
    font-weight: bold;
    font-size: ${rem(56)};
    line-height: ${rem(68)};
  }

  h3 {
    font-weight: bold;
    font-size: ${rem(24)};
    line-height: ${rem(28)};
    letter-spacing: ${rem(4.8)};
    text-transform: uppercase;
  }

  h4 {
    font-weight: normal;
    font-size: ${rem(20)};
    line-height: ${rem(28)};
    letter-spacing: ${rem(4)};
  }

  h5 {
    font-weight: bold;
    font-size: ${rem(18)};
    line-height: ${rem(28)};
  }

  h6 {
    font-weight: bold;
    font-size: ${rem(15)};
    line-height: ${rem(28)};
    letter-spacing: ${rem(3)};
  }
`;
