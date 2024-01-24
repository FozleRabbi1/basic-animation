import { motion, useAnimationControls } from "framer-motion";
import {
  buttonStyle,
  mainDivStyle,
  motionParentStyle,
  motionStyle,
} from "./StyleVariable";
import { useState } from "react";

const UseAnimationControles = () => {
  const controls = useAnimationControls();
  const [toggle, setToggle] = useState(false);
  const handleForword = () => {
    // controls.set({ opacity: 0, transition: { duration: 0.5 } });
    controls.start((i) => ({
      x: 200,
      transition: {
        duration: 0.5,
        delay: i * 1,
      },
    }));
  };
  const handleBackword = () => {
    controls.start((i) => ({
      x: 0,
      transition: {
        duration: 0.5,
        delay: i * 1,
      },
    }));
  };

  const handleToggle = () => {
    setToggle(!toggle);
    if (toggle) {
      controls.start((i) => ({
        x: 200,
        transition: { duration: 0.5, delay: i * 1 },
      }));
    } else {
      controls.start((i) => ({
        x: -200,
        transition: { duration: 0.5, delay: i * 1 },
      }));
    }
  };

  //   useEffect(() => {
  //     const intervalId = setInterval(() => {
  //       setToggle(true);
  //       controls.start({ x: 0, transition: { duration: 0.5 } });
  //     }, 5000);
  //     return () => clearInterval(intervalId);
  //   }, [controls]);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setToggle(true);
  //       controls.start({ x: 0, transition: { duration: 0.5 } });
  //     }, 3000);
  //   }, [toggle]);

  return (
    <div className={mainDivStyle}>
      <div className={motionStyle}>
        <button onClick={handleForword} className={buttonStyle}>
          forword
        </button>
        <button onClick={handleBackword} className={buttonStyle}>
          backword
        </button>
        <button onClick={handleToggle}>Togglt Button</button>
        {/* {toggle ? <button onClick={handleToggle}>Togglt Button</button> : ""} */}
        <motion.div
          className={motionParentStyle}
          animate={controls}
          custom={0}
          onMouseEnter={() => controls.stop()}
        ></motion.div>
        <motion.div
          className={motionParentStyle}
          animate={controls}
          custom={0.3}
          onMouseEnter={() => controls.stop()}
        ></motion.div>
        <motion.div
          className={motionParentStyle}
          animate={controls}
          custom={0.6}
          onMouseEnter={() => controls.stop()}
        ></motion.div>
        <motion.div
          className={motionParentStyle}
          animate={controls}
          custom={0.9}
          onMouseEnter={() => controls.stop()}
        ></motion.div>
      </div>
    </div>
  );
};

export default UseAnimationControles;
