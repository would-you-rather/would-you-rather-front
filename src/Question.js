import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'react-bootstrap/';

class Question extends React.Component {
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
<Button>Close Poll</Button>
</>
        )
    }
}

export default Question;