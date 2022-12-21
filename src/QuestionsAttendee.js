import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'react-bootstrap/';

class QuestionsAttendee extends React.Component {
    constructor() {
        super();
        this.state = {
            question: {
                question: '',
                option1: '',
                option2: '',
            }   
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
export default QuestionsAttendee;
