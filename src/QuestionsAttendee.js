import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'react-bootstrap/';

class QuestionsAttendee extends React.Component {

    render() {
        return (
            <>
                <h1>{this.props.question[0]}</h1>
                <Button>{this.props.question[1]}</Button>
                <Button>{this.props.question[2]}</Button>
            </>
        )
    }
}
export default QuestionsAttendee;
