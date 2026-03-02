export const FONT_SCALE = {
  xs:   '0.75rem',   // 12px
  sm:   '0.875rem',  // 14px
  base: '1rem',      // 16px
  lg:   '1.125rem',  // 18px
  xl:   '1.25rem',   // 20px
  '2xl':'1.5rem',    // 24px
  '3xl':'1.875rem',  // 30px
  '4xl':'2.25rem',   // 36px
  '5xl':'3rem',      // 48px
};

export const MOTION = {
  duration: {
    fast:    0.15,
    base:    0.25,
    slow:    0.4,
    page:    0.3,
    theme:   0.5,
  },
  ease: {
    default: [0.4, 0, 0.2, 1],
    enter:   [0, 0, 0.2, 1],
    exit:    [0.4, 0, 1, 1],
    spring:  { type: 'spring', stiffness: 300, damping: 28 },
  },
};
