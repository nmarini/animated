// animated is a wrapper for element or component
import { useTrail, animated } from 'react-spring';

export const SpringTrail = () => {
  // Show color example - food ...
  const colors = ['green', 'orange', 'red', 'gold', 'blue', 'black'];
  // Creates multiple springs with a single config,
  // each spring will follow the previous one. Use it for staggered animations.
  const trail = useTrail(colors.length, {
    from: {
      height: '0px',
      width: '0px',
    },
    to: {
      height: '300px',
      width: '100px',
    },
    // If you want to adjust spring settings, you should provide a config property
    config: {
      // Spring mass
      mass: 2,
      // Spring energetic load
      tension: 200,
    },
  });

  return (
    <div style={{ display: 'flex' }}>
      {trail.map((spring, index) => (
        <animated.div
          key={index}
          style={{
            ...spring,
            backgroundColor: colors[index],
            margin: '5px',
          }}
        ></animated.div>
      ))}
    </div>
  );
};
