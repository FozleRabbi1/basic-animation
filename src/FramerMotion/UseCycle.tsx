import { motion, useCycle } from "framer-motion";

import { mainDivStyle, motionParentStyle, motionStyle } from "./StyleVariable";

const UseCycle = () => {
  const animatedBox = [
    { x: 0, y: 0, opacity: 1 },
    // { x: 0, y: -100 },
    { x: 100, y: -100, opacity: 0.4 },
    { x: 100, y: 100, opacity: 0.6 },
    { x: -100, y: 100, opacity: 0.8 },
    { x: -100, y: -100, opacity: 0.1 },
    // { x: 100, y: -100 },
  ];
  const [animatValue, cycleX] = useCycle(...animatedBox);
  //   const [x, cycleX] = useCycle(0, -100, 100, -200, 200);

  return (
    <div className={mainDivStyle}>
      <div className={motionStyle}>
        <motion.div
          className={motionParentStyle}
          //   animate={{ x: x }}
          animate={animatValue}
          onTap={() => cycleX()}
        ></motion.div>
      </div>
    </div>
  );
};

export default UseCycle;
