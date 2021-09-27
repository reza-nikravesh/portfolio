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
//button and p tag
export const fade = {
  hide: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
};

export const photoAnim = {
  hide: { y: 100, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.5 },
  },
};

export const waveAnim = {
  hide: { pathLength: 0, pathOffset: 1 },
  show: { pathLength: 1, pathOffset: 2, transition: { duration: 2 } },
};

//**About us page**
