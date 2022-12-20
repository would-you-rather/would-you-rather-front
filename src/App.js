import './App.css';
import AuthButtons from './auth/AuthButton';
import Welcome from './Welcome';
import GameSelection from './GameSelection';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Welcome />
        
        
        <AuthButtons />
        <GameSelection></GameSelection>
      </header>
    </div>
  );
}

export default App;
