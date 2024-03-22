/***********************************  UTILS START  ***********************************/
const props = { initial: 'hidden', animate: 'show', exit: 'out', whileHover: 'hover', whileTap: 'tap' };

const directionX = (direction, amount) => (direction === 'left' ? -amount : direction === 'right' ? amount : 0);

const directionY = (direction, amount) => (direction === 'up' ? amount : direction === 'down' ? -amount : 0);

const directions = (direction, amount) => ({ x: directionX(direction, amount), y: directionY(direction, amount) });

export const staggerContainer = (staggerChildren = 0.25, delayChildren = 0, transition = {}) => ({
  [props.initial]: { opacity: 0 },
  [props.animate]: { opacity: 1, transition: { staggerChildren, delayChildren, ...transition } },
});

export const zoomIn = (transition = {}) => ({
  [props.initial]: { scale: 0, opacity: 0 },
  [props.animate]: { scale: 1, opacity: 1, transition: { type: 'spring', ...transition } },
});

export const fadeIn = (direction, amount = '100px', initial = {}, animate = {}, transition = {}) => ({
  [props.initial]: { opacity: 0, ...(direction ? directions(direction, amount) : {}), ...initial },
  [props.animate]: { opacity: 1, ...(direction ? { x: 0, y: 0 } : {}), ...animate, transition: { type: 'spring', ...transition } },
});

export const slideIn = (direction, amount = '100%', initial = {}, animate = {}, transition = {}) => ({
  [props.initial]: { ...(direction ? directions(direction, amount) : {}), ...initial },
  [props.animate]: { ...(direction ? { x: 0, y: 0 } : {}), ...animate, transition: { type: 'spring', ...transition } },
});

export const splitTextMotion = {
  text: (speed = 0.05) => ({ variants: staggerContainer(speed) }),
  char: { variants: fadeIn('down', 50) },
};
/************************************  UTILS END  ************************************/
//
//
//
/************************************  APP START  ************************************/
export const appMotion = {
  container: { initial: 'hidden', animate: 'show', exit: 'out', variants: staggerContainer(0.25) },
  wrapper: { variants: staggerContainer(0.25) },
  background: { variants: fadeIn() },
};

//--- QUOTE
export const quoteMotion = {
  container: { variants: fadeIn(null, null, {}, {}, { staggerChildren: 5, delayChildren: 1 }) },
  button: (initial = 'hidden') => {
    const filter = 'invert(20%) sepia(243%) saturate(1576%) hue-rotate(-21deg) brightness(137%) contrast(73%)';
    return {
      initial,
      variants: {
        ...zoomIn({ type: 'spring', bounce: 0.5, delay: 4 }),
        [props.whileHover]: {
          scale: [1.1, 1, 1.1],
          filter,
          rotate: [0, 0, 180, 360],
          transition: {
            rotate: { type: 'tween', delay: 5, duration: 1, repeat: Infinity, repeatDelay: 5 },
            scale: { repeat: Infinity },
          },
        },
        [props.whileTap]: { scale: 0.9, filter, rotate: [0, 0, 180, 360], transition: { type: 'tween', duration: 0.75 } },
        move: { rotate: [0, 0, 180, 360], transition: { type: 'spring' } },
      },
    };
  },
};
/*************************************  APP END  *************************************/
//
//
//
/***********************************  TIME START  ************************************/
export const timeMotion = {
  container: {
    variants: {
      [props.animate]: { transition: { staggerChildren: 0.5 } },
      transition: { staggerChildren: 0.5 },
    },
  },
  icon: { variants: zoomIn() },
  zone: { variants: fadeIn() },
};
/************************************  TIME END  *************************************/
//
//
//
/**********************************  BUTTON START  ***********************************/
export const buttonMotion = {
  container: { variants: zoomIn({ delay: 2.75, staggerChildren: 0.33, delayChildren: 2.75 + 0.33 }) },
  image: { variants: fadeIn() },
};
/***********************************  BUTTON END  ************************************/
//
//
//
/**********************************  OVERLAY START  **********************************/
export const overlayMotion = {
  container: {
    variants: {
      [props.initial]: { opacity: 0, y: 200 },
      [props.animate]: { opacity: 0.75, y: 0, transition: { type: 'tween', duration: 0.75, staggerChildren: 1.25 } },
      [props.exit]: { opacity: 0, y: 200, transition: { type: 'tween', duration: 0.25 } },
    },
  },
  hr: { variants: { ...fadeIn(), [props.animate]: { opacity: 0.2 } } },
  group: { variants: staggerContainer(1) },
  item: { variants: staggerContainer(0.75) },
};
/***********************************  OVERLAY END  ***********************************/
