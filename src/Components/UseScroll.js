import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import React from "react";
import { fade } from "../Animation";

export const UseScroll = ({ children, vieww = 0.5 }) => {
  const [element, view] = useInView({ threshold: vieww });
  const controls = useAnimation();
  if (view) {
    console.log(vieww)
    controls.start("show");
  } else {
    controls.start("hide");
  }
  return (
    <motion.div variants={fade} ref={element} initial="hide" animate={controls}>
      {children}
    </motion.div>
  );
};
