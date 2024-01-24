import { motion, useInView } from "framer-motion";
import { mainDivStyle, motionParentStyle, motionStyle } from "./StyleVariable";
import { useRef } from "react";

const UseInView = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  console.log(inView);

  return (
    <div className={mainDivStyle}>
      <div className="w-full h-[110vh] bg-red-200"></div>
      <div className={motionStyle} ref={ref}>
        <motion.div
          className={motionParentStyle}
          //   ref={ref}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1.8, delay: 0.5 },
                  scale: 1,
                }
              : { opacity: 0, y: 200, scale: 0 }
          }
        ></motion.div>
      </div>
    </div>
  );
};

export default UseInView;
