import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap/';
import {withAuth0} from '@auth0/auth0-react';
import axios from 'axios';


class GameSelection extends React.Component {
    constructor() {
        
        super();
        this.state = {
          roomId: '',
        }
    }

    request = async() => {
        let res =  await this.props.auth0.getIdTokenClaims();
        let token = res._raw;
        console.log(token);
    
        let request = {
          method: 'GET',
          url: 'http://localhost:3002/rooms',
          headers: {
            Authorization:`Bearer ${token}`
          }
        }
    
        let response = await axios(request);
        console.log(response.data);
      }
    
    createRoom = async() => {
        let res =  await this.props.auth0.getIdTokenClaims();
        let token = res._raw;
        console.log(token);

        let request = {
            method: 'POST',
            url:'http://localhost:3002/rooms',
            headers: {
                authorization:`Bearer ${token}`,
            },
            data: {
                "owner": this.props.auth0.user.email,
                "questionListId": "Fun"
            }

        };

        let response = await axios(request);
        console.log(response.data);

        this.setState({
            roomId: response.data._id
        });

    }



    
    render() {

        return (
        
            <>
               
        <h1>Welcome to This or That</h1>

        { (!this.state.roomId) && <>
            <Form>
                <Form.Label>Choose a theme</Form.Label>
                <Form.Select onChange = {this.handleChange} as = 'select'>
                            <option>Fun</option>
                            
                </Form.Select>
            </Form>
            <div>
                <Button
                    onClick = {this.createRoom}>Create Room</Button>
            </div>
            </>
        }

        {this.state.roomId &&
            <div>
                <Button>Start Game</Button>
                <p>Share the following link with your friends.</p>
                <input 
                    readOnly= {true} 
                    type="text" 
                    value = {window.location.href + "#/?room=" + this.state.roomId} />
                <Button onClick={() => {navigator.clipboard.writeText(window.location.href + "#/?room=" + this.state.roomId)}}>Copy</Button>         
            </div>
        }

        

        </>
        )
    }
}
    
export default withAuth0(GameSelection);