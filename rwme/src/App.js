
import './App.css';
import LifeCyle from './session4-activity/LifeCycle';
import NetworkStatus from './CheckNetworkStatus/NetworkStatus';

function App() {
  return (
    <div className="App">
     { false && <LifeCyle diff={10}/>}
     {true && <NetworkStatus/>}
    </div>
  );
}

export default App;
