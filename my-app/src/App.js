import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Score from "./components/Score";
import Alert from "./components/Alert";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    myScore:0,
    highScore:0,
  };

  componentDidMount() {
    this.setState({ friends: this.shuffleFriends(this.state.friends)});
  };
  
  reShuffle = friendData => {
    const reShuffle = friendData.map(friends => ({...friends, clicked: false}));
    return this.shuffleFriends(reShuffle);
  };

  shuffleFriends = friends => {
    let i = friends.length -1; 
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = friends[i];
      friends[i] = friends[j];
      friends[j] = temp;
      i--;
    }
    return friends;
  }

  handleClick = id => {
    let correctGuess = false;
    const newClick = this.state.friends.map(friends => {
      const newFriend = { ...friends };
      if (newFriend.id === id) {
        if (!newFriend.clicked) {
          newFriend.clicked = true;
          correctGuess = true;
        }
      }
      return newFriend;
    });
    correctGuess
      ? this.handleCorrect(newClick)
      : this.handleIncorrect(newClick);
  };
  handleCorrect = newData => {
    console.log("Correct Click");
    const { highScore, count } = this.state;
    const myNewScore = count + 1;
    const newHighScore = Math.max(myNewScore, highScore);

    this.setState({
        friends: this.shuffleFriends(newData),
        count: myNewScore,
        highScore: newHighScore
    });
};

handleIncorrect = data => {
  console.log("Incorrect click");
    this.setState({
        friends: this.resetData(data),
        count: 0
    });
};

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (

      <div>
        <nav myScore={this.state.myScore} highScore={this.state.highScore} />

      <Wrapper>       
        <Title>Friends List</Title>      
        <Score />;
        <Alert />; 
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
      </div> 
    );
  }
}

export default App;
