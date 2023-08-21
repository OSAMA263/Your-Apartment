import { motion } from "framer-motion";


const RevealElements = ({ children }) => {
  const onLgScreen = window.matchMedia("(min-width: 540px)")
  
  return (
    <>
      <div className="relative pb-2 overflow-hidden">

          <motion.div
            initial={{ opacity: 0, y: onLgScreen.matches?"100%":"20%" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {children}
          </motion.div>
      </div>
    </>
  );
};

export default RevealElements;
