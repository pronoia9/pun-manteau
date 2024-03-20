//--- QUOTE
export const quoteMotion = {};

//--- TIME
export const timeMotion = {};

//--- BUTTON
export const buttonMotion = {};

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
