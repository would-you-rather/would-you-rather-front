import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'react-bootstrap/';

class AnswerSelection extends React.Component {
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
<Button>This</Button>
</div>
<div>
<p></p>
<Button>That</Button>
</div>
<div>
<p>Wait for the next question</p>
<Button>Next</Button>
</div>
</>
        )
    }
}
export default AnswerSelection;