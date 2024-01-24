import { useAnimate } from "framer-motion";
import { mainDivStyle, motionParentStyle, motionStyle } from "./StyleVariable";
import { useEffect } from "react";

const UseAnimateHook = () => {
  const [scope, animate] = useAnimate();
  // const handleClick = () => {
  //   animate([
  //     [scope.current, { rotate: 45 }],
  //     [scope.current, { opacity: 0.5 }],
  //     [scope.current, { rotate: 45 }],
  //     [scope.current, { opacity: 1 }],
  //     [scope.current, { rotate: 90 }],
  //     [scope.current, { x: 200 }],
  //     [scope.current, { x: -200 }],
  //     [scope.current, { x: 0 }],
  //   ]);
  // };

  useEffect(() => {
    animate([
      [scope.current, { rotate: 45 }],
      [scope.current, { opacity: 0.5 }],
      [scope.current, { rotate: 45 }],
      [scope.current, { opacity: 1 }],
      [scope.current, { rotate: 90 }],
      [scope.current, { x: 200 }],
      [scope.current, { x: -200 }],
      [scope.current, { x: 0 }],
    ]);
  }, []);
  return (
    <div className={mainDivStyle}>
      <div className={motionStyle}>
        <div
          className={motionParentStyle}
          ref={scope} /// ------->> scope ekhane onekta (ref) er kaj koreche
          // onClick={handleClick}
        ></div>
      </div>
    </div>
  );
};

export default UseAnimateHook;
