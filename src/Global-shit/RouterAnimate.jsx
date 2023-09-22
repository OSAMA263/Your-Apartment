import { motion } from "framer-motion";

const RouterAnimate = ({ children }) => {
  return (
    <motion.div
      variants={VARIANTS}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};
const VARIANTS = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export default RouterAnimate;
