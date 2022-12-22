import React from 'react';

import {withAuth0} from '@auth0/auth0-react';


class Welcome extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
        roomId: '',
      }
  }



  request = async() => {
    let res =  await this.props.auth0.getIdTokenClaims();
    let token = res._raw;
    console.log(token);
  }

  render() {
    let auth0 = this.props.auth0
    console.log(auth0);
    return (
      <>
      <h1> Welcome to This or That</h1>
      <h2>Sign in to continue</h2>
      
      { auth0.isAuthenticated
      ? <button onClick={this.request} > Login </button>
      : null
       }
      </> 
      
    )
  }
}

export default withAuth0(Welcome);