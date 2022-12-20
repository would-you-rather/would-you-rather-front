import './App.css';
import AuthButtons from './auth/AuthButton';
import Welcome from './Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Welcome />
        
        
        <AuthButtons />
      </header>
    </div>
  );
}

export default App;
