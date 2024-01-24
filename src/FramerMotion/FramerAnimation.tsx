import { motion } from "framer-motion";
import "../AnimationStyle/AnimaionStyle.css";

// const initial = { rotate: 0 };
// const animate = { rotate: 360, boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)" };

// const parent = {
//   jenoko: { rotate: 0 },
//   nam: { rotate: 360, boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2) " },
// };

// const transition = {
//   ease: "linear",
//   duration: 4,
//   repeat: Infinity,
//   repeatType: "reverse",
// };

const parent2 = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
  hover: { scale: 1.1, transition: { duration: 0.5 } },
  whileTop: { scale: 1, rotate: 45 },
  transition: {
    scale: 1,
    ease: "easeInOut",
    duration: 1,
    delayChildren: 0.3,
    staggerChildren: 0.3,
  },
};

const child = {
  hidden: { opacity: 0, scale: 0.1 },
  visible: { opacity: 1, scale: 1 },
};

const FramerAnimation = () => {
  return (
    <div className="main">
      <motion.div
        className="size-64 bg-indigo-400 rounded-lg flex flex-wrap gap-5 justify-center items-center"
        variants={parent2}
        initial="hidden"
        animate="visible"
        // transition={{
        //   scale: 1,
        //   ease: "easeInOut",
        //   duration: 1,
        //   delayChildren: 0.3,
        //   staggerChildren: 0.3,
        // }}
        whileHover="hover"
        whileTap="whileTop"
        onHoverStart={() => console.log("hoverd")}
        onHoverEnd={() => console.log("hoverd end")}
      >
        <motion.div
          className="bg-cyan-400 size-20 rounded-md"
          variants={child}
        ></motion.div>
        <motion.div
          className="bg-cyan-400 size-20 rounded-md"
          variants={child}
        ></motion.div>
        <motion.div
          className="bg-cyan-400 size-20 rounded-md"
          variants={child}
        ></motion.div>
        <motion.div
          className="bg-cyan-400 size-20 rounded-md"
          variants={child}
        ></motion.div>
      </motion.div>

      {/* ====================== */}
      {/* <motion.div
        className="size-52 bg-indigo-400 rounded-lg"
        variants={parent}
        initial="jenoko"
        animate="nam"
        transition={{
          ease: "linear",
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        this is framer motion
      </motion.div> */}

      <motion.button
        className="mt-10"
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        button
      </motion.button>
    </div>
  );
};

export default FramerAnimation;
