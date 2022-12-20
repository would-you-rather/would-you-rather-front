import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import AuthButtons from './auth/AuthButton';
// import { Link } from "react-router-dom";
import {withAuth0} from '@auth0/auth0-react';
import axios from 'axios';

class Welcome extends React.Component {

  request = async() => {
    let res =  await this.props.auth0.getIdTokenClaims();
    let token = res._raw;
    console.log(token);

    let request = {
      method: 'GET',
      url: 'http://localhost3001/test',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    let response = await axios(request);
    console.log(response.data);
  }

  render() {
    let auth0 = this.props.auth0
    console.log(auth0);
    return (
      <>
      <h1> Welcome to This or That</h1>
      <h2>Sign in to continue</h2>

      {/* <Navbar collapseOnSelect expand="lg" bg="primary" variant="primary">
        <Navbar.Brand>Welcome</Navbar.Brand> */}
        {/* <NavItem><Link to="/" className="nav-link">Home</Link>
        </NavItem> */}
        {/* <NavItem><Link to="/about" className="nav-link">About Us</Link>
        </NavItem> */}
      {/* </Navbar><AuthButtons /> */}
      {auth0.isAuthenticated
      ? <button onClick={this.request} > Login </button>
      : null
      }
      </>
      
    )
  }
}

export default withAuth0(Welcome);