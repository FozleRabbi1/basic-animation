import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { mainDivStyle, motionParentStyle, motionStyle } from "./StyleVariable";

const UseScroll = () => {
  const { scrollX, scrollY, scrollXProgress, scrollYProgress } = useScroll();
  //   useMotionValueEvent(scrollY, "change", (e) => {
  //     console.log("scrolY === ", e);
  //   });
  //   useMotionValueEvent(scrollYProgress, "change", (e) => {
  //     console.log("progress === ", e);
  //   });
  //   console.log(scrollYProgress);
  return (
    <motion.div className={mainDivStyle}>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="h-[5px] fixed top-0 w-full bg-red-800"
      ></motion.div>
      <div style={{ marginTop: "50px" }} className={motionStyle}>
        <motion.div className={motionParentStyle}></motion.div>
      </div>
      <div className="h-[1000px]"></div>
    </motion.div>
  );
};

export default UseScroll;
