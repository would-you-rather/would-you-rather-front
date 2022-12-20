import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap/';

class GameSelection extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {

        return (
            <>
        <h1>Welcome to This or That</h1>
        <Form>
        <Form.Label>Choose a theme</Form.Label>
                <Form.Select onChange = {this.handleChange} as = 'select'>
                    <option>Fun</option>
                    
                </Form.Select>
        </Form>
        <div>
        <Button>Create Room</Button>
        
        <Button>Start Game</Button>

        </div>
        

        <div>
            <p>.... people have joined.</p>
        </div>
        <div>
            <p>Share the following link with your friends.</p>
            <link></link>
            <Button>Copy</Button>
        </div>

        

        </>
        )
    }
}
    
export default GameSelection;