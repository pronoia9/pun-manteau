//--- APP
export const appMotion = {
  container: {
    initial: 'hidden',
    animate: 'show',
    variants: staggerContainer(0.25),
  },
  wrapper: { variants: staggerContainer(0.25) },
  background: { variants: fadeIn() },
};

//--- QUOTE
export const quoteMotion = {
  container: {
    initial: 'hidden',
    animate: 'show',
    exit: 'out',
    variants: {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { staggerChildren: 5, delayChildren: 1 } },
    },
  },
  button: (initial = 'hidden') => {
    const filter = 'invert(20%) sepia(243%) saturate(1576%) hue-rotate(-21deg) brightness(137%) contrast(73%)';
    return {
      initial,
      whileHover: 'hover',
      whileTap: 'tap',
      variants: {
        hidden: { scale: 0, opacity: 0 },
        show: { scale: 1, opacity: 1, transition: { type: 'spring', bounce: 0.5 } },
        hover: {
          scale: [1.1, 1, 1.1],
          filter,
          rotate: [0, 0, 180, 360],
          transition: {
            rotate: { type: 'tween', delay: 5, duration: 1, repeat: Infinity, repeatDelay: 5 },
            scale: { repeat: Infinity },
          },
        },
        tap: { scale: 0.9, filter, rotate: [0, 0, 180, 360], transition: { type: 'tween', duration: 0.75 } },
        move: { rotate: [0, 0, 180, 360], transition: { type: 'spring' } },
      },
    };
  },
};

//--- TIME
export const timeMotion = {
  container: {
    initial: 'hidden',
    animate: 'show',
    variants: {
      show: { transition: { staggerChildren: 0.5 } },
      transition: { staggerChildren: 0.5 },
    },
  },
  icon: { variants: zoomIn() },
  zone: { variants: fadeIn() },
};

//--- BUTTON
export const buttonMotion = {
  container: {},
  text: {},
  image: {},
};

//--- OVERLAY
export const overlayMotion = {
  container: {
    initial: 'hidden',
    animate: 'show',
    exit: 'out',
    variants: {
      hidden: { opacity: 0, y: 200 },
      show: { opacity: 0.75, y: 0, transition: { type: 'tween', duration: 0.75, staggerChildren: 2 } },
      out: { opacity: 0, y: 200, transition: { type: 'tween', duration: 0.25 } },
    },
  },
  group: { variants: staggerContainer(1) },
  item: { variants: staggerContainer(0.75) },
};

//--- UTILS
export const textType = {
  text: (speed = 0.05) => ({ variants: { ...staggerContainer(speed) } }),
  char: { variants: { ...textVariant() } },
};

export function textVariant(transition = {}) {
  return {
    hidden: { y: -50, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: 'spring', ...transition } },
  };
}

export function zoomIn(transition = {}) {
  return {
    hidden: { scale: 0, opacity: 0 },
    show: { scale: 1, opacity: 1, transition: { type: 'spring', ...transition } },
  };
}

export function fadeIn(direction, amount = '100px', transition = {}) {
  return {
    hidden: {
      x: direction === 'left' ? `-${amount}` : direction === 'right' ? `${amount}` : 0,
      y: direction === 'up' ? `${amount}` : direction === 'down' ? `-${amount}` : 0,
      opacity: 0,
    },
    show: { x: 0, y: 0, opacity: 1, transition: { type: 'spring', ...transition } },
  };
}

export function slideIn(direction, amount = '100%', transition = {}) {
  return {
    hidden: {
      x: direction === 'left' ? `-${amount}` : direction === 'right' ? `${amount}` : 0,
      y: direction === 'up' ? `${amount}` : direction === 'down' ? `-${amount}` : 0,
    },
    show: { x: 0, y: 0, transition: { type: 'spring', ...transition } },
  };
}

export function staggerContainer(staggerChildren = 0.25, delayChildren = 0, transition = {}) {
  return {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren, delayChildren, ...transition } },
  };
}
