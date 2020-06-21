import React, { Component } from "react";
import "./style.css";

class Alert extends Component {

  state={
    message:"",
  };

  componentDidUpdate({ myScore, highScore }, prevState) {

    if (myScore === 0 && highScore === 0) {  
      this.message ="default";
    } else if (myScore === 0 && highScore > 0) {
      this.message = "incorrect";
    } else if (myScore === 12) {
      this.message = "winner";
    } else {
      this.message = "correct";
    }
    if (myScore !== this.props.myScore || this.state.message !== this.message ) {
      this.setState({ message: this.message});     
    }
  };

    renderMessage = () => {
    switch (this.state.message) {
        case "correct":
            return "You Guessed Correctly!"
        case "incorrect": 
            return "You guessed Incorrectly"
        case "winner":
            return "You Win, click to play again!"
        default:
            return "Click an image to Begin!"
    }
  }
        
  render() {
    return (
        <h1 className = {this.message}>
              {this.renderMessage}
          </h1>
      );
  }

};

export default Alert;
