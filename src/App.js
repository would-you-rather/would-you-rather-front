import './App.css';
// import './style.css';
import './index.css';
import AuthButtons from './auth/AuthButton';

import Welcome from './Welcome';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import GameSelection from './GameSelection';
import { useAuth0 } from '@auth0/auth0-react';
import About from './About';

function App() {
  const { isAuthenticated } = useAuth0();
  return (

    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Link to='/'>Home</Link>
          <Link to='/About'>About</Link>


          <AuthButtons />

        </header>
        <Routes>
          <Route exact path='/' element={isAuthenticated ? <GameSelection /> : <Welcome />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </div>

    </BrowserRouter>

  );
}

export default App;
