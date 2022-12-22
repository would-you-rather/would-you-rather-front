import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'react-bootstrap/';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';


class QuestionsAttendee extends React.Component {

    //save response to database
    saveResponse = async (index) => {
        let res = await this.props.auth0.getIdTokenClaims();
        let token = res._raw;
        console.log(token);

        let request = {
            method: 'POST',
            url: `http://localhost:3002/questionResponses`,
            headers: { 
                authorization:`Bearer ${token}`
            },  
            data: {
                "roomId": this.props.roomId,
                "userId": this.props.userId,
                "questionListId": this.props.questionListId,
                "questionIndex": this.props.questionIndex,
                "selectedResponseIndex": index
            }
        }

        let response = await axios(request);
        console.log("This is the question responses", response.data);

    }


    render() {
        console.log('this.props.question', this.props.question);
        return (
            <>
                {/* <h1>{this.props.question[0]}</h1> */}
                <Button onClick={() => this.saveResponse(0)}>{this.props.question[0]}</Button>
                <Button onClick={() => this.saveResponse(1)}>{this.props.question[1]}</Button>
            </>
        )
    }
}
export default withAuth0(QuestionsAttendee);
