//--- QUOTE
export const quoteMotion = {
  container: { variants: {} },

  quote: { variants: {} },

  author: { variants: {} },

  button: (initial = 'hidden') => ({
    initial,
    whileHover: 'hover',
    whileTap: 'tap',
    variants: {
      hidden: { scale: 0, opacity: 0 },
      show: { scale: 1, opacity: 1, transition: { type: 'spring', bounce: 0.5 } },
      hover: {
        scale: 1.2,
        filter: 'invert(20%) sepia(243%) saturate(1576%) hue-rotate(-21deg) brightness(137%) contrast(73%)',
        rotate: [0, 0, 180, 360],
        transition: { rotate: { type: 'tween', delay: 5, duration: 1, repeat: Infinity, repeatDelay: 5 } },
      },
      tap: {
        scale: 0.9,
        filter: 'invert(20%) sepia(243%) saturate(1576%) hue-rotate(-21deg) brightness(137%) contrast(73%)',
        rotate: [0, 0, 180, 360],
        transition: { type: 'tween', duration: 0.75 },
      },
      move: {
        rotate: [0, 0, 180, 360],
        transition: { type: 'spring' },
      },
    },
  }),
};

//--- TIME
export const timeMotion = {
  container: {},

  icon: {},

  text: {},

  time: {},

  blink: {},
  
  zone: {},

  location: {}
};

//--- BUTTON
export const buttonMotion = {
  container: { variants: {} },

  text: { variants: {} },

  image: { variants: {} },
};

//--- OVERLAY
export const overlayMotion = {
  container: {
    variants: {
      initial: { opacity: 0, y: 200 },
      animate: { opacity: 1, y: 0, transition: { type: 'tween', duration: 1 } },
      exit: { opacity: 0, y: 200, transition: { type: 'tween', duration: 1 } },
    },
  },

  group: { variants: {} },

  item: { variants: {} },

  title: { variants: {} },

  subtitle: { variants: {} },
};
