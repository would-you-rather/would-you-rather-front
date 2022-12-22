import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap/';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';

const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

class ShowResults extends React.Component {

    constructor(){

        super();
        this.state ={
            resultData: [],
            currentQuestionId: '',
        }

    }
//get all question responses for this room

    getResponses = async (questionIndex) => {
        let res = await this.props.auth0.getIdTokenClaims();
        let token = res._raw;
        console.log(token);

        let request = {
            method: 'GET',
            url: `${REACT_APP_BACKEND_URL}/questionResponses/${this.props.roomId}`,
            headers: {
                authorization: `Bearer ${token}`
            }
        }

        let response = await axios(request);
        console.log("question responses fron show result",response.data);

    //need to check this
        this.setState({
            resultData: response.data.filter(item => item.questionIndex === this.props.questionIndex)
        })
    }

    render() {

        console.log(this.state);

        return (
            <>
                <Button onClick={this.getResponses}>Show Results</Button>
                <ListGroup>
                    {this.state.resultData.map((item,index)=>{
                        if (item.questionIndex === this.props.questionIndex) {
                            return(
                            <ListGroup.Item key={index}> 
                                <p>Player: {item.userId}</p>
                                <p>Selected Response: {this.props.question[item.selectedResponseIndex]}</p>
                            </ListGroup.Item>
                            )
                        } else {
                            return null;
                        }
                    })}
                </ListGroup>
            </>
        )
    }
}
export default withAuth0(ShowResults);