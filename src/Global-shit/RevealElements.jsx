import { motion } from "framer-motion";

const RevealElements = ({ children }) => {
  return (
    <>
      <div className="relative overflow-hidden pb-2">
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{duration:.5,delay:.2}}
          viewport={{ once: true }}
        >
          {children}
        </motion.div>
      </div>
    </>
  );
};

export default RevealElements;
