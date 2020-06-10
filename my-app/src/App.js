import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import './App.css';

class App extends Component {
  // Setting this.state.friends to the friends json array
  //put variables we will use (current score, top score, increment etc.)
  //create a clicked friends array -- loop through click friends array
  state = {
    friends,
    clickedFriends:[],
    topScore:0,
    currentScore:0,
    };
  
    shuffle() {
      var j, x, i;
      for (i = friends.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = friends[i];
          friends[i] = friends[j];
          friends[j] = x;
      }
      this.setState({ friends:friends });
  };


  handleClick = id => {

    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });

    // Filter this.state.clickedFriends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });

    //increment scores

    //validate was this id clicked already
        //if not clicked increment 
        //if clicked lose
    this.shuffle()

  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            handleClick={this.handleClick}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}


export default App;
