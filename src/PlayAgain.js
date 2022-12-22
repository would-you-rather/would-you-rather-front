import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap/';

class PlayAgain extends React.Component {
    constructor() {
        super();
        this.state = {
            isGameFinished: false,

        }
    }


    //when the play again button is clicked, the user is redirected to the home page
    playAgain = () => {
        window.location.href = '/';
    }

    render() {
        return (
            <>
        
                <Button onClick={this.playAgain}>Play Again</Button> 
                
             
            
               
             
            </>
        )
    }
}

export default PlayAgain;