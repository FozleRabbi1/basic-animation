import { useRef } from "react";
import "../AnimationStyle/Drag.css";
import { motion } from "framer-motion";

const styleAliment = {
  //   hidden: { opacity: 0, scale: 0.8 },
  hidden: { opacity: 0, x: -100, y: -100 },
  show: {
    // opacity: 0.8,
    opacity: 1,
    x: [0, 80, -80, 0],
    y: [0, 80, -80, 0],
    rotate: [0, 80, -80, 0],
    // scale: 1,
    transition: {
      ease: "linear",
      repeat: Infinity,
      duration: 5,
      delayChildren: 0.8,
      staggerChildren: 0.3, //-------->> er sahajje children gulo ekta ekta kore show hobe ui te
      opacity: {
        duration: 2,
      },
      //   rotate: {
      //     // delay: 1,
      //     // repeat: Infinity,
      //   },
    },
  },
  whileTap: {
    rotate: 5,
    scale: 1.2,
    boxShadow: "10px 10px 30px #585757",
  },
  //   hover: { scale: 1.1, transition: { duration: 0.5 } },
  hover: { opacity: 1 },
};

const childItems = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const GesutureDrag = () => {
  const parentRef = useRef(null);
  const motionStyle =
    "size-64 bg-red-400 rounded-md flex flex-wrap gap-5 justify-center items-center";
  const motionParentStyle =
    "border border-red-400 size-[500px] flex justify-center items-center";
  const childStyle =
    "size-20 bg-green-400 rounded-md flex justify-center items-center";
  return (
    <div className="Drag-main">
      <div ref={parentRef} className={motionParentStyle}>
        <motion.div
          className={motionStyle}
          variants={styleAliment}
          initial="hidden"
          animate="show"
          whileTap="whileTap"
          whileHover="hover"
          drag
          dragPropagation //---------->>  opacity thakle sei style k bar bar call korbe
          dragSnapToOrigin //---------->>  er sahajje animated div tar jaigai fere asbe
          dragElastic={0.6} //---------->>  eti Elasticity kom beshi kore and false dile Elasticity off kore dei
          dragConstraints={parentRef} //---------->>  er sahajje animated div kotoduku jaiga niye animate hobe ta nirdharon kore
          //   dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
          whileDrag={{
            //--------->> animated div more korar somoy style change hobe
            scale: 1.2,
            boxShadow: "10px 10px 30px #2cf02c",
          }}
        >
          <motion.div className={childStyle} variants={childItems}>
            One
          </motion.div>
          <motion.div className={childStyle} variants={childItems}>
            Two
          </motion.div>
          <motion.div className={childStyle} variants={childItems}>
            Three
          </motion.div>
          <motion.div className={childStyle} variants={childItems}>
            Foure
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default GesutureDrag;
