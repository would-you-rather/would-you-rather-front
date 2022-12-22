import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';

function LogoutButton() {

  const {
    isAuthenticated,
    logout
  } = useAuth0();

  function handleLogout() {
    logout({ returnTo: window.location.origin });
  }

  return isAuthenticated &&
    <div className='button-container'>
      <Button class='signout' variant='outline-warning' onClick={handleLogout}>Sign out</Button>
    </div>
    ;
}

export default LogoutButton;