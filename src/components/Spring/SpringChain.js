import React, { useRef } from 'react';
import { useChain, useSpring, animated } from 'react-spring';

export const SpringChain = () => {
  const useAnimation = (ref) => {
    const spring = useSpring({
      from: {
        color: 'grey',
        opacity: 0,
      },
      to: [
        // Can be an array of multiple configurations or just one
        {
          color: 'red',
          opacity: 1,
        },
        // you can add more animations

        // {
        //   color: 'green',
        // },
        // {
        //   opacity: 0,
        // },
      ],
      ref: ref,
    });
    return spring;
  };
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();

  const style1 = useAnimation(ref1);
  const style2 = useAnimation(ref2);
  const style3 = useAnimation(ref3);

  // Set the execution order of previously defined animation-hooks,
  // where one animation starts after the other in sequence.
  // You need to collect refs off the animations you want to chain,
  // which blocks the animation from starting on its own.
  useChain([ref1, ref2, ref3]);

  // Can change the order of the chain of effects
  // useChain([ref2, ref1, ref3]);
  return (
    <div>
      <animated.h4 style={style1}>This</animated.h4>
      <animated.h4 style={style2}>is</animated.h4>
      <animated.h4 style={style3}>useChain!</animated.h4>
    </div>
  );
};
