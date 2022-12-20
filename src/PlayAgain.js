import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap/';

class PlayAgain extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {

        return (
            <>
                <h1>That's it...thanks for playing</h1>

                <div>

                    <Button>Play Again</Button>
                </div>
            </>
        )
    }
}

export default PlayAgain;