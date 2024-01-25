import { AnimatePresence, motion } from "framer-motion";
import { mainDivStyle, motionParentStyle, motionStyle } from "./StyleVariable";
import { useState } from "react";

const AnimationPresence = () => {
  const [visible, setVisible] = useState(true);
  const box = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      y: 50,
      //   x: 500,
      transition: {
        duration: 0.8,
      },
    },
  };
  return (
    <div className={mainDivStyle}>
      <div style={{ marginTop: "50px" }} className={motionStyle}>
        <AnimatePresence>
          <motion.button
            layout
            className="border px-3 mt-10 mb-1"
            onClick={() => setVisible(!visible)}
          >
            {visible ? "hide div" : "show div"}
          </motion.button>
          {visible && (
            <motion.div
              className={motionParentStyle}
              variants={box}
              initial="hidden"
              animate="visible"
              exit="exit"
            ></motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AnimationPresence;
