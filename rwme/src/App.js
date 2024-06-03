
import './App.css';
import LifeCyle from './session4-activity/LifeCycle';
import NetworkStatus from './CheckNetworkStatus/NetworkStatus';
import Counter from './session8-activity/components/Counter';
import Debounce from './Session7-activity/Debounse';

function App() {
  return (
    <div className="App">
     { false && <LifeCyle diff={10}/>}
     {false && <NetworkStatus/>}
     {false && <Debounce/>}
     {true && <Counter/>}
    </div>
  );
}

export default App;
