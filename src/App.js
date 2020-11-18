import './App.css';
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { ReactSpring } from './components/Spring/ReactSpring';
import { ReactSprings } from './components/Spring/ReactSprings';
import { SpringTransition } from './components/Spring/SpringTransition';
import { SpringTrail } from './components/Spring/SpringTrail';
import { SpringChain } from './components/Spring/SpringChain';
import { TransitionFade } from './components/Springs/TransitionFade';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './styles.css';
const App = () => {
  const [fadeTransition, setTransition] = useState(0);
  return (
    <div className='App'>
      <div
        style={{
          fontSize: 'medium',
          width: '45vw',
          maxWidth: '9000px',
          height: '60vh',
        }}
      >
        <h1>Effects from React Springs</h1>
        <Tabs>
          <TabList>
            <Tab>React Transition Group - Fade</Tab>
            <Tab>Spring useSpring - Fade</Tab>
            <Tab>Spring useSprings - multiple spring configs </Tab>
            <Tab>Spring useTransition - Transition </Tab>
            <Tab>Spring useTrail - Trail </Tab>
            <Tab>Spring useChain - Chain </Tab>
          </TabList>

          <TabPanel>
            <div
              onClick={() =>
                fadeTransition === 0 ? setTransition(1) : setTransition(0)
              }
            >
              <TransitionFade in={fadeTransition} />
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <ReactSpring />
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <ReactSprings />
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <SpringTransition />
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <SpringTrail />
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <SpringChain />
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default App;
