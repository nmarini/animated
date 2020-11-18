import React, { useState } from 'react';
// animated is a wrapper for element or component
import { useSpring, animated } from 'react-spring';
import './reactSpring.css';

export const ReactSpring = () => {
  const [isToggled, setToggle] = useState(true);
  // useSpring creates an object animation

  // fade with toggle - fade in or out
  const fade = useSpring({
    opacity: isToggled ? 1 : 0,
  });

  // fade in only
  const fadeIn = useSpring({
    opacity: 1,
    // "opacity: 1," can also be written as:
    //  to: { opacity: 1 },
    from: {
      opacity: 0,
    },
  });
  return (
    <div onClick={() => setToggle(!isToggled)}>
      {/* animated.div takes the animation outside of react so React does not 
      think about the animation value */}
      <animated.div style={fade}>I'm a React Spring Effect!</animated.div>
    </div>
  );
};
