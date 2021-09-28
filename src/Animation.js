//**pages animation**
export const pageAnimation = {
  hide: { opacity: 0, y: 300 },
  show: {
    opacity: 1,
    transition: { duration: 1, staggerChildren: 1 },
    when: "beforeChildren",
    y: 0,
  },
};
//**pages animation**
/***************************************************************/
//**About us page**

//about section
export const titleAnimation = {
  hide: { opacity: 1, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.25,
      when: "beforeChildren",
    },
  },
};
export const fade = {
  hide: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
};
export const photoAnim = {
  hide: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.5 },
  },
};
export const waveAnim = {
  hide: { pathLength: 0, pathOffset: 1 },
  show: { pathLength: 1, pathOffset: 2, transition: { duration: 2 } },
};

//Faq section

export const faqAnim = {
  hide: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
};

//**About us page**
/***************************************************************/
//**ourWork page**

export const lineAnim = {
  hide: { opacity: 0, width: "0%" },
  show: { opacity: 1, width: "100%", transition: { duration: 1 } },
};

export const slider = {
  hide: { x: "-130%", skew: "45deg" },
  show: {
    x: "100%",
    skew: "0deg",
    transition: { ease: "easeOut", duration: 1, staggerChildren: 0.5 },
  },
};
export const sliderContainer = {
  hide: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { ease: "easeOut", staggerChildren: 0.2 },
  },
};
//**ourWork page**
