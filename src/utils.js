// GENETAL UTILS
export const lowerCase = (t) => `${t}`.toLowerCase();

export const rem = (val) => `${parseInt(val) / 16}rem`;

// THEME RELATED
export const themes = {
  light: {
    font: { hex: '#000000', rgb: 'rgb(0,0,0)', hsl: 'hsl(0, 0%, 0%)' },
    background: { hex: '#FFFFFF', rgb: 'rgb(255, 255, 255)', hsl: 'hsl(0, 0%, 100%)' },
    image: {
      desktop: '/images/bg-desktop-image-daytime.jpg',
      tablet: '/images/bg-tablet-image-daytime.jpg',
      mobile: '/images/bg-mobile-image-daytime.jpg',
    },
  },
  dark: {
    font: { hex: '#FFFFFF', rgb: 'rgb(255, 255, 255)', hsl: 'hsl(0, 0%, 100%)' },
    background: { hex: '#000000', rgb: 'rgb(0,0,0)', hsl: 'hsl(0, 0%, 0%)' },
    image: {
      desktop: '/images/bg-desktop-image-nighttime.jpg',
      tablet: '/images/bg-tablet-image-nighttime.jpg',
      mobile: '/images/bg-mobile-image-nighttime.jpg',
    },
  },
};

export const getSystemTheme = () => (window?.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

export const getTheme = (theme) => (theme === 'light' ? themes.light : themes.dark);

export const isDarkTheme = (theme) => theme === 'dark';

export const systemThemeChangeHandler = (e, setTheme) => { setTheme(e.matches ? 'dark' : 'light'); };
