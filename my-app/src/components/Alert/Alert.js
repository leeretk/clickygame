import React from "react";
import "./style.css";

// Alert renders an li tag containing an message for the user

class Alert extends Component {
    state = {
        message: ""
        
    };

    componentDidUpdate({ myScore, highScore }, prevState) {
        
        if (myScore === 0 && highScore === 0) {
            this.message = "";
        } else if (myScore === 0 && highScore > 0) {
            this.message = "incorrect";
        } else if (myScore === 12) {
            this.message = "winner";
        } 
        else {
            this.message = "correct";
        }

        if (myScore !== this.props.myScore || this.state.message !== this.message) {
            this.setState({ message: this.message});
        }
    }

    renderMessage = () => {
        switch (this.state.message) {
            case "correct":
                return "You guessed correctly!";
            case "incorrect":
                return "You guessed incorrectly!";
            case "winner":
                return "You've Won! Click to play again.";
            default:
                return "Click an image to begin!";
        }
    };

    render() {
        return (
            <h1
                className={this.message}
                
            >
                {this.renderMessage()}
            </h1>
        );
    }
}


export default Alert;