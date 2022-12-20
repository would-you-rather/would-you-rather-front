import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap/';

class ShowResults extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {

        return (
            <>
                <h1>Would you rather...</h1>

                <div>

                </div>
                <Button>Next</Button>
                <Button>End Game</Button>
            </>
        )
    }
}
export default ShowResults;