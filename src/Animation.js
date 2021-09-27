//About us page

//about section
export const titleAnimation = {
  hide: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 2, ease: "easeOut", staggerChildren: 1 },
  },
};

export const pageAnimation = {
  hide: { opacity: 0, transition: { duration: 1 }, y: 300 },
  show: { opacity: 1, transition: { duration: 1 }, y: 0 },
};
