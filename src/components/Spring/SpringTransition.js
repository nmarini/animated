import React, { useState } from 'react';
// animated is a wrapper for element or component
import { useTransition, animated } from 'react-spring';

export const SpringTransition = () => {
  const items = [
    { text: 'This', id: 0 },
    { text: 'is', id: 1 },
    { text: 'a', id: 2 },
    { text: 'sentence.', id: 3 },
  ];
  // An animated TransitionGroup. Feed it your items,
  // keys (which can be null if items are atomic), and configuration.
  // Whenever items are added or removed, it will animate these changes.
  const transition = useTransition(items, (items) => items.id, {
    from: { opacity: 0, marginLeft: -100, marginRight: 100 },
    enter: { opacity: 1, marginLeft: 0, marginRight: 0 },
  });

  return (
    <>
      {transition.map(({ item, key, props }) => (
        <animated.div key={key} style={props}>
          {item.text}
        </animated.div>
      ))}
    </>
  );
};
