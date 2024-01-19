'use client';

import { motion } from 'framer-motion';

const FramerMotionWrapper = ({ children }) => {
  return <motion.div>{children}</motion.div>;
};

export default FramerMotionWrapper;