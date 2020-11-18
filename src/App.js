import logo from './logo.svg';
import './App.css';
import { ClickSpring } from './components/Spring/ClickSpring'

function App() {
  return (
    <div className="App">
      <div style={{display: "flex"}}>Spring effect:{" "} <ClickSpring /></div>
    </div>
  );
}

export default App;
