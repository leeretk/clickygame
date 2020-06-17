import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Counter from "./components/Counter";
import './App.css';

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    myScore:0,
    highScore:0,
    friendClicked:[]
  };

  handleClick = () => {
    this.setState({ myScore: this.state.myScore + 1 });
    this.setState({ highScore: this.state.highScore + 1 });


  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        <Counter />;
        {this.state.friends.map(friend => (
          <FriendCard
            handleClick={this.handleClick}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
