import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'react-bootstrap/';

class AttendeeJoin extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {

        return (
<>
<h1>Welcome,... to This or That, hosted by ...</h1>

<div>
<p> The game hasn't started yet.</p>
</div>
<Button>Join Game</Button>
</>
        )
    }
}
export default AttendeeJoin;
