import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './reactSpring.css';

export const ReactSpring = () => {
  const [isToggled, setToggle] = useState(true);

  const fade = useSpring({
    opacity: isToggled ? 1 : 0,
    // config: {
    //   friction: 100,
    // },
  });

  // fade in only
  // const fadeIn = useSpring({
  //   to: {
  //     opacity: 1,
  //   },
  //   from: {
  //     opacity: 0,
  //   },
  // });
  return (
    <div
      style={{ color: 'teal', fontWeight: 'bold' }}
      onClick={() => setToggle(!isToggled)}
    >
      <animated.div style={fade}>I'm a React Spring Effect!</animated.div>
    </div>
  );
};
