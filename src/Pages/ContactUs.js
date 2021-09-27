import { motion } from "framer-motion";
import React from "react";
import { pageAnimation } from "../Animation";

const ContactUs = () => {
  return (
    <motion.div variants={pageAnimation} initial="hide" animate="show">
      ContactUS
    </motion.div>
  );
};
export default ContactUs;
