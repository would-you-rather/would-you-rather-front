import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'react-bootstrap/';

class QuestionAttendee extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {

        return (
<>
<h1>Would you rather..</h1>

<div>
<p> </p>
</div>
<Button>This</Button>
<div>
<p></p>
</div>
<Button>That</Button>
</>
        )
    }
}
export default QuestionAttendee;
