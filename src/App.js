import GatewayCard from './components/GatewayCard/GatewayCard';
import GatewayLoop from './components/GatewayCard/GatewayLoop';
import LineLoop from './components/LineData/LineLoop';
import './index.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Header-content">
        <img src={require('../src/ZuoraLogo.png')} className="App-logo" alt="logo" />
        <p>
          Payment Gateway Health Status
        </p>
        </div>

      </header>
      <body>
      <GatewayLoop/>
      </body>
    </div>
  );
}

export default App;
