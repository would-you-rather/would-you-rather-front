import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Login from "./Login";
import Logout from "./Logout";
// import GameSelection from '../GameSelection.js';
// import Welcome from '../Welcome.js';

function AuthButtons() {

  const {
    isAuthenticated,
  } = useAuth0();
  console.log(isAuthenticated);
  return (
    <>
      {isAuthenticated ?
      <div>
        {/* <GameSelection /> */}
        <hr />
        <Logout />
      </div>
        : 
        <div>
        <Login />
        </div>
      }
    </>
  )
}

export default AuthButtons;