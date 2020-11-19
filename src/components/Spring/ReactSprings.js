import { useSprings, animated } from 'react-spring';
import './reactSpring.css';

export const ReactSprings = () => {
  const data = [
    {
      id: 1,
      from: {
        backgroundColor: 'lawngreen',
        width: 600,
      },
      to: {
        backgroundColor: 'burlywood',
        width: 200,
      },
      config: {
        friction: 100,
        mass: 50,
      },
    },
    {
      id: 2,
      from: {
        backgroundColor: 'red',
        width: 600,
      },
      to: {
        backgroundColor: 'yellow',
        width: 100,
      },
      config: {
        friction: 40,
        mass: 10,
      },
    },
    {
      id: 3,
      from: {
        backgroundColor: 'orange',
        width: 200,
      },
      to: {
        backgroundColor: 'teal',
        width: 520,
      },
      config: {
        friction: 60,
        mass: 100,
      },
    },
  ];

  // Creates multiple springs, each with its own config. Use it for static lists, etc.
  const springs = useSprings(
    data.length,
    data.map(({ id, ...config }) => config)
  );

  return (
    <div>
      {springs.map((spring, index) => (
        <animated.div
          key={data[index].id}
          style={{ ...spring, height: 50 }}
        ></animated.div>
      ))}
    </div>
  );
};
