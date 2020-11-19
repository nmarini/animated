import { Transition } from 'react-transition-group';
const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 0 },
  exiting: { opacity: 1 },
  exited: { opacity: 1 },
};

export const TransitionFade = ({ in: inProp }) => {
  return (
    <div style={{ color: 'teal', fontWeight: 'bold' }}>
      <Transition in={inProp} timeout={duration}>
        {(state) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            I'm a React Transition Group Effect!
          </div>
        )}
      </Transition>
    </div>
  );
};
