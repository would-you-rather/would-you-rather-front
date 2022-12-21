import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap/';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

class ShowResults extends React.Component {

    constructor(){

        super();
        this.state ={
            resultData: [],
        }

    }
//get all question responses for this room

getResponses = async () => {
    let res = await this.props.auth0.getIdTokenClaims();
    let token = res._raw;
    console.log(token);

    let request = {
        method: 'GET',
        url: `http://localhost:3002/questionResponses/${this.props.roomId}`,
        headers: {
            authorization: `Bearer ${token}`
        }
    }

    let response = await axios(request);
    console.log("question responses fron show result",response.data);

   //need to check this
    this.setState({
        resultData: response.data

    })
}




    render() {

        console.log(this.state);

   

        return (
            <>
                <h1>Results - {this.props.question[0]}</h1>
                <Button onClick={this.getResponses}>Show Results</Button>
        
                <div>
            
                 {this.state.resultData.length ? <p> "Player": {this.state.resultData[0].userId} </p> : null} 
                </div>
                <div> Selected Response: {this.props.question[1]}</div>
   
            </>
        )
    }
}
export default withAuth0(ShowResults);