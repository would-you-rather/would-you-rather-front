import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap/';
import {withAuth0} from '@auth0/auth0-react';
import axios from 'axios';
import QuestionsAttendee from './QuestionsAttendee';
import ShowResults from './ShowResults';
import PlayAgain from './PlayAgain';


const REACT_APP_BACKEND_URL= process.env.REACT_APP_BACKEND_URL;


class GameSelection extends React.Component {
    constructor() {
        
        super();

        const roomId = new URLSearchParams(window.location.search).get('room');

        this.state = {
            roomId: roomId,
            isCurrentUserOwner: false,
            selectedQuestionIndex: -1,
            question: null,
        };
    }

    getRoom = async(id) => {
        let res =  await this.props.auth0.getIdTokenClaims();
        let token = res._raw;
        console.log(token);
    
        // Get information about the room.
        let request = {
          method: 'GET',
          url: `${REACT_APP_BACKEND_URL}/rooms/${id}`,
          headers: {
            Authorization:`Bearer ${token}`
          }
        }
    
        let response = await axios(request);
        console.log(response.data);

        // Get the current question in the room.
        let currentQuestion = await this.getQuestionAtIndex(response.data.selectedQuestionIndex);

        // Update the state with the room and question information.
        this.setState({
            roomId: response.data._id,
            isCurrentUserOwner: response.data.owner === this.props.auth0.user.email,
            selectedQuestionIndex: response.data.selectedQuestionIndex,
            question: currentQuestion,
        });
    }

    createRoom = async() => {
        let res =  await this.props.auth0.getIdTokenClaims();
        let token = res._raw;
        console.log(token);

        let request = {
            method: 'POST',
            url:`${REACT_APP_BACKEND_URL}/rooms`,
            headers: {
                authorization:`Bearer ${token}`,
            },
            data: {
                "owner": this.props.auth0.user.email,
                "questionListId": "Fun"
            }

        };

        let response = await axios(request);
        console.log(response.data);

        this.setState({
            roomId: response.data._id,
            isCurrentUserOwner: true,
            selectedQuestionIndex: -1,
            question: null,
        });

    }

    moveNext = async() => {
        let res =  await this.props.auth0.getIdTokenClaims();
        let token = res._raw;
        console.log(token);

        // Update the room in database to move to next question
        let request = {
            method: 'PUT',
            url:`${REACT_APP_BACKEND_URL}/rooms/${this.state.roomId}`,
            headers: {
                authorization:`Bearer ${token}`,
            },
            data: {
                "owner": this.props.auth0.user.email,
                "selectedQuestionIndex": this.state.selectedQuestionIndex + 1,
            }
        };

        let response = await axios(request);
        console.log(response.data);

        let currentQuestion = await this.getQuestionAtIndex(this.state.selectedQuestionIndex + 1);

        this.setState({
            roomId: response.data._id,
            isCurrentUserOwner: true,
            selectedQuestionIndex: this.state.selectedQuestionIndex + 1,
            question: currentQuestion,
        });
    }

    getQuestionAtIndex = async(index) => {
        let res =  await this.props.auth0.getIdTokenClaims();

        let token = res._raw;
        console.log(token);

        let request = {
            method: 'GET',
            url:`${REACT_APP_BACKEND_URL}/questionLists/Fun/`,
            headers: {
                authorization:`Bearer ${token}`,
            }
        };

        let response = await axios(request);
        console.log(response.data);

        // Find the question at the selected index
        return {
            question: response.data.questions[index],
            isLast: index === response.data.questions.length - 1,
        };
    }



    componentDidMount() {
        if (this.state.roomId) {
            this.getRoom(this.state.roomId);
        }
    }

    handleRoomIdChange = (event) => {
        this.setState({
            pendingRoomId: event.target.value,
        });
    }

    joinRoom = async(id) => {
        await this.getRoom(id);
    }


    render() {

        return (
        
            <>
               
        <h1>Welcome to This or That</h1>

        { (!this.state.roomId) && <>
            <Form>
                <Form.Label>Choose a theme for the game</Form.Label>
                <Form.Select onChange = {this.handleChange} as = 'select'>
                            <option>Fun</option>
                            
                </Form.Select>
                <Button
                    onClick = {this.createRoom}>Create Room</Button>
            </Form>
            <div>
                Join an existing room
                <input type="text" placeholder="Enter Room ID" onChange={this.handleRoomIdChange} />
                <Button onClick={() => { this.joinRoom(this.state.pendingRoomId)}}>Join Room</Button>
            </div>
            </>
        }
       
        {! this.state.isCurrentUserOwner && this.state.roomId && <Button onClick={() => { this.joinRoom(this.state.pendingRoomId)}}>Sync</Button>}


        {this.state.isCurrentUserOwner &&
            <div>

                {((!this.state.question) ||
                    (this.state.question && (!this.state.question.isLast))) && 
                    <Button onClick={this.moveNext}>
                    {this.state.selectedQuestionIndex === -1 ? "Start Game" : "Next Question"}
                </Button>}
                

                {this.state.question && 
                    <>
                        <ShowResults
                            roomId={this.state.roomId}
                            questionListId="Fun"
                            questionIndex={this.state.selectedQuestionIndex}
                            question={this.state.question.question}
                        />
                    </>
                }
            
                <hr />
                <p>Share the following link with your friends.</p>
                <input 
                    readOnly= {true} 
                    type="text" 
                    value = {window.location.href + "?room=" + this.state.roomId} />
                <Button onClick={() => {navigator.clipboard.writeText(window.location.href + "?room=" + this.state.roomId)}}>Copy</Button>  
                   
               <span><PlayAgain /></span> 
            </div>
        }
      
        {this.state.question && 
            <>
                <hr />
                {this.state.question.isLast && <h1>This is the last question! 🎉</h1>}
                <QuestionsAttendee 
                    roomId={this.state.roomId}
                    userId={this.props.auth0.user.email}
                    questionListId="Fun"
                    questionIndex={this.state.selectedQuestionIndex}
                    question={this.state.question.question} 
                />
            </>
        }
        

        </>
        )
    }
}
    
export default withAuth0(GameSelection);